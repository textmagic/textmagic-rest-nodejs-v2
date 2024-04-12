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
    describe('DeleteContactsByIdsInputObject', function() {
      beforeEach(function() {
        instance = new TextmagicClient.DeleteContactsByIdsInputObject();
      });

      it('should create an instance of DeleteContactsByIdsInputObject', function() {
        // TODO: update the code to test DeleteContactsByIdsInputObject
        expect(instance).to.be.a(TextmagicClient.DeleteContactsByIdsInputObject);
      });

      it('should have the property ids (base name: "ids")', function() {
        // TODO: update the code to test the property ids
        expect(instance).to.have.property('ids');
        // expect(instance.ids).to.be(expectedValueLiteral);
      });

      it('should have the property all (base name: "all")', function() {
        // TODO: update the code to test the property all
        expect(instance).to.have.property('all');
        // expect(instance.all).to.be(expectedValueLiteral);
      });

    });
  });

}));
