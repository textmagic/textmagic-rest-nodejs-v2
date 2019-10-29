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
    define(['ApiClient', 'model/UserCustomField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserCustomField'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.GetCustomFieldsPaginatedResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.UserCustomField);
  }
}(this, function(ApiClient, UserCustomField) {
  'use strict';




  /**
   * The GetCustomFieldsPaginatedResponse model module.
   * @module model/GetCustomFieldsPaginatedResponse
   * @version 2.0.813
   */

  /**
   * Constructs a new <code>GetCustomFieldsPaginatedResponse</code>.
   * @alias module:model/GetCustomFieldsPaginatedResponse
   * @class
   * @param page {Number} 
   * @param pageCount {Number} The total number of pages.
   * @param limit {Number} The number of results per page.
   * @param resources {Array.<module:model/UserCustomField>} 
   */
  var exports = function(page, pageCount, limit, resources) {
    var _this = this;

    _this['page'] = page;
    _this['pageCount'] = pageCount;
    _this['limit'] = limit;
    _this['resources'] = resources;
  };

  /**
   * Constructs a <code>GetCustomFieldsPaginatedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCustomFieldsPaginatedResponse} obj Optional instance to populate.
   * @return {module:model/GetCustomFieldsPaginatedResponse} The populated <code>GetCustomFieldsPaginatedResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('pageCount')) {
        obj['pageCount'] = ApiClient.convertToType(data['pageCount'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = ApiClient.convertToType(data['resources'], [UserCustomField]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * The total number of pages.
   * @member {Number} pageCount
   */
  exports.prototype['pageCount'] = undefined;
  /**
   * The number of results per page.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {Array.<module:model/UserCustomField>} resources
   */
  exports.prototype['resources'] = undefined;



  return exports;
}));


