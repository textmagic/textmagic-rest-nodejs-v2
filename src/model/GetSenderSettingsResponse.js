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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SenderSettingsItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SenderSettingsItem'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.GetSenderSettingsResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.SenderSettingsItem);
  }
}(this, function(ApiClient, SenderSettingsItem) {
  'use strict';




  /**
   * The GetSenderSettingsResponse model module.
   * @module model/GetSenderSettingsResponse
   * @version 2.0.826
   */

  /**
   * Constructs a new <code>GetSenderSettingsResponse</code>.
   * @alias module:model/GetSenderSettingsResponse
   * @class
   * @param user {Array.<module:model/SenderSettingsItem>} 
   * @param special {Array.<module:model/SenderSettingsItem>} 
   * @param other {Array.<module:model/SenderSettingsItem>} 
   */
  var exports = function(user, special, other) {
    var _this = this;

    _this['user'] = user;
    _this['special'] = special;
    _this['other'] = other;
  };

  /**
   * Constructs a <code>GetSenderSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSenderSettingsResponse} obj Optional instance to populate.
   * @return {module:model/GetSenderSettingsResponse} The populated <code>GetSenderSettingsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], [SenderSettingsItem]);
      }
      if (data.hasOwnProperty('special')) {
        obj['special'] = ApiClient.convertToType(data['special'], [SenderSettingsItem]);
      }
      if (data.hasOwnProperty('other')) {
        obj['other'] = ApiClient.convertToType(data['other'], [SenderSettingsItem]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SenderSettingsItem>} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {Array.<module:model/SenderSettingsItem>} special
   */
  exports.prototype['special'] = undefined;
  /**
   * @member {Array.<module:model/SenderSettingsItem>} other
   */
  exports.prototype['other'] = undefined;



  return exports;
}));


