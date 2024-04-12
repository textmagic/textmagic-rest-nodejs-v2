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
    describe('SurveyNode', function() {
      beforeEach(function() {
        instance = new TextmagicClient.SurveyNode();
      });

      it('should create an instance of SurveyNode', function() {
        // TODO: update the code to test SurveyNode
        expect(instance).to.be.a(TextmagicClient.SurveyNode);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

      it('should have the property body (base name: "body")', function() {
        // TODO: update the code to test the property body
        expect(instance).to.have.property('body');
        // expect(instance.body).to.be(expectedValueLiteral);
      });

      it('should have the property nodeType (base name: "nodeType")', function() {
        // TODO: update the code to test the property nodeType
        expect(instance).to.have.property('nodeType');
        // expect(instance.nodeType).to.be(expectedValueLiteral);
      });

      it('should have the property isEndNode (base name: "isEndNode")', function() {
        // TODO: update the code to test the property isEndNode
        expect(instance).to.have.property('isEndNode');
        // expect(instance.isEndNode).to.be(expectedValueLiteral);
      });

      it('should have the property sendDelay (base name: "sendDelay")', function() {
        // TODO: update the code to test the property sendDelay
        expect(instance).to.have.property('sendDelay');
        // expect(instance.sendDelay).to.be(expectedValueLiteral);
      });

      it('should have the property startNodes (base name: "startNodes")', function() {
        // TODO: update the code to test the property startNodes
        expect(instance).to.have.property('startNodes');
        // expect(instance.startNodes).to.be(expectedValueLiteral);
      });

      it('should have the property endNodes (base name: "endNodes")', function() {
        // TODO: update the code to test the property endNodes
        expect(instance).to.have.property('endNodes');
        // expect(instance.endNodes).to.be(expectedValueLiteral);
      });

    });
  });

}));
