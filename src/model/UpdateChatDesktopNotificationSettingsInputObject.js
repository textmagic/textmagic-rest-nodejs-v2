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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.UpdateChatDesktopNotificationSettingsInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateChatDesktopNotificationSettingsInputObject model module.
   * @module model/UpdateChatDesktopNotificationSettingsInputObject
   * @version 2.0.17425
   */

  /**
   * Constructs a new <code>UpdateChatDesktopNotificationSettingsInputObject</code>.
   * @alias module:model/UpdateChatDesktopNotificationSettingsInputObject
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateChatDesktopNotificationSettingsInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateChatDesktopNotificationSettingsInputObject} obj Optional instance to populate.
   * @return {module:model/UpdateChatDesktopNotificationSettingsInputObject} The populated <code>UpdateChatDesktopNotificationSettingsInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('playSound'))
        obj.playSound = ApiClient.convertToType(data['playSound'], 'Boolean');
      if (data.hasOwnProperty('showNotifications'))
        obj.showNotifications = ApiClient.convertToType(data['showNotifications'], 'Boolean');
      if (data.hasOwnProperty('showText'))
        obj.showText = ApiClient.convertToType(data['showText'], 'Boolean');
      if (data.hasOwnProperty('soundId'))
        obj.soundId = ApiClient.convertToType(data['soundId'], 'Number');
    }
    return obj;
  }

  /**
   * Enable notification sound?
   * @member {Boolean} playSound
   */
  exports.prototype.playSound = undefined;

  /**
   * Show desktop notifications about new messages.
   * @member {Boolean} showNotifications
   */
  exports.prototype.showNotifications = undefined;

  /**
   * Incoming message text will be displayed in desktop notifications.
   * @member {Boolean} showText
   */
  exports.prototype.showText = undefined;

  /**
   * Sound Id of a notification.
   * @member {Number} soundId
   */
  exports.prototype.soundId = undefined;

  return exports;

}));
