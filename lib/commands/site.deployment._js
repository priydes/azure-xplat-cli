/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var util = require('util');
var async = require('async');
var url = require('url');

var Channel = require('../util/channel');

var interaction = require('../util/interaction');
var cacheUtils = require('../util/cacheUtils');
var utils = require('../util/utils');

var linkedRevisionControl = require('../util/git/linkedrevisioncontrol');

exports.init = function (cli) {
  var $ = cli.getLocaleString;

  var log = cli.output;
  var site = cli.category('site');
  var scm = site.category('deployment')
    .description($('Commands to manage your Web Site deployments'));

  function getScmChannel(context) {
    var parts = url.parse(context.repositoryUri);
    var channel = new Channel({
      host: parts.hostname,
      port: (parts.port && parseInt(parts.port, 10)) || (/https/i.test(parts.protocol) ? 443 : 80),
      auth: context.repositoryAuth
    });

    var proxyString =
            process.env.HTTPS_PROXY ||
            process.env['https_proxy'] ||
            process.env.ALL_PROXY ||
            process.env['all_proxy'];

    if (proxyString !== undefined) {
      var proxyUrl = url.parse(proxyString);
      if (proxyUrl.protocol !== 'http:' &&
                proxyUrl.protocol !== 'https:') {
        // fall-back parsing support XXX_PROXY=host:port environment variable values
        proxyUrl = url.parse('http://' + proxyString);
      }

      channel = channel.add({ proxy: proxyUrl });
    }

    return channel;
  }
  scm.getScmChannel = getScmChannel;

  scm.command('list [name]')
    .usage('[options] [name]')
    .description($('List your git deployments'))
    .option('-m, --max <count>', $('Limit the maximum number of results'))
    .option('-s, --subscription <id>', $('The subscription id'))
    .execute(function (name, options, _) {
      var context = {
        subscription: cli.category('account').lookupSubscriptionId(options.subscription),
        maxItems: options.max,
        site: {
          name: name
        }
      };

      var repositoryUri = site.ensureRepositoryUri(context, _);
      if (repositoryUri) {
        listDeployments(context, _);
      } else {
        log.error('Repository is not setup');
      }
    });

  scm.command('show <commitId> [name]')
    .usage('[options] <commitId> [name]')
    .description($('Show your git deployment'))
    .option('-d, --details', $('Display log details'))
    .option('-s, --subscription <id>', $('The subscription id'))
    .execute(function (commitId, name, options, _) {
      var context = {
        subscription: cli.category('account').lookupSubscriptionId(options.subscription),
        shortId: commitId,
        site: {
          name: name
        }
      };

      if (!(context.id = cacheUtils.readCommitId(context, _))) {
        return log.error(util.format($('Deployment with %s does not exist'), commitId));
      }

      var repositoryUri = site.ensureRepositoryUri(context, _);
      if (repositoryUri) {
        var deployment = scm.doDeploymentGet(context, _);

        if (log.format().json) {
          var data = deployment;
          if (options.details) {
            data.logs = getLogDetails(context, _);
          }

          log.json(data);
        } else {
          site.logEachData('info', deployment);
          if (options.details) {
            var logs = getLogDetails(context, _);
            for (var i = 0; i < logs.length; ++i) {
              displayLog(logs[i]);
              if (logs[i].details) {
                var details = logs[i].details;
                for (var j = 0; j < details.length; ++j) {
                  displayLog(details[j]);
                }
              }
            }
          } else {
            log.help($('To see more details, specify -d or --details option'));
          }
        }
      } else {
        log.error($('Repository is not setup'));
      }
    });

  scm.command('redeploy <commitId> [name]')
    .usage('[options] <commitId> [name]')
    .description($('Redeploy your git deployment'))
    .option('-q, --quiet', $('quiet mode, do not ask for redeploy confirmation'))
    .option('-s, --subscription <id>', $('The subscription id'))
    .execute(function (commitId, name, options, _) {
      var context = {
        subscription: cli.category('account').lookupSubscriptionId(options.subscription),
        shortId: commitId,
        site: {
          name: name
        }
      };

      if (!(context.id = cacheUtils.readCommitId(context, _))) {
        return log.error(util.format($('Deployment with %s does not exist'), commitId));
      }

      var repositoryUri = site.ensureRepositoryUri(context, _);
      if (repositoryUri) {
        if (!options.quiet && !site.confirm(util.format($('Reploy deployment with %s id? [y/n] '), context.shortId), _)) {
          return;
        }
        scm.doDeploymentPut(context, _);
        listDeployments(context, _);
      } else {
        log.error($('Repository is not setup'));
      }
    });

  scm.command('github [name]')
    .usage('[options] [name]')
    .description($('Link a website to a github account for deployment'))
    .option('--githubusername <username>', $('The github username'))
    .option('--githubpassword <password>', $('The github password'))
    .option('--githubrepository <repository>', $('The github repository full name (i.e. user/repository)'))
    .option('-s, --subscription <id>', $('The subscription id'))
    .execute(function (name, options, _) {
      var context = {
        subscription: cli.category('account').lookupSubscriptionId(options.subscription),
        site: {
          name: name
        },
        github: {
          username: options.githubusername,
          password: options.githubpassword,
          repositoryFullName: options.githubrepository
        },
        flags: { }
      };

      if (!context.github.repositoryFullName) {
        // If no explicit github repository URI is passed
        // this command always prompts the user for a repository
        context.flags = { forceRepositorySelection: true };
      }

      // Fetch site and website repository data
      site.ensureRepositoryUri(context, _);
      if (!context.repositoryUri) {
        // If there is no website remote repo, initialize it
        initializeRemoteRepo(_);
      }

      context.lvcClient = linkedRevisionControl.createClient(cli, 'github');
      context.lvcClient.init(context, _);
      context.lvcClient.deploy(context, _);

      function initializeRemoteRepo(_) {
        log.silly('InitializeRemoteRepo');
        site.doRepositoryPost(context, _);
        site.ensureRepositoryUri(context, _);
      }
    });

  var user = scm.category('user')
    .description($('Commands to manage your Web Site deployment users'));

  user.command('set [username] [pass]')
    .usage('[options] [username] [pass]')
    .description($('Set the deployment credentials'))
    .option('-u, --username <gitUsername>', $('The new git username'))
    .option('-p, --pass <gitPassword>', $('The new git password'))
    .option('-s, --subscription <id>', $('The subscription id'))
    .execute(function (username, pass, options, _) {
      var params = utils.normalizeParameters({
        username: [username, options.username],
        pass: [pass, options.pass]
      });

      if (params.err) { throw params.err; }

      username = interaction.promptIfNotGiven(cli, $('Git username: '), params.values.username, _);
      pass = interaction.promptPasswordIfNotGiven(cli, $('Git password: '), params.values.pass, _);

      var progress = cli.progress($('Setting user credentials'));
      try {
        var websiteManagementService = createWebsiteManagementService(cli.category('account').lookupSubscriptionId(options.subscription));
        websiteManagementService.createPublishingUser(username, pass, _);
      } catch (e) {
        progress.end();
        if (e.messagetemplate === $('This operation is not supported for subscriptions that have co-admins')) {
          portalGitInitInstruction(_);
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
    });

  function portalGitInitInstruction(_) {
    log.help($('You must create your git publishing credentials using the Windows Azure portal for co-admin accounts'));
    log.help($('Please follow these steps in the portal:'));
    log.help($('1. In the menu on the left select "Web Sites"'));
    log.help($('2. Click on any site'));
    log.help($('3. Click on "Set up Git publishing" or "Reset deployment credentials" and setup a publishing username and password. Use those credentials for all new websites you create'));

    if (confirm($('Launch browser to portal now? [y/n] '), _)) {
      log.help($('Launching portal'));
      var href = cli.environmentManager.getPortalUrl();
      interaction.launchBrowser(href);
    }
  }

  function confirm (label, callback) {
    cli.confirm(label, function (x) {
      callback(null, x);
    });
  }

  scm.doDeploymentsGet = function (context, _) {
    var maxItems = parseInt(context.maxItems, 10);
    if (!maxItems || maxItems <= 0) {
      maxItems = 20;
    }

    var channel = getScmChannel(context)
      .path('deployments')
      .query('$orderby', 'ReceivedTime desc')
      .query('$top', maxItems);

    var progress = cli.progress($('Enumerating deployments'));
    try {
      var deployments = ensureShortCommitId(channel.GET(_));
      cacheUtils.saveCommitIds(context, deployments, _);
      return deployments.map(formatDeployment);
    } finally {
      progress.end();
    }
  };

  scm.doDeploymentGet = function (context, _) {
    var channel = getScmChannel(context)
      .path('deployments')
      .path(context.id);

    var progress = cli.progress($('Retrieving deployment info'));
    try {
      return formatDeployment(channel.GET(_));
    } finally {
      progress.end();
    }
  };

  scm.doDeploymentPut = function (context, _) {
    var channel = getScmChannel(context)
      .path('deployments')
      .path(context.id);

    var progress = cli.progress($('Redeploying deployment'));
    try {
      return channel.PUT(null, _);
    } finally {
      progress.end();
    }
  };

  scm.doLogGet = function (context, _) {
    var channel = getScmChannel(context)
      .path('deployments')
      .path(context.id)
      .path('log');

    var progress = cli.progress($('Retrieving deployment log info'));
    try {
      var logs = channel.GET(_);
      return logs.map(formatLog);
    } finally {
      progress.end();
    }
  };

  function createWebsiteManagementService(subscription) {
    var account = cli.category('account');
    var subscriptionId = account.lookupSubscriptionId(subscription);
    return utils.createWebsiteManagementService(subscriptionId, account, log);
  }

  function listDeployments(context, _) {
    var deployments = scm.doDeploymentsGet(context, _);
    var authorLength = 0, messageLength = 0;
    if (deployments && deployments.length) {
      log.table(deployments, function (row, deployment) {
         /*jshint camelcase:false*/
        row.cell($('Time'), deployment.start_time);
        row.cell($('Commit id'), deployment.shortId);
        row.cell($('Status'), deployment.status);
        authorLength = Math.max(deployment.author.length, authorLength);
        row.cell($('Author'), deployment.author, null, Math.min(authorLength, 15));
        messageLength = Math.max(deployment.message.length, messageLength);
        row.cell($('Message'), deployment.message, null, Math.min(messageLength, 40));
      });
    } else {
      log.info($('No git deployment found'));
    }
  }

  function getLogDetails(context, _) {
    var results,
        logs = scm.doLogGet(context, _);
    if (logs && logs.length) {
      var progress = cli.progress($('Retrieving log details'));
      try {
        results = async.map(logs, function (log, _) {
          if (log.hasDetails) {
            var details = getScmChannel(context)
              .path('deployments')
              .path(context.id)
              .path('log')
              .path(log.id)
              .GET(_);
            return details.map(formatLog);
          }
        }, _);
      } finally {
        progress.end();
      }

      for (var i = 0; i < logs.length; ++i) {
        if (results[i]) {
          logs[i].details = results[i];
        }
      }

      return logs;
    } else {
      log.info($('Deployment has no detail'));
      return [];
    }
  }

  function displayLog(item) {
    if (item.type === 'Warning') {
      /*jshint camelcase:false*/
      log.warn(item.short_time + ' ' + item.message);
    } else if (item.type === 'Error') {
      /*jshint camelcase:false*/
      log.error(item.short_time + ' ' + item.message);
    } else {
      /*jshint camelcase:false*/
      log.data(item.short_time + ' ' + item.message);
    }
  }

  function fromJsonDate(str) {
    return new Date(str);
  }

  function formatDate(dt) {
    var date = dt.getDate(),
        month = dt.getMonth() + 1;
    date = (date < 10 ? '0' : '') + date;
    month = (month < 10 ? '0' : '') + month;
    return dt.getFullYear() + '-' + month + '-' + date + ' ' + dt.toLocaleTimeString();
  }

  function dateTimeText(str) {
    return formatDate(fromJsonDate(str));
  }

  function deploymentStatusText(status) {
    switch (status) {
    case 0:
      return 'Pending';
    case 1:
      return 'Building';
    case 2:
      return 'Deploying';
    case 3:
      return 'Failed';
    case 4:
      return 'Success';
    default:
      return 'Unknown';
    }
  }

  function logTypeText(type) {
    switch (type) {
    case 0:
      return 'Message';
    case 1:
      return 'Warning';
    case 2:
      return 'Error';
    default:
      return 'Unknown';
    }
  }

  function ensureShortCommitId(deployments) {
    return deployments.map(function (deployment) {
      deployment.shortId = deployment.id.substr(0, 10);
      return deployment;
    });
  }

  function formatDeployment(deployment) {
    var timeProperties = ['end_time', 'last_success_end_time', 'received_time', 'start_time'];
    for (var i = 0; i < timeProperties.length; ++i) {
      if (deployment[timeProperties[i]]) {
        deployment[timeProperties[i]] = dateTimeText(deployment[timeProperties[i]]);
      }
    }
    deployment.complete = (!!deployment.complete).toString();
    deployment.status = deployment.active ? 'Active' : deploymentStatusText(deployment.status);
    deployment.message = deployment.message.replace(/\s*(.*)\s*?/g, '$1');
    delete deployment.active;
    /*jshint camelcase:false*/
    delete deployment.status_text;
    delete deployment.url;
    /*jshint camelcase:false*/
    delete deployment.log_url;
    return deployment;
  }

  function formatLog(log) {
    /*jshint camelcase:false*/
    log.hasDetails = !!log.details_url;
    log.log_time = log.log_time && dateTimeText(log.log_time);
    log.short_time = log.log_time && log.log_time.replace(/.* +(.*)/g, '$1');
    log.type = logTypeText(log.type);
    log.shortId = log.id.substr(0, 10);
    delete log.details_url;
    return log;
  }
};