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
    define(['ApiClient', 'model/MessageOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageOut'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.GetMessagePreviewResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.MessageOut);
  }
}(this, function(ApiClient, MessageOut) {
  'use strict';

  /**
   * The GetMessagePreviewResponse model module.
   * @module model/GetMessagePreviewResponse
   * @version 2.0.1067
   */

  /**
   * Constructs a new <code>GetMessagePreviewResponse</code>.
   * @alias module:model/GetMessagePreviewResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetMessagePreviewResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMessagePreviewResponse} obj Optional instance to populate.
   * @return {module:model/GetMessagePreviewResponse} The populated <code>GetMessagePreviewResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('messages'))
        obj.messages = ApiClient.convertToType(data['messages'], [MessageOut]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/MessageOut>} messages
   */
  exports.prototype.messages = undefined;

  return exports;

}));
