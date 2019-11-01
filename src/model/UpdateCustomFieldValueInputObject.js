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
    root.TextmagicClient.UpdateCustomFieldValueInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateCustomFieldValueInputObject model module.
   * @module model/UpdateCustomFieldValueInputObject
   * @version 2.0.865
   */

  /**
   * Constructs a new <code>UpdateCustomFieldValueInputObject</code>.
   * @alias module:model/UpdateCustomFieldValueInputObject
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UpdateCustomFieldValueInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateCustomFieldValueInputObject} obj Optional instance to populate.
   * @return {module:model/UpdateCustomFieldValueInputObject} The populated <code>UpdateCustomFieldValueInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contactId')) {
        obj['contactId'] = ApiClient.convertToType(data['contactId'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * Contact ID. See [Contact](http://docs.textmagictesting.com/#tag/Contacts). 
   * @member {Number} contactId
   */
  exports.prototype['contactId'] = undefined;
  /**
   * Custom field value. Note that this value is not parsed in any way; it is stored and used in tags exactly as you send it.
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


