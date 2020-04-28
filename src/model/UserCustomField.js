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
    root.TextmagicClient.UserCustomField = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserCustomField model module.
   * @module model/UserCustomField
   * @version 2.0.1423
   */

  /**
   * Constructs a new <code>UserCustomField</code>.
   * @alias module:model/UserCustomField
   * @class
   * @param id {Number} Custom field ID.
   * @param name {String} Custom field name.
   * @param createdAt {Date} Custom field creation time.
   */
  var exports = function(id, name, createdAt) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
  };

  /**
   * Constructs a <code>UserCustomField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserCustomField} obj Optional instance to populate.
   * @return {module:model/UserCustomField} The populated <code>UserCustomField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
    }
    return obj;
  }

  /**
   * Custom field ID.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Custom field name.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Custom field creation time.
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  return exports;

}));
