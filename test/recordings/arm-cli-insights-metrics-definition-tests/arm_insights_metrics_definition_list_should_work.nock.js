// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'b67f7fec-69fc-4974-9099-a26bd6ffeda3',
    name: 'Monitoring vNext Test Environment Services 02',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringPath(function (path) { return path.slice(0, path.indexOf('&')); })
  .get('//subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-brazilsouth/providers/microsoft.web/serverFarms/Default1/metricDefinitions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"name\":{\"value\":\"CpuPercentage\",\"localizedValue\":\"CPU Percentage\"},\"unit\":\"Percent\",\"primaryAggregationType\":\"Average\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]},{\"name\":{\"value\":\"MemoryPercentage\",\"localizedValue\":\"Memory Percentage\"},\"unit\":\"Percent\",\"primaryAggregationType\":\"Average\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]},{\"name\":{\"value\":\"DiskQueueLength\",\"localizedValue\":\"Disk Queue Length\"},\"unit\":\"Count\",\"primaryAggregationType\":\"Total\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]},{\"name\":{\"value\":\"HttpQueueLength\",\"localizedValue\":\"Http Queue Length\"},\"unit\":\"Count\",\"primaryAggregationType\":\"Total\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]},{\"name\":{\"value\":\"BytesReceived\",\"localizedValue\":\"Data In\"},\"unit\":\"Bytes\",\"primaryAggregationType\":\"Total\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]},{\"name\":{\"value\":\"BytesSent\",\"localizedValue\":\"Data Out\"},\"unit\":\"Bytes\",\"primaryAggregationType\":\"Total\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '66aff870-d4b1-463e-9ce4-afe56ba51ca0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '31916',
  'x-ms-correlation-request-id': '8257445a-7b69-4b09-b746-7a791b34ef08',
  'x-ms-routing-request-id': 'WESTUS:20150416T213000Z:8257445a-7b69-4b09-b746-7a791b34ef08',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Apr 2015 21:30:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringPath(function (path) { return path.slice(0, path.indexOf('&')); })
  .get('//subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-brazilsouth/providers/microsoft.web/serverFarms/Default1/metricDefinitions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"name\":{\"value\":\"CpuPercentage\",\"localizedValue\":\"CPU Percentage\"},\"unit\":\"Percent\",\"primaryAggregationType\":\"Average\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]},{\"name\":{\"value\":\"MemoryPercentage\",\"localizedValue\":\"Memory Percentage\"},\"unit\":\"Percent\",\"primaryAggregationType\":\"Average\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]},{\"name\":{\"value\":\"DiskQueueLength\",\"localizedValue\":\"Disk Queue Length\"},\"unit\":\"Count\",\"primaryAggregationType\":\"Total\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]},{\"name\":{\"value\":\"HttpQueueLength\",\"localizedValue\":\"Http Queue Length\"},\"unit\":\"Count\",\"primaryAggregationType\":\"Total\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]},{\"name\":{\"value\":\"BytesReceived\",\"localizedValue\":\"Data In\"},\"unit\":\"Bytes\",\"primaryAggregationType\":\"Total\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]},{\"name\":{\"value\":\"BytesSent\",\"localizedValue\":\"Data Out\"},\"unit\":\"Bytes\",\"primaryAggregationType\":\"Total\",\"resourceUri\":null,\"metricAvailabilities\":[{\"timeGrain\":\"PT1M\",\"retention\":\"P2D\"},{\"timeGrain\":\"PT1H\",\"retention\":\"P30D\"},{\"timeGrain\":\"P1D\",\"retention\":\"P90D\"}],\"properties\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1788',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '66aff870-d4b1-463e-9ce4-afe56ba51ca0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '31916',
  'x-ms-correlation-request-id': '8257445a-7b69-4b09-b746-7a791b34ef08',
  'x-ms-routing-request-id': 'WESTUS:20150416T213000Z:8257445a-7b69-4b09-b746-7a791b34ef08',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Apr 2015 21:30:00 GMT',
  connection: 'close' });
 return result; }]];