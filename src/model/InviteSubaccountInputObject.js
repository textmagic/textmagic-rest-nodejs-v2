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
    root.TextmagicClient.InviteSubaccountInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InviteSubaccountInputObject model module.
   * @module model/InviteSubaccountInputObject
   * @version 2.0.1588
   */

  /**
   * Constructs a new <code>InviteSubaccountInputObject</code>.
   * @alias module:model/InviteSubaccountInputObject
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InviteSubaccountInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InviteSubaccountInputObject} obj Optional instance to populate.
   * @return {module:model/InviteSubaccountInputObject} The populated <code>InviteSubaccountInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
    }
    return obj;
  }

  /**
   * The invitation email will be sent to this email address.
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Type of account: *   **A** for Administrator sub-account; *   **U** for Regular User. 
   * @member {module:model/InviteSubaccountInputObject.RoleEnum} role
   */
  exports.prototype.role = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "A"
     * @const
     */
    A: "A",

    /**
     * value: "U"
     * @const
     */
    U: "U"
  };

  return exports;

}));
