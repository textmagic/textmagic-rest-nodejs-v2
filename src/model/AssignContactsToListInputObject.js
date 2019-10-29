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
    root.TextmagicClient.AssignContactsToListInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AssignContactsToListInputObject model module.
   * @module model/AssignContactsToListInputObject
   * @version 2.0.817
   */

  /**
   * Constructs a new <code>AssignContactsToListInputObject</code>.
   * @alias module:model/AssignContactsToListInputObject
   * @class
   * @param contacts {String} Comma-separated array of [Contacts](http://docs.textmagictesting.com/#tag/Contacts) IDs.
   */
  var exports = function(contacts) {
    var _this = this;

    _this['contacts'] = contacts;
  };

  /**
   * Constructs a <code>AssignContactsToListInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssignContactsToListInputObject} obj Optional instance to populate.
   * @return {module:model/AssignContactsToListInputObject} The populated <code>AssignContactsToListInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], 'String');
      }
    }
    return obj;
  }

  /**
   * Comma-separated array of [Contacts](http://docs.textmagictesting.com/#tag/Contacts) IDs.
   * @member {String} contacts
   */
  exports.prototype['contacts'] = undefined;



  return exports;
}));


