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
    root.TextmagicClient.GetContactsAutocompleteResponseItem = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetContactsAutocompleteResponseItem model module.
   * @module model/GetContactsAutocompleteResponseItem
   * @version 2.0.1484
   */

  /**
   * Constructs a new <code>GetContactsAutocompleteResponseItem</code>.
   * @alias module:model/GetContactsAutocompleteResponseItem
   * @class
   * @param entityId {Number} Id of entity. 0 if object is a reply.
   * @param entityType {module:model/GetContactsAutocompleteResponseItem.EntityTypeEnum} Entry type: * **contact** if it is related to a contact; * **list** if it is related to a contact list; * **reply** if it is related to an incoming message. 
   * @param value {String} ID of the contact/list if entityType is contact/list OR phone number if entityType is reply.
   * @param label {String} Name of the contact/list if entityType is contact/list OR phone number if entityType is reply.
   * @param sharedBy {String} If contact or list was shared by another sub-account, the name of this user will be shown.
   * @param isShared {Boolean} If contact or list was shared by another sub-account then `true` will be set.
   * @param avatar {String} Contact avatar URI.
   * @param favorited {Boolean} If contact has been marked as favorite.
   * @param userId {Number} Owner ID of the contact/list (if it was shared).
   * @param countryName {String} 
   * @param qposition {Number} 
   * @param rposition {Number} 
   */
  var exports = function(entityId, entityType, value, label, sharedBy, isShared, avatar, favorited, userId, countryName, qposition, rposition) {
    this.entityId = entityId;
    this.entityType = entityType;
    this.value = value;
    this.label = label;
    this.sharedBy = sharedBy;
    this.isShared = isShared;
    this.avatar = avatar;
    this.favorited = favorited;
    this.userId = userId;
    this.countryName = countryName;
    this.qposition = qposition;
    this.rposition = rposition;
  };

  /**
   * Constructs a <code>GetContactsAutocompleteResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetContactsAutocompleteResponseItem} obj Optional instance to populate.
   * @return {module:model/GetContactsAutocompleteResponseItem} The populated <code>GetContactsAutocompleteResponseItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('entityId'))
        obj.entityId = ApiClient.convertToType(data['entityId'], 'Number');
      if (data.hasOwnProperty('entityType'))
        obj.entityType = ApiClient.convertToType(data['entityType'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('sharedBy'))
        obj.sharedBy = ApiClient.convertToType(data['sharedBy'], 'String');
      if (data.hasOwnProperty('isShared'))
        obj.isShared = ApiClient.convertToType(data['isShared'], 'Boolean');
      if (data.hasOwnProperty('avatar'))
        obj.avatar = ApiClient.convertToType(data['avatar'], 'String');
      if (data.hasOwnProperty('favorited'))
        obj.favorited = ApiClient.convertToType(data['favorited'], 'Boolean');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'Number');
      if (data.hasOwnProperty('countryName'))
        obj.countryName = ApiClient.convertToType(data['countryName'], 'String');
      if (data.hasOwnProperty('qposition'))
        obj.qposition = ApiClient.convertToType(data['qposition'], 'Number');
      if (data.hasOwnProperty('rposition'))
        obj.rposition = ApiClient.convertToType(data['rposition'], 'Number');
    }
    return obj;
  }

  /**
   * Id of entity. 0 if object is a reply.
   * @member {Number} entityId
   */
  exports.prototype.entityId = undefined;

  /**
   * Entry type: * **contact** if it is related to a contact; * **list** if it is related to a contact list; * **reply** if it is related to an incoming message. 
   * @member {module:model/GetContactsAutocompleteResponseItem.EntityTypeEnum} entityType
   */
  exports.prototype.entityType = undefined;

  /**
   * ID of the contact/list if entityType is contact/list OR phone number if entityType is reply.
   * @member {String} value
   */
  exports.prototype.value = undefined;

  /**
   * Name of the contact/list if entityType is contact/list OR phone number if entityType is reply.
   * @member {String} label
   */
  exports.prototype.label = undefined;

  /**
   * If contact or list was shared by another sub-account, the name of this user will be shown.
   * @member {String} sharedBy
   */
  exports.prototype.sharedBy = undefined;

  /**
   * If contact or list was shared by another sub-account then `true` will be set.
   * @member {Boolean} isShared
   */
  exports.prototype.isShared = undefined;

  /**
   * Contact avatar URI.
   * @member {String} avatar
   */
  exports.prototype.avatar = undefined;

  /**
   * If contact has been marked as favorite.
   * @member {Boolean} favorited
   */
  exports.prototype.favorited = undefined;

  /**
   * Owner ID of the contact/list (if it was shared).
   * @member {Number} userId
   */
  exports.prototype.userId = undefined;

  /**
   * @member {String} countryName
   */
  exports.prototype.countryName = undefined;

  /**
   * @member {Number} qposition
   */
  exports.prototype.qposition = undefined;

  /**
   * @member {Number} rposition
   */
  exports.prototype.rposition = undefined;


  /**
   * Allowed values for the <code>entityType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EntityTypeEnum = {
    /**
     * value: "reply"
     * @const
     */
    reply: "reply",

    /**
     * value: "contact"
     * @const
     */
    contact: "contact",

    /**
     * value: "list"
     * @const
     */
    list: "list"
  };

  return exports;

}));
