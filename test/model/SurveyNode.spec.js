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
    instance = new TextmagicClient.SurveyNode();
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

  describe('SurveyNode', function() {
    it('should create an instance of SurveyNode', function() {
      // uncomment below and update the code to test SurveyNode
      //var instance = new TextmagicClient.SurveyNode();
      //expect(instance).to.be.a(TextmagicClient.SurveyNode);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TextmagicClient.SurveyNode();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new TextmagicClient.SurveyNode();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new TextmagicClient.SurveyNode();
      //expect(instance).to.be();
    });

    it('should have the property nodeType (base name: "nodeType")', function() {
      // uncomment below and update the code to test the property nodeType
      //var instance = new TextmagicClient.SurveyNode();
      //expect(instance).to.be();
    });

    it('should have the property isEndNode (base name: "isEndNode")', function() {
      // uncomment below and update the code to test the property isEndNode
      //var instance = new TextmagicClient.SurveyNode();
      //expect(instance).to.be();
    });

    it('should have the property sendDelay (base name: "sendDelay")', function() {
      // uncomment below and update the code to test the property sendDelay
      //var instance = new TextmagicClient.SurveyNode();
      //expect(instance).to.be();
    });

    it('should have the property startNodes (base name: "startNodes")', function() {
      // uncomment below and update the code to test the property startNodes
      //var instance = new TextmagicClient.SurveyNode();
      //expect(instance).to.be();
    });

    it('should have the property endNodes (base name: "endNodes")', function() {
      // uncomment below and update the code to test the property endNodes
      //var instance = new TextmagicClient.SurveyNode();
      //expect(instance).to.be();
    });

  });

}));
