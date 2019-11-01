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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.GetCallbackSettingsResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCallbackSettingsResponse model module.
   * @module model/GetCallbackSettingsResponse
   * @version 2.0.865
   */

  /**
   * Constructs a new <code>GetCallbackSettingsResponse</code>.
   * @alias module:model/GetCallbackSettingsResponse
   * @class
   * @param outUrl {String} This URL is used to push message delivery status updates to your application.
   * @param inUrl {String} This URL is used to push incoming SMS to your application.
   * @param format {module:model/GetCallbackSettingsResponse.FormatEnum} Desired callback data format. m - multipart/form-data, u - application/x-www-form-urlencoded, j - application/json.
   */
  var exports = function(outUrl, inUrl, format) {
    var _this = this;

    _this['outUrl'] = outUrl;
    _this['inUrl'] = inUrl;
    _this['format'] = format;
  };

  /**
   * Constructs a <code>GetCallbackSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCallbackSettingsResponse} obj Optional instance to populate.
   * @return {module:model/GetCallbackSettingsResponse} The populated <code>GetCallbackSettingsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('outUrl')) {
        obj['outUrl'] = ApiClient.convertToType(data['outUrl'], 'String');
      }
      if (data.hasOwnProperty('inUrl')) {
        obj['inUrl'] = ApiClient.convertToType(data['inUrl'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
    }
    return obj;
  }

  /**
   * This URL is used to push message delivery status updates to your application.
   * @member {String} outUrl
   */
  exports.prototype['outUrl'] = undefined;
  /**
   * This URL is used to push incoming SMS to your application.
   * @member {String} inUrl
   */
  exports.prototype['inUrl'] = undefined;
  /**
   * Desired callback data format. m - multipart/form-data, u - application/x-www-form-urlencoded, j - application/json.
   * @member {module:model/GetCallbackSettingsResponse.FormatEnum} format
   */
  exports.prototype['format'] = undefined;


  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "m"
     * @const
     */
    "m": "m",
    /**
     * value: "u"
     * @const
     */
    "u": "u",
    /**
     * value: "j"
     * @const
     */
    "j": "j"  };


  return exports;
}));


