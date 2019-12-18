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
    root.TextmagicClient.UnsubscribeContactInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UnsubscribeContactInputObject model module.
   * @module model/UnsubscribeContactInputObject
   * @version 2.0.1067
   */

  /**
   * Constructs a new <code>UnsubscribeContactInputObject</code>.
   * @alias module:model/UnsubscribeContactInputObject
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UnsubscribeContactInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsubscribeContactInputObject} obj Optional instance to populate.
   * @return {module:model/UnsubscribeContactInputObject} The populated <code>UnsubscribeContactInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('blockIncoming'))
        obj.blockIncoming = ApiClient.convertToType(data['blockIncoming'], 'Number');
    }
    return obj;
  }

  /**
   * Contact phone number.
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * If set to 1, incoming messages from this number will be blocked.
   * @member {Number} blockIncoming
   */
  exports.prototype.blockIncoming = undefined;

  return exports;

}));
