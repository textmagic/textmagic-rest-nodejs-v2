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
    define(['ApiClient', 'model/Country'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Country'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.DoCarrierLookupResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.Country);
  }
}(this, function(ApiClient, Country) {
  'use strict';

  /**
   * The DoCarrierLookupResponse model module.
   * @module model/DoCarrierLookupResponse
   * @version 2.0.1484
   */

  /**
   * Constructs a new <code>DoCarrierLookupResponse</code>.
   * @alias module:model/DoCarrierLookupResponse
   * @class
   * @param cost {Number} The cost to check that one number is constant – 0.04 in your account currency.
   * @param local {String} Phone number in [National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers).
   * @param type {module:model/DoCarrierLookupResponse.TypeEnum} Phone number type.
   * @param carrier {String} Carrier name.
   * @param number164 {String} Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164).
   * @param valid {Boolean} This field shows whether the entered phone number is valid or not.
   */
  var exports = function(cost, local, type, carrier, number164, valid) {
    this.cost = cost;
    this.local = local;
    this.type = type;
    this.carrier = carrier;
    this.number164 = number164;
    this.valid = valid;
  };

  /**
   * Constructs a <code>DoCarrierLookupResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DoCarrierLookupResponse} obj Optional instance to populate.
   * @return {module:model/DoCarrierLookupResponse} The populated <code>DoCarrierLookupResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cost'))
        obj.cost = ApiClient.convertToType(data['cost'], 'Number');
      if (data.hasOwnProperty('country'))
        obj.country = Country.constructFromObject(data['country']);
      if (data.hasOwnProperty('local'))
        obj.local = ApiClient.convertToType(data['local'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('carrier'))
        obj.carrier = ApiClient.convertToType(data['carrier'], 'String');
      if (data.hasOwnProperty('number164'))
        obj.number164 = ApiClient.convertToType(data['number164'], 'String');
      if (data.hasOwnProperty('valid'))
        obj.valid = ApiClient.convertToType(data['valid'], 'Boolean');
    }
    return obj;
  }

  /**
   * The cost to check that one number is constant – 0.04 in your account currency.
   * @member {Number} cost
   */
  exports.prototype.cost = undefined;

  /**
   * Phone number country.
   * @member {module:model/Country} country
   */
  exports.prototype.country = undefined;

  /**
   * Phone number in [National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers).
   * @member {String} local
   */
  exports.prototype.local = undefined;

  /**
   * Phone number type.
   * @member {module:model/DoCarrierLookupResponse.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * Carrier name.
   * @member {String} carrier
   */
  exports.prototype.carrier = undefined;

  /**
   * Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164).
   * @member {String} number164
   */
  exports.prototype.number164 = undefined;

  /**
   * This field shows whether the entered phone number is valid or not.
   * @member {Boolean} valid
   */
  exports.prototype.valid = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "mobile"
     * @const
     */
    mobile: "mobile",

    /**
     * value: "landline"
     * @const
     */
    landline: "landline",

    /**
     * value: "voip"
     * @const
     */
    voip: "voip"
  };

  return exports;

}));
