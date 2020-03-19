/*
 * TextMagic API
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
    describe('PingResponse', function() {
      beforeEach(function() {
        instance = new TextmagicClient.PingResponse();
      });

      it('should create an instance of PingResponse', function() {
        // TODO: update the code to test PingResponse
        expect(instance).to.be.a(TextmagicClient.PingResponse);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property ping (base name: "ping")', function() {
        // TODO: update the code to test the property ping
        expect(instance).to.have.property('ping');
        // expect(instance.ping).to.be(expectedValueLiteral);
      });

      it('should have the property utcDateTime (base name: "utcDateTime")', function() {
        // TODO: update the code to test the property utcDateTime
        expect(instance).to.have.property('utcDateTime');
        // expect(instance.utcDateTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
