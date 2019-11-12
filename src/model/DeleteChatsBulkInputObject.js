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
    root.TextmagicClient.DeleteChatsBulkInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteChatsBulkInputObject model module.
   * @module model/DeleteChatsBulkInputObject
   * @version 2.0.951
   */

  /**
   * Constructs a new <code>DeleteChatsBulkInputObject</code>.
   * @alias module:model/DeleteChatsBulkInputObject
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DeleteChatsBulkInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteChatsBulkInputObject} obj Optional instance to populate.
   * @return {module:model/DeleteChatsBulkInputObject} The populated <code>DeleteChatsBulkInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ids')) {
        obj['ids'] = ApiClient.convertToType(data['ids'], 'String');
      }
      if (data.hasOwnProperty('all')) {
        obj['all'] = ApiClient.convertToType(data['all'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Entity ID(s), separated by comma.
   * @member {String} ids
   */
  exports.prototype['ids'] = undefined;
  /**
   * Entity ID(s), separated by comma.
   * @member {Boolean} all
   */
  exports.prototype['all'] = undefined;
  /**
   * Default is an empty string. If set, all entities with specified status will be affected.
   * @member {module:model/DeleteChatsBulkInputObject.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "a"
     * @const
     */
    "a": "a",
    /**
     * value: "c"
     * @const
     */
    "c": "c",
    /**
     * value: "d"
     * @const
     */
    "d": "d"  };


  return exports;
}));


