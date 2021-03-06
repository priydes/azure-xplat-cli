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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRoute\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute\",\r\n  \"etag\": \"W/\\\"2c450692-90b9-4d87-97c7-f822f453fce8\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"260e452c-c964-4b32-aae4-c692a8f4ac68\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [\r\n      {\r\n        \"name\": \"xplatExpressRouteAuth\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth\",\r\n        \"etag\": \"W/\\\"2c450692-90b9-4d87-97c7-f822f453fce8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"authorizationKey\": \"5079dce1-ca07-49b8-9c83-e5ebaf0cb74d\",\r\n          \"authorizationUseStatus\": \"Available\"\r\n        }\r\n      }\r\n    ],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"ca7254ea-9bcf-4331-9417-dd29ed12ab66\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1532',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '58f158f2-8261-49e1-b943-64cc2d25d39a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'bb613594-7dc2-4acb-a06c-9bff3752f890',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144629Z:bb613594-7dc2-4acb-a06c-9bff3752f890',
  date: 'Fri, 25 Mar 2016 14:46:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRoute\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute\",\r\n  \"etag\": \"W/\\\"2c450692-90b9-4d87-97c7-f822f453fce8\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"260e452c-c964-4b32-aae4-c692a8f4ac68\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [\r\n      {\r\n        \"name\": \"xplatExpressRouteAuth\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth\",\r\n        \"etag\": \"W/\\\"2c450692-90b9-4d87-97c7-f822f453fce8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"authorizationKey\": \"5079dce1-ca07-49b8-9c83-e5ebaf0cb74d\",\r\n          \"authorizationUseStatus\": \"Available\"\r\n        }\r\n      }\r\n    ],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"ca7254ea-9bcf-4331-9417-dd29ed12ab66\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1532',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '58f158f2-8261-49e1-b943-64cc2d25d39a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'bb613594-7dc2-4acb-a06c-9bff3752f890',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144629Z:bb613594-7dc2-4acb-a06c-9bff3752f890',
  date: 'Fri, 25 Mar 2016 14:46:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteAuth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth\",\r\n  \"etag\": \"W/\\\"2c450692-90b9-4d87-97c7-f822f453fce8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"5079dce1-ca07-49b8-9c83-e5ebaf0cb74d\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '482',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd31d13f9-da6e-4cd6-92e6-475f4ed05b3b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '77f34efc-4317-4ed8-9afd-2eb83b18efae',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144630Z:77f34efc-4317-4ed8-9afd-2eb83b18efae',
  date: 'Fri, 25 Mar 2016 14:46:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteAuth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth\",\r\n  \"etag\": \"W/\\\"2c450692-90b9-4d87-97c7-f822f453fce8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"5079dce1-ca07-49b8-9c83-e5ebaf0cb74d\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '482',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd31d13f9-da6e-4cd6-92e6-475f4ed05b3b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '77f34efc-4317-4ed8-9afd-2eb83b18efae',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144630Z:77f34efc-4317-4ed8-9afd-2eb83b18efae',
  date: 'Fri, 25 Mar 2016 14:46:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operationResults/fb2fec90-5769-4a99-98d2-090d7699378d?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': 'fb2fec90-5769-4a99-98d2-090d7699378d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/fb2fec90-5769-4a99-98d2-090d7699378d?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '53a655ed-c902-488e-b622-1923a914b827',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144632Z:53a655ed-c902-488e-b622-1923a914b827',
  date: 'Fri, 25 Mar 2016 14:46:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operationResults/fb2fec90-5769-4a99-98d2-090d7699378d?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': 'fb2fec90-5769-4a99-98d2-090d7699378d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/fb2fec90-5769-4a99-98d2-090d7699378d?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '53a655ed-c902-488e-b622-1923a914b827',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144632Z:53a655ed-c902-488e-b622-1923a914b827',
  date: 'Fri, 25 Mar 2016 14:46:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/fb2fec90-5769-4a99-98d2-090d7699378d?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f4f04a97-3091-4f5d-826d-6e768c624117',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'e1edcf8d-6638-4f37-b9b5-32c69151a5cc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144703Z:e1edcf8d-6638-4f37-b9b5-32c69151a5cc',
  date: 'Fri, 25 Mar 2016 14:47:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/fb2fec90-5769-4a99-98d2-090d7699378d?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f4f04a97-3091-4f5d-826d-6e768c624117',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'e1edcf8d-6638-4f37-b9b5-32c69151a5cc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144703Z:e1edcf8d-6638-4f37-b9b5-32c69151a5cc',
  date: 'Fri, 25 Mar 2016 14:47:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRoute\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute\",\r\n  \"etag\": \"W/\\\"1106c92a-bcda-4a2d-a510-777266d9cb5c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"260e452c-c964-4b32-aae4-c692a8f4ac68\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"ca7254ea-9bcf-4331-9417-dd29ed12ab66\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '982',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f07a5cd3-b025-4897-8d6e-5b9a51215e4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '8cee0df1-3fba-4dd8-827f-f6264c5ed3ee',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144715Z:8cee0df1-3fba-4dd8-827f-f6264c5ed3ee',
  date: 'Fri, 25 Mar 2016 14:47:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRoute\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute\",\r\n  \"etag\": \"W/\\\"1106c92a-bcda-4a2d-a510-777266d9cb5c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"260e452c-c964-4b32-aae4-c692a8f4ac68\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"ca7254ea-9bcf-4331-9417-dd29ed12ab66\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '982',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f07a5cd3-b025-4897-8d6e-5b9a51215e4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '8cee0df1-3fba-4dd8-827f-f6264c5ed3ee',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144715Z:8cee0df1-3fba-4dd8-827f-f6264c5ed3ee',
  date: 'Fri, 25 Mar 2016 14:47:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '308',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9c695569-c90b-4cb1-b93e-f90989186f85',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '4b13e153-3bae-4bff-aaa4-4fc29228098b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144717Z:4b13e153-3bae-4bff-aaa4-4fc29228098b',
  date: 'Fri, 25 Mar 2016 14:47:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '308',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9c695569-c90b-4cb1-b93e-f90989186f85',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '4b13e153-3bae-4bff-aaa4-4fc29228098b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T144717Z:4b13e153-3bae-4bff-aaa4-4fc29228098b',
  date: 'Fri, 25 Mar 2016 14:47:16 GMT',
  connection: 'close' });
 return result; }]];