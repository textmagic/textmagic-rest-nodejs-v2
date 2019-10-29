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
    root.TextmagicClient.PushToken = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PushToken model module.
   * @module model/PushToken
   * @version 2.0.808
   */

  /**
   * Constructs a new <code>PushToken</code>.
   * @alias module:model/PushToken
   * @class
   * @param type {module:model/PushToken.TypeEnum} type of the token: * **GCM** — Google Cloud Messaging * **APN** — Apple Push Notification * **FCM** — Firebase Cloud Messaging 
   * @param token {String} Push token value.
   */
  var exports = function(type, token) {
    var _this = this;

    _this['type'] = type;
    _this['token'] = token;
  };

  /**
   * Constructs a <code>PushToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushToken} obj Optional instance to populate.
   * @return {module:model/PushToken} The populated <code>PushToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }

  /**
   * type of the token: * **GCM** — Google Cloud Messaging * **APN** — Apple Push Notification * **FCM** — Firebase Cloud Messaging 
   * @member {module:model/PushToken.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Push token value.
   * @member {String} token
   */
  exports.prototype['token'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "a"
     * @const
     */
    "a": "a",
    /**
     * value: "g"
     * @const
     */
    "g": "g",
    /**
     * value: "f"
     * @const
     */
    "f": "f"  };


  return exports;
}));


