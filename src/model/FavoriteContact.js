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
    root.TextmagicClient.FavoriteContact = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FavoriteContact model module.
   * @module model/FavoriteContact
   * @version 2.0.23575
   */

  /**
   * Constructs a new <code>FavoriteContact</code>.
   * @alias module:model/FavoriteContact
   * @class
   * @param entityId {Number} List or Contact ID.
   * @param entityType {module:model/FavoriteContact.EntityTypeEnum} Entity type which should be marked as **favorite**.
   * @param primaryLabel {String} Contact first name/last name if entityType is **contact**; List name if entity type is **list**.
   * @param secondaryLabel {String} Phone number if entityType is **contact**; List contacts number if entity type is **list**.
   * @param tertiaryLabel {String} Contact country if entityType is **contact**; else, null.
   * @param avatar {String} 
   */
  var exports = function(entityId, entityType, primaryLabel, secondaryLabel, tertiaryLabel, avatar) {
    this.entityId = entityId;
    this.entityType = entityType;
    this.primaryLabel = primaryLabel;
    this.secondaryLabel = secondaryLabel;
    this.tertiaryLabel = tertiaryLabel;
    this.avatar = avatar;
  };

  /**
   * Constructs a <code>FavoriteContact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteContact} obj Optional instance to populate.
   * @return {module:model/FavoriteContact} The populated <code>FavoriteContact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('entityId'))
        obj.entityId = ApiClient.convertToType(data['entityId'], 'Number');
      if (data.hasOwnProperty('entityType'))
        obj.entityType = ApiClient.convertToType(data['entityType'], 'String');
      if (data.hasOwnProperty('primaryLabel'))
        obj.primaryLabel = ApiClient.convertToType(data['primaryLabel'], 'String');
      if (data.hasOwnProperty('secondaryLabel'))
        obj.secondaryLabel = ApiClient.convertToType(data['secondaryLabel'], 'String');
      if (data.hasOwnProperty('tertiaryLabel'))
        obj.tertiaryLabel = ApiClient.convertToType(data['tertiaryLabel'], 'String');
      if (data.hasOwnProperty('avatar'))
        obj.avatar = ApiClient.convertToType(data['avatar'], 'String');
    }
    return obj;
  }

  /**
   * List or Contact ID.
   * @member {Number} entityId
   */
  exports.prototype.entityId = undefined;

  /**
   * Entity type which should be marked as **favorite**.
   * @member {module:model/FavoriteContact.EntityTypeEnum} entityType
   */
  exports.prototype.entityType = undefined;

  /**
   * Contact first name/last name if entityType is **contact**; List name if entity type is **list**.
   * @member {String} primaryLabel
   */
  exports.prototype.primaryLabel = undefined;

  /**
   * Phone number if entityType is **contact**; List contacts number if entity type is **list**.
   * @member {String} secondaryLabel
   */
  exports.prototype.secondaryLabel = undefined;

  /**
   * Contact country if entityType is **contact**; else, null.
   * @member {String} tertiaryLabel
   */
  exports.prototype.tertiaryLabel = undefined;

  /**
   * @member {String} avatar
   */
  exports.prototype.avatar = undefined;


  /**
   * Allowed values for the <code>entityType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EntityTypeEnum = {
    /**
     * value: "list"
     * @const
     */
    list: "list",

    /**
     * value: "contact"
     * @const
     */
    contact: "contact"
  };

  return exports;

}));
