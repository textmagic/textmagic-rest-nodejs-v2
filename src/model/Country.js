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
    root.TextmagicClient.Country = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Country model module.
   * @module model/Country
   * @version 2.0.865
   */

  /**
   * Constructs a new <code>Country</code>.
   * @alias module:model/Country
   * @class
   * @param id {String} The 2-letter ISO country ID.
   * @param name {String} Full country name.
   */
  var exports = function(id, name) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Country} obj Optional instance to populate.
   * @return {module:model/Country} The populated <code>Country</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The 2-letter ISO country ID.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Full country name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


