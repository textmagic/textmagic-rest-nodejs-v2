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
    define(['ApiClient', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.ContactNote = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.User);
  }
}(this, function(ApiClient, User) {
  'use strict';

  /**
   * The ContactNote model module.
   * @module model/ContactNote
   * @version 2.0.23575
   */

  /**
   * Constructs a new <code>ContactNote</code>.
   * @alias module:model/ContactNote
   * @class
   * @param id {Number} Contact note ID.
   * @param createdAt {Date} Contact note creation time.
   * @param note {String} Contact note text.
   * @param user {module:model/User} 
   */
  var exports = function(id, createdAt, note, user) {
    this.id = id;
    this.createdAt = createdAt;
    this.note = note;
    this.user = user;
  };

  /**
   * Constructs a <code>ContactNote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactNote} obj Optional instance to populate.
   * @return {module:model/ContactNote} The populated <code>ContactNote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('note'))
        obj.note = ApiClient.convertToType(data['note'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = User.constructFromObject(data['user']);
    }
    return obj;
  }

  /**
   * Contact note ID.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Contact note creation time.
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Contact note text.
   * @member {String} note
   */
  exports.prototype.note = undefined;

  /**
   * @member {module:model/User} user
   */
  exports.prototype.user = undefined;

  return exports;

}));
