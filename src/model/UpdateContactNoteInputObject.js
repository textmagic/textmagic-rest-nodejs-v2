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
    root.TextmagicClient.UpdateContactNoteInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateContactNoteInputObject model module.
   * @module model/UpdateContactNoteInputObject
   * @version 2.0.23575
   */

  /**
   * Constructs a new <code>UpdateContactNoteInputObject</code>.
   * @alias module:model/UpdateContactNoteInputObject
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateContactNoteInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateContactNoteInputObject} obj Optional instance to populate.
   * @return {module:model/UpdateContactNoteInputObject} The populated <code>UpdateContactNoteInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('note'))
        obj.note = ApiClient.convertToType(data['note'], 'String');
    }
    return obj;
  }

  /**
   * Contact Note text.
   * @member {String} note
   */
  exports.prototype.note = undefined;

  return exports;

}));
