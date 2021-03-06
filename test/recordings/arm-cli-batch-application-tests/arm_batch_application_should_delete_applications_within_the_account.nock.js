// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370/applications/armclibatchapp4948?api-version=2015-12-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': 'd294b71a-016e-4ac4-9e9c-39eb6714dbba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'ca4665c7-8c2c-4a2b-9fce-4042cbccc6c7',
  'x-ms-correlation-request-id': 'ca4665c7-8c2c-4a2b-9fce-4042cbccc6c7',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T190927Z:ca4665c7-8c2c-4a2b-9fce-4042cbccc6c7',
  date: 'Wed, 13 Apr 2016 19:09:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370/applications/armclibatchapp4948?api-version=2015-12-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': 'd294b71a-016e-4ac4-9e9c-39eb6714dbba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'ca4665c7-8c2c-4a2b-9fce-4042cbccc6c7',
  'x-ms-correlation-request-id': 'ca4665c7-8c2c-4a2b-9fce-4042cbccc6c7',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T190927Z:ca4665c7-8c2c-4a2b-9fce-4042cbccc6c7',
  date: 'Wed, 13 Apr 2016 19:09:26 GMT',
  connection: 'close' });
 return result; }]];