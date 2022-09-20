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
    root.TextmagicClient.GetCountriesResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.Country);
  }
}(this, function(ApiClient, Country) {
  'use strict';

  /**
   * The GetCountriesResponse model module.
   * @module model/GetCountriesResponse
   * @version 2.0.4420
   */

  /**
   * Constructs a new <code>GetCountriesResponse</code>.
   * @alias module:model/GetCountriesResponse
   * @class
   * @extends Array
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCountriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCountriesResponse} obj Optional instance to populate.
   * @return {module:model/GetCountriesResponse} The populated <code>GetCountriesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Country');
    }
    return obj;
  }

  Object.setPrototypeOf(exports.prototype, new Array());
  return exports;

}));
