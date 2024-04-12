/*
 * Textmagic API
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
    root.TextmagicClient.UpdateListObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateListObject model module.
   * @module model/UpdateListObject
   * @version 2.0.23575
   */

  /**
   * Constructs a new <code>UpdateListObject</code>.
   * @alias module:model/UpdateListObject
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateListObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateListObject} obj Optional instance to populate.
   * @return {module:model/UpdateListObject} The populated <code>UpdateListObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('shared'))
        obj.shared = ApiClient.convertToType(data['shared'], 'Boolean');
      if (data.hasOwnProperty('favorited'))
        obj.favorited = ApiClient.convertToType(data['favorited'], 'Boolean');
      if (data.hasOwnProperty('isDefault'))
        obj.isDefault = ApiClient.convertToType(data['isDefault'], 'Boolean');
    }
    return obj;
  }

  /**
   * List name.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Make this list shared or not?
   * @member {Boolean} shared
   * @default false
   */
  exports.prototype.shared = false;

  /**
   * Is list favorited.
   * @member {Boolean} favorited
   * @default false
   */
  exports.prototype.favorited = false;

  /**
   * Is list default for new contacts (web only).
   * @member {Boolean} isDefault
   * @default false
   */
  exports.prototype.isDefault = false;

  return exports;

}));
