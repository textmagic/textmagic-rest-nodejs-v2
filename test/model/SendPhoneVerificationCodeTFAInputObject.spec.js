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
    describe('SendPhoneVerificationCodeTFAInputObject', function() {
      beforeEach(function() {
        instance = new TextmagicClient.SendPhoneVerificationCodeTFAInputObject();
      });

      it('should create an instance of SendPhoneVerificationCodeTFAInputObject', function() {
        // TODO: update the code to test SendPhoneVerificationCodeTFAInputObject
        expect(instance).to.be.a(TextmagicClient.SendPhoneVerificationCodeTFAInputObject);
      });

      it('should have the property phone (base name: "phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property workflowId (base name: "workflowId")', function() {
        // TODO: update the code to test the property workflowId
        expect(instance).to.have.property('workflowId');
        // expect(instance.workflowId).to.be(expectedValueLiteral);
      });

      it('should have the property brand (base name: "brand")', function() {
        // TODO: update the code to test the property brand
        expect(instance).to.have.property('brand');
        // expect(instance.brand).to.be(expectedValueLiteral);
      });

      it('should have the property codeLength (base name: "codeLength")', function() {
        // TODO: update the code to test the property codeLength
        expect(instance).to.have.property('codeLength');
        // expect(instance.codeLength).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function() {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

      it('should have the property senderId (base name: "senderId")', function() {
        // TODO: update the code to test the property senderId
        expect(instance).to.have.property('senderId');
        // expect(instance.senderId).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

    });
  });

}));
