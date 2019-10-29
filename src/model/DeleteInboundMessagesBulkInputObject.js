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
    root.TextmagicClient.DeleteInboundMessagesBulkInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteInboundMessagesBulkInputObject model module.
   * @module model/DeleteInboundMessagesBulkInputObject
   * @version 2.0.813
   */

  /**
   * Constructs a new <code>DeleteInboundMessagesBulkInputObject</code>.
   * @alias module:model/DeleteInboundMessagesBulkInputObject
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DeleteInboundMessagesBulkInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteInboundMessagesBulkInputObject} obj Optional instance to populate.
   * @return {module:model/DeleteInboundMessagesBulkInputObject} The populated <code>DeleteInboundMessagesBulkInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ids')) {
        obj['ids'] = ApiClient.convertToType(data['ids'], 'String');
      }
      if (data.hasOwnProperty('all')) {
        obj['all'] = ApiClient.convertToType(data['all'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Entity ID(s), separated by comma
   * @member {String} ids
   */
  exports.prototype['ids'] = undefined;
  /**
   * Default is 0 (false). If set to 1, all the entities will be removed.
   * @member {Number} all
   */
  exports.prototype['all'] = undefined;



  return exports;
}));


