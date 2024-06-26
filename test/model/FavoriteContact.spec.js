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
    describe('FavoriteContact', function() {
      beforeEach(function() {
        instance = new TextmagicClient.FavoriteContact();
      });

      it('should create an instance of FavoriteContact', function() {
        // TODO: update the code to test FavoriteContact
        expect(instance).to.be.a(TextmagicClient.FavoriteContact);
      });

      it('should have the property entityId (base name: "entityId")', function() {
        // TODO: update the code to test the property entityId
        expect(instance).to.have.property('entityId');
        // expect(instance.entityId).to.be(expectedValueLiteral);
      });

      it('should have the property entityType (base name: "entityType")', function() {
        // TODO: update the code to test the property entityType
        expect(instance).to.have.property('entityType');
        // expect(instance.entityType).to.be(expectedValueLiteral);
      });

      it('should have the property primaryLabel (base name: "primaryLabel")', function() {
        // TODO: update the code to test the property primaryLabel
        expect(instance).to.have.property('primaryLabel');
        // expect(instance.primaryLabel).to.be(expectedValueLiteral);
      });

      it('should have the property secondaryLabel (base name: "secondaryLabel")', function() {
        // TODO: update the code to test the property secondaryLabel
        expect(instance).to.have.property('secondaryLabel');
        // expect(instance.secondaryLabel).to.be(expectedValueLiteral);
      });

      it('should have the property tertiaryLabel (base name: "tertiaryLabel")', function() {
        // TODO: update the code to test the property tertiaryLabel
        expect(instance).to.have.property('tertiaryLabel');
        // expect(instance.tertiaryLabel).to.be(expectedValueLiteral);
      });

      it('should have the property avatar (base name: "avatar")', function() {
        // TODO: update the code to test the property avatar
        expect(instance).to.have.property('avatar');
        // expect(instance.avatar).to.be(expectedValueLiteral);
      });

    });
  });

}));
