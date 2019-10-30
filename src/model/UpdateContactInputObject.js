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
    define(['ApiClient', 'model/CustomFieldListItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomFieldListItem'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.UpdateContactInputObject = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.CustomFieldListItem);
  }
}(this, function(ApiClient, CustomFieldListItem) {
  'use strict';




  /**
   * The UpdateContactInputObject model module.
   * @module model/UpdateContactInputObject
   * @version 2.0.834
   */

  /**
   * Constructs a new <code>UpdateContactInputObject</code>.
   * @alias module:model/UpdateContactInputObject
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>UpdateContactInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateContactInputObject} obj Optional instance to populate.
   * @return {module:model/UpdateContactInputObject} The populated <code>UpdateContactInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('lists')) {
        obj['lists'] = ApiClient.convertToType(data['lists'], 'String');
      }
      if (data.hasOwnProperty('favorited')) {
        obj['favorited'] = ApiClient.convertToType(data['favorited'], 'Boolean');
      }
      if (data.hasOwnProperty('blocked')) {
        obj['blocked'] = ApiClient.convertToType(data['blocked'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'Number');
      }
      if (data.hasOwnProperty('customFieldValues')) {
        obj['customFieldValues'] = ApiClient.convertToType(data['customFieldValues'], [CustomFieldListItem]);
      }
      if (data.hasOwnProperty('local')) {
        obj['local'] = ApiClient.convertToType(data['local'], 'Number');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * Contact first name.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Contact last name.
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164).
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * Contact email address.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Contact company name.
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * Comma-separated [list](http://docs.textmagictesting.com/#section/Lists) ID. Each contact must be assigned to at least one list.
   * @member {String} lists
   */
  exports.prototype['lists'] = undefined;
  /**
   * Is the contact marked as favorite?
   * @member {Boolean} favorited
   */
  exports.prototype['favorited'] = undefined;
  /**
   * Is the contact blocked for outgoing and incoming messaging?
   * @member {Boolean} blocked
   */
  exports.prototype['blocked'] = undefined;
  /**
   * Force type of phone. Possible values: 0 is landline; 1 is mobile; default is -1 (auto-detection).
   * @member {Number} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Array.<module:model/CustomFieldListItem>} customFieldValues
   */
  exports.prototype['customFieldValues'] = undefined;
  /**
   * Treat phone numbers passed in the request body as **local**.
   * @member {Number} local
   */
  exports.prototype['local'] = undefined;
  /**
   * The 2-letter ISO country code for local phone numbers, used when **local** is set to true.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


