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
    instance = new TextmagicClient.UpdateChatDesktopNotificationSettingsInputObject();
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

  describe('UpdateChatDesktopNotificationSettingsInputObject', function() {
    it('should create an instance of UpdateChatDesktopNotificationSettingsInputObject', function() {
      // uncomment below and update the code to test UpdateChatDesktopNotificationSettingsInputObject
      //var instance = new TextmagicClient.UpdateChatDesktopNotificationSettingsInputObject();
      //expect(instance).to.be.a(TextmagicClient.UpdateChatDesktopNotificationSettingsInputObject);
    });

    it('should have the property playSound (base name: "playSound")', function() {
      // uncomment below and update the code to test the property playSound
      //var instance = new TextmagicClient.UpdateChatDesktopNotificationSettingsInputObject();
      //expect(instance).to.be();
    });

    it('should have the property showNotifications (base name: "showNotifications")', function() {
      // uncomment below and update the code to test the property showNotifications
      //var instance = new TextmagicClient.UpdateChatDesktopNotificationSettingsInputObject();
      //expect(instance).to.be();
    });

    it('should have the property showText (base name: "showText")', function() {
      // uncomment below and update the code to test the property showText
      //var instance = new TextmagicClient.UpdateChatDesktopNotificationSettingsInputObject();
      //expect(instance).to.be();
    });

    it('should have the property soundId (base name: "soundId")', function() {
      // uncomment below and update the code to test the property soundId
      //var instance = new TextmagicClient.UpdateChatDesktopNotificationSettingsInputObject();
      //expect(instance).to.be();
    });

  });

}));
