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
    describe('MessageIn', function() {
      beforeEach(function() {
        instance = new TextmagicClient.MessageIn();
      });

      it('should create an instance of MessageIn', function() {
        // TODO: update the code to test MessageIn
        expect(instance).to.be.a(TextmagicClient.MessageIn);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property sender (base name: "sender")', function() {
        // TODO: update the code to test the property sender
        expect(instance).to.have.property('sender');
        // expect(instance.sender).to.be(expectedValueLiteral);
      });

      it('should have the property receiver (base name: "receiver")', function() {
        // TODO: update the code to test the property receiver
        expect(instance).to.have.property('receiver');
        // expect(instance.receiver).to.be(expectedValueLiteral);
      });

      it('should have the property messageTime (base name: "messageTime")', function() {
        // TODO: update the code to test the property messageTime
        expect(instance).to.have.property('messageTime');
        // expect(instance.messageTime).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property contactId (base name: "contactId")', function() {
        // TODO: update the code to test the property contactId
        expect(instance).to.have.property('contactId');
        // expect(instance.contactId).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property avatar (base name: "avatar")', function() {
        // TODO: update the code to test the property avatar
        expect(instance).to.have.property('avatar');
        // expect(instance.avatar).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property contactUserId (base name: "contactUserId")', function() {
        // TODO: update the code to test the property contactUserId
        expect(instance).to.have.property('contactUserId');
        // expect(instance.contactUserId).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

    });
  });

}));
