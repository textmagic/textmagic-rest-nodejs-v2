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
    root.TextmagicClient.GetAvailableSenderSettingOptionsResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetAvailableSenderSettingOptionsResponse model module.
   * @module model/GetAvailableSenderSettingOptionsResponse
   * @version 2.0.23575
   */

  /**
   * Constructs a new <code>GetAvailableSenderSettingOptionsResponse</code>.
   * @alias module:model/GetAvailableSenderSettingOptionsResponse
   * @class
   * @param dedicated {Array.<String>} Array of dedicated number strings.
   * @param user {Array.<String>} Array of verified account phone numbers (currently only one).
   * @param shared {Array.<String>} Array of shared number strings.
   * @param senderIds {Array.<String>} Array of alphanumeric sender IDs.
   * @param userCarrierTwilio {Array.<String>} Array of alphanumeric sender IDs.
   * @param userCarrierVonage {Array.<String>} Array of alphanumeric sender IDs.
   */
  var exports = function(dedicated, user, shared, senderIds, userCarrierTwilio, userCarrierVonage) {
    this.dedicated = dedicated;
    this.user = user;
    this.shared = shared;
    this.senderIds = senderIds;
    this.userCarrierTwilio = userCarrierTwilio;
    this.userCarrierVonage = userCarrierVonage;
  };

  /**
   * Constructs a <code>GetAvailableSenderSettingOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAvailableSenderSettingOptionsResponse} obj Optional instance to populate.
   * @return {module:model/GetAvailableSenderSettingOptionsResponse} The populated <code>GetAvailableSenderSettingOptionsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dedicated'))
        obj.dedicated = ApiClient.convertToType(data['dedicated'], ['String']);
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], ['String']);
      if (data.hasOwnProperty('shared'))
        obj.shared = ApiClient.convertToType(data['shared'], ['String']);
      if (data.hasOwnProperty('senderIds'))
        obj.senderIds = ApiClient.convertToType(data['senderIds'], ['String']);
      if (data.hasOwnProperty('userCarrierTwilio'))
        obj.userCarrierTwilio = ApiClient.convertToType(data['userCarrierTwilio'], ['String']);
      if (data.hasOwnProperty('userCarrierVonage'))
        obj.userCarrierVonage = ApiClient.convertToType(data['userCarrierVonage'], ['String']);
    }
    return obj;
  }

  /**
   * Array of dedicated number strings.
   * @member {Array.<String>} dedicated
   */
  exports.prototype.dedicated = undefined;

  /**
   * Array of verified account phone numbers (currently only one).
   * @member {Array.<String>} user
   */
  exports.prototype.user = undefined;

  /**
   * Array of shared number strings.
   * @member {Array.<String>} shared
   */
  exports.prototype.shared = undefined;

  /**
   * Array of alphanumeric sender IDs.
   * @member {Array.<String>} senderIds
   */
  exports.prototype.senderIds = undefined;

  /**
   * Array of alphanumeric sender IDs.
   * @member {Array.<String>} userCarrierTwilio
   */
  exports.prototype.userCarrierTwilio = undefined;

  /**
   * Array of alphanumeric sender IDs.
   * @member {Array.<String>} userCarrierVonage
   */
  exports.prototype.userCarrierVonage = undefined;

  return exports;

}));
