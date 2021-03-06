// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"a1d5e95a-92c5-4bba-bd63-e56934cf563d\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com\",\"weight\":2}]}}", { 'cache-control': 'private',
  'content-length': '467',
  'content-type': 'application/json; charset=utf-8',
  etag: 'a1d5e95a-92c5-4bba-bd63-e56934cf563d',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '2e6e6f28-853d-4ccf-b6f0-7be4ade79593',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'de0d6ffd-7b91-49fa-86e2-1e8c43b844da',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104937Z:de0d6ffd-7b91-49fa-86e2-1e8c43b844da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"a1d5e95a-92c5-4bba-bd63-e56934cf563d\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com\",\"weight\":2}]}}", { 'cache-control': 'private',
  'content-length': '467',
  'content-type': 'application/json; charset=utf-8',
  etag: 'a1d5e95a-92c5-4bba-bd63-e56934cf563d',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '2e6e6f28-853d-4ccf-b6f0-7be4ade79593',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'de0d6ffd-7b91-49fa-86e2-1e8c43b844da',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104937Z:de0d6ffd-7b91-49fa-86e2-1e8c43b844da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"636b3d91-1113-4c19-83f5-d1e6d524c2eb\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '411',
  'content-type': 'application/json; charset=utf-8',
  etag: '636b3d91-1113-4c19-83f5-d1e6d524c2eb',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'a4c6f13c-e5d1-4ede-a646-bde51474462e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '1019b36d-2ed1-464d-b0fb-a98e39ef8cbc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104938Z:1019b36d-2ed1-464d-b0fb-a98e39ef8cbc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"636b3d91-1113-4c19-83f5-d1e6d524c2eb\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '411',
  'content-type': 'application/json; charset=utf-8',
  etag: '636b3d91-1113-4c19-83f5-d1e6d524c2eb',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'a4c6f13c-e5d1-4ede-a646-bde51474462e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '1019b36d-2ed1-464d-b0fb-a98e39ef8cbc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104938Z:1019b36d-2ed1-464d-b0fb-a98e39ef8cbc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:37 GMT',
  connection: 'close' });
 return result; }]];