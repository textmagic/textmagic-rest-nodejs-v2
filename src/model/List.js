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
    define(['ApiClient', 'model/ListImage', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ListImage'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.List = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.ListImage, root.TextmagicClient.User);
  }
}(this, function(ApiClient, ListImage, User) {
  'use strict';

  /**
   * The List model module.
   * @module model/List
   * @version 2.0.1423
   */

  /**
   * Constructs a new <code>List</code>.
   * @alias module:model/List
   * @class
   * @param id {Number} List ID.
   * @param name {String} List name.
   * @param description {String} Description of the list.
   * @param favorited {Boolean} Is the List favorited? See [Favorites list](https://docs.textmagic.com/#operation/getFavourites).
   * @param membersCount {Number} List members count.
   * @param user {module:model/User} 
   * @param service {Boolean} Internal service field.
   * @param shared {Boolean} Is the list **shared** among all sub-accounts?
   * @param avatar {module:model/ListImage} 
   * @param isDefault {Boolean} Indicates that List is used as a default. All new contacts added via the Web-app will be added in this List by default.
   */
  var exports = function(id, name, description, favorited, membersCount, user, service, shared, avatar, isDefault) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.favorited = favorited;
    this.membersCount = membersCount;
    this.user = user;
    this.service = service;
    this.shared = shared;
    this.avatar = avatar;
    this.isDefault = isDefault;
  };

  /**
   * Constructs a <code>List</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/List} obj Optional instance to populate.
   * @return {module:model/List} The populated <code>List</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('favorited'))
        obj.favorited = ApiClient.convertToType(data['favorited'], 'Boolean');
      if (data.hasOwnProperty('membersCount'))
        obj.membersCount = ApiClient.convertToType(data['membersCount'], 'Number');
      if (data.hasOwnProperty('user'))
        obj.user = User.constructFromObject(data['user']);
      if (data.hasOwnProperty('service'))
        obj.service = ApiClient.convertToType(data['service'], 'Boolean');
      if (data.hasOwnProperty('shared'))
        obj.shared = ApiClient.convertToType(data['shared'], 'Boolean');
      if (data.hasOwnProperty('avatar'))
        obj.avatar = ListImage.constructFromObject(data['avatar']);
      if (data.hasOwnProperty('isDefault'))
        obj.isDefault = ApiClient.convertToType(data['isDefault'], 'Boolean');
    }
    return obj;
  }

  /**
   * List ID.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * List name.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Description of the list.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Is the List favorited? See [Favorites list](https://docs.textmagic.com/#operation/getFavourites).
   * @member {Boolean} favorited
   */
  exports.prototype.favorited = undefined;

  /**
   * List members count.
   * @member {Number} membersCount
   */
  exports.prototype.membersCount = undefined;

  /**
   * @member {module:model/User} user
   */
  exports.prototype.user = undefined;

  /**
   * Internal service field.
   * @member {Boolean} service
   */
  exports.prototype.service = undefined;

  /**
   * Is the list **shared** among all sub-accounts?
   * @member {Boolean} shared
   */
  exports.prototype.shared = undefined;

  /**
   * @member {module:model/ListImage} avatar
   */
  exports.prototype.avatar = undefined;

  /**
   * Indicates that List is used as a default. All new contacts added via the Web-app will be added in this List by default.
   * @member {Boolean} isDefault
   */
  exports.prototype.isDefault = undefined;

  return exports;

}));
