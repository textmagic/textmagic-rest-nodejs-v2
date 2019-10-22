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
    root.TextmagicClient.GetMessagePriceResponseCountriesItem = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetMessagePriceResponseCountriesItem model module.
   * @module model/GetMessagePriceResponseCountriesItem
   * @version 
   */

  /**
   * Constructs a new <code>GetMessagePriceResponseCountriesItem</code>.
   * @alias module:model/GetMessagePriceResponseCountriesItem
   * @class
   * @param country {String} Two-letter ISO country code
   * @param countryName {String} Country name
   * @param allowDedicated {Boolean} Is allow to use dedicated number
   * @param count {Number} Parts count to send
   * @param max {Number} Maximum parts to send
   * @param sum {String} Total price to send
   * @param landline {Number} Is this landline number?
   */
  var exports = function(country, countryName, allowDedicated, count, max, sum, landline) {
    var _this = this;

    _this['country'] = country;
    _this['countryName'] = countryName;
    _this['allowDedicated'] = allowDedicated;
    _this['count'] = count;
    _this['max'] = max;
    _this['sum'] = sum;
    _this['landline'] = landline;
  };

  /**
   * Constructs a <code>GetMessagePriceResponseCountriesItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMessagePriceResponseCountriesItem} obj Optional instance to populate.
   * @return {module:model/GetMessagePriceResponseCountriesItem} The populated <code>GetMessagePriceResponseCountriesItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('countryName')) {
        obj['countryName'] = ApiClient.convertToType(data['countryName'], 'String');
      }
      if (data.hasOwnProperty('allowDedicated')) {
        obj['allowDedicated'] = ApiClient.convertToType(data['allowDedicated'], 'Boolean');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('max')) {
        obj['max'] = ApiClient.convertToType(data['max'], 'Number');
      }
      if (data.hasOwnProperty('sum')) {
        obj['sum'] = ApiClient.convertToType(data['sum'], 'String');
      }
      if (data.hasOwnProperty('landline')) {
        obj['landline'] = ApiClient.convertToType(data['landline'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Two-letter ISO country code
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Country name
   * @member {String} countryName
   */
  exports.prototype['countryName'] = undefined;
  /**
   * Is allow to use dedicated number
   * @member {Boolean} allowDedicated
   */
  exports.prototype['allowDedicated'] = undefined;
  /**
   * Parts count to send
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Maximum parts to send
   * @member {Number} max
   */
  exports.prototype['max'] = undefined;
  /**
   * Total price to send
   * @member {String} sum
   */
  exports.prototype['sum'] = undefined;
  /**
   * Is this landline number?
   * @member {Number} landline
   */
  exports.prototype['landline'] = undefined;



  return exports;
}));


