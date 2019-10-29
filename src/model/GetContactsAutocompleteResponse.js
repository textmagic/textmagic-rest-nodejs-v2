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
    define(['ApiClient', 'model/GetContactsAutocompleteResponseItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetContactsAutocompleteResponseItem'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.GetContactsAutocompleteResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.GetContactsAutocompleteResponseItem);
  }
}(this, function(ApiClient, GetContactsAutocompleteResponseItem) {
  'use strict';




  /**
   * The GetContactsAutocompleteResponse model module.
   * @module model/GetContactsAutocompleteResponse
   * @version 2.0.810
   */

  /**
   * Constructs a new <code>GetContactsAutocompleteResponse</code>.
   * @alias module:model/GetContactsAutocompleteResponse
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>GetContactsAutocompleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetContactsAutocompleteResponse} obj Optional instance to populate.
   * @return {module:model/GetContactsAutocompleteResponse} The populated <code>GetContactsAutocompleteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'GetContactsAutocompleteResponseItem');

    }
    return obj;
  }




  return exports;
}));


