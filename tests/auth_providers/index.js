const chatAdminAuthProviderTests = require('./chat_admin_auth_provider_tests');
const noAuthProviderTests = require('./no_auth_provider_tests');

describe('Test ChatAdminAuthProvider', function() {

  for (var testName in chatAdminAuthProviderTests) {

    test = chatAdminAuthProviderTests[testName];

    it(test.getDescription(), async function() {
      return await test.run();
    });

  };

});

describe('Test NoAuthProvider', function() {

  for (var testName in noAuthProviderTests) {

    test = noAuthProviderTests[testName];

    it(test.getDescription(), async function() {
      return await test.run();
    });

  };

});
