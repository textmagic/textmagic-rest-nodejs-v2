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
    root.TextmagicClient.SetChatStatusInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SetChatStatusInputObject model module.
   * @module model/SetChatStatusInputObject
   * @version 2.0.808
   */

  /**
   * Constructs a new <code>SetChatStatusInputObject</code>.
   * @alias module:model/SetChatStatusInputObject
   * @class
   * @param id {Number} Chat ID.
   * @param status {module:model/SetChatStatusInputObject.StatusEnum} Chat status:   * **a** - Active   * **c** - Closed   * **d** - Deleted 
   */
  var exports = function(id, status) {
    var _this = this;

    _this['id'] = id;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>SetChatStatusInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetChatStatusInputObject} obj Optional instance to populate.
   * @return {module:model/SetChatStatusInputObject} The populated <code>SetChatStatusInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Chat ID.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Chat status:   * **a** - Active   * **c** - Closed   * **d** - Deleted 
   * @member {module:model/SetChatStatusInputObject.StatusEnum} status
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


