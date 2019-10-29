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
    define(['ApiClient', 'model/MessagesIcsParametersRecipients'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessagesIcsParametersRecipients'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.MessagesIcsParameters = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.MessagesIcsParametersRecipients);
  }
}(this, function(ApiClient, MessagesIcsParametersRecipients) {
  'use strict';




  /**
   * The MessagesIcsParameters model module.
   * @module model/MessagesIcsParameters
   * @version 2.0.811
   */

  /**
   * Constructs a new <code>MessagesIcsParameters</code>.
   * @alias module:model/MessagesIcsParameters
   * @class
   * @param text {String} Scheduled message text.
   * @param recipients {module:model/MessagesIcsParametersRecipients} 
   */
  var exports = function(text, recipients) {
    var _this = this;

    _this['text'] = text;
    _this['recipients'] = recipients;
  };

  /**
   * Constructs a <code>MessagesIcsParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessagesIcsParameters} obj Optional instance to populate.
   * @return {module:model/MessagesIcsParameters} The populated <code>MessagesIcsParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = MessagesIcsParametersRecipients.constructFromObject(data['recipients']);
      }
    }
    return obj;
  }

  /**
   * Scheduled message text.
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {module:model/MessagesIcsParametersRecipients} recipients
   */
  exports.prototype['recipients'] = undefined;



  return exports;
}));


