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
    root.TextmagicClient.BuyDedicatedNumberInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BuyDedicatedNumberInputObject model module.
   * @module model/BuyDedicatedNumberInputObject
   * @version 2.0.20604
   */

  /**
   * Constructs a new <code>BuyDedicatedNumberInputObject</code>.
   * @alias module:model/BuyDedicatedNumberInputObject
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BuyDedicatedNumberInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuyDedicatedNumberInputObject} obj Optional instance to populate.
   * @return {module:model/BuyDedicatedNumberInputObject} The populated <code>BuyDedicatedNumberInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'Number');
    }
    return obj;
  }

  /**
   * Dedicated phone number.
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * Country code phone number.
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * Assigned dedicated number. This number will be available for this account only. You cannot transfer numbers between sub-accounts. 
   * @member {Number} userId
   */
  exports.prototype.userId = undefined;

  return exports;

}));
