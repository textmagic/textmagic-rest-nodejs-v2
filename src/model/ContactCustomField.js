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
    define(['ApiClient', 'model/UserCustomField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserCustomField'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.ContactCustomField = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.UserCustomField);
  }
}(this, function(ApiClient, UserCustomField) {
  'use strict';

  /**
   * The ContactCustomField model module.
   * @module model/ContactCustomField
   * @version 2.0.1067
   */

  /**
   * Constructs a new <code>ContactCustomField</code>.
   * @alias module:model/ContactCustomField
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ContactCustomField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactCustomField} obj Optional instance to populate.
   * @return {module:model/ContactCustomField} The populated <code>ContactCustomField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
      if (data.hasOwnProperty('userCustomField'))
        obj.userCustomField = UserCustomField.constructFromObject(data['userCustomField']);
    }
    return obj;
  }

  /**
   * @member {String} value
   */
  exports.prototype.value = undefined;

  /**
   * @member {module:model/UserCustomField} userCustomField
   */
  exports.prototype.userCustomField = undefined;

  return exports;

}));
