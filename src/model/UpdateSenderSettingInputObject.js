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
    root.TextmagicClient.UpdateSenderSettingInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateSenderSettingInputObject model module.
   * @module model/UpdateSenderSettingInputObject
   * @version 2.0.4420
   */

  /**
   * Constructs a new <code>UpdateSenderSettingInputObject</code>.
   * @alias module:model/UpdateSenderSettingInputObject
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateSenderSettingInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateSenderSettingInputObject} obj Optional instance to populate.
   * @return {module:model/UpdateSenderSettingInputObject} The populated <code>UpdateSenderSettingInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('chatId'))
        obj.chatId = ApiClient.convertToType(data['chatId'], 'Number');
    }
    return obj;
  }

  /**
   * Available phone number in international E.164 format or senderid.
   * @member {String} value
   */
  exports.prototype.value = undefined;

  /**
   * Country for which the setting will be set.
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * Set sender setting for specified chat only.
   * @member {Number} chatId
   */
  exports.prototype.chatId = undefined;

  return exports;

}));
