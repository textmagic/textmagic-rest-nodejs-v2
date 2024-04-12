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
    describe('GetMessageSessionStatResponse', function() {
      beforeEach(function() {
        instance = new TextmagicClient.GetMessageSessionStatResponse();
      });

      it('should create an instance of GetMessageSessionStatResponse', function() {
        // TODO: update the code to test GetMessageSessionStatResponse
        expect(instance).to.be.a(TextmagicClient.GetMessageSessionStatResponse);
      });

      it('should have the property failed (base name: "failed")', function() {
        // TODO: update the code to test the property failed
        expect(instance).to.have.property('failed');
        // expect(instance.failed).to.be(expectedValueLiteral);
      });

      it('should have the property delivered (base name: "delivered")', function() {
        // TODO: update the code to test the property delivered
        expect(instance).to.have.property('delivered');
        // expect(instance.delivered).to.be(expectedValueLiteral);
      });

      it('should have the property accepted (base name: "accepted")', function() {
        // TODO: update the code to test the property accepted
        expect(instance).to.have.property('accepted');
        // expect(instance.accepted).to.be(expectedValueLiteral);
      });

      it('should have the property rejected (base name: "rejected")', function() {
        // TODO: update the code to test the property rejected
        expect(instance).to.have.property('rejected');
        // expect(instance.rejected).to.be(expectedValueLiteral);
      });

      it('should have the property scheduled (base name: "scheduled")', function() {
        // TODO: update the code to test the property scheduled
        expect(instance).to.have.property('scheduled');
        // expect(instance.scheduled).to.be(expectedValueLiteral);
      });

      it('should have the property all (base name: "all")', function() {
        // TODO: update the code to test the property all
        expect(instance).to.have.property('all');
        // expect(instance.all).to.be(expectedValueLiteral);
      });

      it('should have the property sent (base name: "sent")', function() {
        // TODO: update the code to test the property sent
        expect(instance).to.have.property('sent');
        // expect(instance.sent).to.be(expectedValueLiteral);
      });

    });
  });

}));
