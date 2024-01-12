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
    describe('Chat', function() {
      beforeEach(function() {
        instance = new TextmagicClient.Chat();
      });

      it('should create an instance of Chat', function() {
        // TODO: update the code to test Chat
        expect(instance).to.be.a(TextmagicClient.Chat);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property originalId (base name: "originalId")', function() {
        // TODO: update the code to test the property originalId
        expect(instance).to.have.property('originalId');
        // expect(instance.originalId).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property contact (base name: "contact")', function() {
        // TODO: update the code to test the property contact
        expect(instance).to.have.property('contact');
        // expect(instance.contact).to.be(expectedValueLiteral);
      });

      it('should have the property unsubscribedContactId (base name: "unsubscribedContactId")', function() {
        // TODO: update the code to test the property unsubscribedContactId
        expect(instance).to.have.property('unsubscribedContactId');
        // expect(instance.unsubscribedContactId).to.be(expectedValueLiteral);
      });

      it('should have the property unread (base name: "unread")', function() {
        // TODO: update the code to test the property unread
        expect(instance).to.have.property('unread');
        // expect(instance.unread).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property mute (base name: "mute")', function() {
        // TODO: update the code to test the property mute
        expect(instance).to.have.property('mute');
        // expect(instance.mute).to.be(expectedValueLiteral);
      });

      it('should have the property lastMessage (base name: "lastMessage")', function() {
        // TODO: update the code to test the property lastMessage
        expect(instance).to.have.property('lastMessage');
        // expect(instance.lastMessage).to.be(expectedValueLiteral);
      });

      it('should have the property direction (base name: "direction")', function() {
        // TODO: update the code to test the property direction
        expect(instance).to.have.property('direction');
        // expect(instance.direction).to.be(expectedValueLiteral);
      });

      it('should have the property replyOptionsType (base name: "replyOptionsType")', function() {
        // TODO: update the code to test the property replyOptionsType
        expect(instance).to.have.property('replyOptionsType');
        // expect(instance.replyOptionsType).to.be(expectedValueLiteral);
      });

      it('should have the property from (base name: "from")', function() {
        // TODO: update the code to test the property from
        expect(instance).to.have.property('from');
        // expect(instance.from).to.be(expectedValueLiteral);
      });

      it('should have the property mutedUntil (base name: "mutedUntil")', function() {
        // TODO: update the code to test the property mutedUntil
        expect(instance).to.have.property('mutedUntil');
        // expect(instance.mutedUntil).to.be(expectedValueLiteral);
      });

      it('should have the property timeLeftMute (base name: "timeLeftMute")', function() {
        // TODO: update the code to test the property timeLeftMute
        expect(instance).to.have.property('timeLeftMute');
        // expect(instance.timeLeftMute).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property pinned (base name: "pinned")', function() {
        // TODO: update the code to test the property pinned
        expect(instance).to.have.property('pinned');
        // expect(instance.pinned).to.be(expectedValueLiteral);
      });

    });
  });

}));
