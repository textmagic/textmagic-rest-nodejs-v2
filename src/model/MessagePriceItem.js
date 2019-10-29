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
    root.TextmagicClient.MessagePriceItem = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessagePriceItem model module.
   * @module model/MessagePriceItem
   * @version 2.0.824
   */

  /**
   * Constructs a new <code>MessagePriceItem</code>.
   * @alias module:model/MessagePriceItem
   * @class
   * @param name {String} Country name.
   * @param price {String} Price to send message to desired country.
   * @param country {String} The 2-letter ISO country code of the recipient's phone number.
   */
  var exports = function(name, price, country) {
    var _this = this;

    _this['name'] = name;
    _this['price'] = price;
    _this['country'] = country;
  };

  /**
   * Constructs a <code>MessagePriceItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessagePriceItem} obj Optional instance to populate.
   * @return {module:model/MessagePriceItem} The populated <code>MessagePriceItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * Country name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Price to send message to desired country.
   * @member {String} price
   */
  exports.prototype['price'] = undefined;
  /**
   * The 2-letter ISO country code of the recipient's phone number.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


