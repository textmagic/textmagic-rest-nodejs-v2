/*
 * Textmagic API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TextmagicClient);
  }
}(this, function(expect, TextmagicClient) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetMessagingCountersResponse', function() {
      beforeEach(function() {
        instance = new TextmagicClient.GetMessagingCountersResponse();
      });

      it('should create an instance of GetMessagingCountersResponse', function() {
        // TODO: update the code to test GetMessagingCountersResponse
        expect(instance).to.be.a(TextmagicClient.GetMessagingCountersResponse);
      });

      it('should have the property contacts (base name: "contacts")', function() {
        // TODO: update the code to test the property contacts
        expect(instance).to.have.property('contacts');
        // expect(instance.contacts).to.be(expectedValueLiteral);
      });

      it('should have the property sent (base name: "sent")', function() {
        // TODO: update the code to test the property sent
        expect(instance).to.have.property('sent');
        // expect(instance.sent).to.be(expectedValueLiteral);
      });

      it('should have the property received (base name: "received")', function() {
        // TODO: update the code to test the property received
        expect(instance).to.have.property('received');
        // expect(instance.received).to.be(expectedValueLiteral);
      });

    });
  });

}));
