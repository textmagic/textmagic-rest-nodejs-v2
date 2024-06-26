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
    describe('SurveySenderCountries', function() {
      beforeEach(function() {
        instance = new TextmagicClient.SurveySenderCountries();
      });

      it('should create an instance of SurveySenderCountries', function() {
        // TODO: update the code to test SurveySenderCountries
        expect(instance).to.be.a(TextmagicClient.SurveySenderCountries);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property countryName (base name: "countryName")', function() {
        // TODO: update the code to test the property countryName
        expect(instance).to.have.property('countryName');
        // expect(instance.countryName).to.be(expectedValueLiteral);
      });

      it('should have the property fromNumber (base name: "fromNumber")', function() {
        // TODO: update the code to test the property fromNumber
        expect(instance).to.have.property('fromNumber');
        // expect(instance.fromNumber).to.be(expectedValueLiteral);
      });

      it('should have the property allowDedicated (base name: "allowDedicated")', function() {
        // TODO: update the code to test the property allowDedicated
        expect(instance).to.have.property('allowDedicated');
        // expect(instance.allowDedicated).to.be(expectedValueLiteral);
      });

    });
  });

}));
