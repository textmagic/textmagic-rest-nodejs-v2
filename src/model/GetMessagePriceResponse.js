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
    define(['ApiClient', 'model/GetMessagePriceResponseCountriesItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetMessagePriceResponseCountriesItem'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.GetMessagePriceResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.GetMessagePriceResponseCountriesItem);
  }
}(this, function(ApiClient, GetMessagePriceResponseCountriesItem) {
  'use strict';




  /**
   * The GetMessagePriceResponse model module.
   * @module model/GetMessagePriceResponse
   * @version 2.0.818
   */

  /**
   * Constructs a new <code>GetMessagePriceResponse</code>.
   * @alias module:model/GetMessagePriceResponse
   * @class
   * @param total {Number} Total price of the message.
   * @param parts {Number} Message parts (multiples of 160 characters) count.
   * @param countries {Array.<module:model/GetMessagePriceResponseCountriesItem>} 
   */
  var exports = function(total, parts, countries) {
    var _this = this;

    _this['total'] = total;
    _this['parts'] = parts;
    _this['countries'] = countries;
  };

  /**
   * Constructs a <code>GetMessagePriceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMessagePriceResponse} obj Optional instance to populate.
   * @return {module:model/GetMessagePriceResponse} The populated <code>GetMessagePriceResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('parts')) {
        obj['parts'] = ApiClient.convertToType(data['parts'], 'Number');
      }
      if (data.hasOwnProperty('countries')) {
        obj['countries'] = ApiClient.convertToType(data['countries'], [GetMessagePriceResponseCountriesItem]);
      }
    }
    return obj;
  }

  /**
   * Total price of the message.
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * Message parts (multiples of 160 characters) count.
   * @member {Number} parts
   */
  exports.prototype['parts'] = undefined;
  /**
   * @member {Array.<module:model/GetMessagePriceResponseCountriesItem>} countries
   */
  exports.prototype['countries'] = undefined;



  return exports;
}));


