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
    root.TextmagicClient.RequestSenderIdInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestSenderIdInputObject model module.
   * @module model/RequestSenderIdInputObject
   * @version 2.0.807
   */

  /**
   * Constructs a new <code>RequestSenderIdInputObject</code>.
   * @alias module:model/RequestSenderIdInputObject
   * @class
   * @param senderId {String} Sender ID that you are applying for. *   11 characters maximum *   Only Latin based characters and digits are allowed *   Should contain at least one letter 
   * @param explanation {String} Explanation why do you need this Sender ID.
   */
  var exports = function(senderId, explanation) {
    var _this = this;

    _this['senderId'] = senderId;
    _this['explanation'] = explanation;
  };

  /**
   * Constructs a <code>RequestSenderIdInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestSenderIdInputObject} obj Optional instance to populate.
   * @return {module:model/RequestSenderIdInputObject} The populated <code>RequestSenderIdInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('senderId')) {
        obj['senderId'] = ApiClient.convertToType(data['senderId'], 'String');
      }
      if (data.hasOwnProperty('explanation')) {
        obj['explanation'] = ApiClient.convertToType(data['explanation'], 'String');
      }
    }
    return obj;
  }

  /**
   * Sender ID that you are applying for. *   11 characters maximum *   Only Latin based characters and digits are allowed *   Should contain at least one letter 
   * @member {String} senderId
   */
  exports.prototype['senderId'] = undefined;
  /**
   * Explanation why do you need this Sender ID.
   * @member {String} explanation
   */
  exports.prototype['explanation'] = undefined;



  return exports;
}));


