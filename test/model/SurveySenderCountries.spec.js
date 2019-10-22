/**
 * TextMagic API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
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

  beforeEach(function() {
    instance = new TextmagicClient.SurveySenderCountries();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SurveySenderCountries', function() {
    it('should create an instance of SurveySenderCountries', function() {
      // uncomment below and update the code to test SurveySenderCountries
      //var instance = new TextmagicClient.SurveySenderCountries();
      //expect(instance).to.be.a(TextmagicClient.SurveySenderCountries);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TextmagicClient.SurveySenderCountries();
      //expect(instance).to.be();
    });

    it('should have the property countryName (base name: "countryName")', function() {
      // uncomment below and update the code to test the property countryName
      //var instance = new TextmagicClient.SurveySenderCountries();
      //expect(instance).to.be();
    });

    it('should have the property fromNumber (base name: "fromNumber")', function() {
      // uncomment below and update the code to test the property fromNumber
      //var instance = new TextmagicClient.SurveySenderCountries();
      //expect(instance).to.be();
    });

    it('should have the property allowDedicated (base name: "allowDedicated")', function() {
      // uncomment below and update the code to test the property allowDedicated
      //var instance = new TextmagicClient.SurveySenderCountries();
      //expect(instance).to.be();
    });

  });

}));
