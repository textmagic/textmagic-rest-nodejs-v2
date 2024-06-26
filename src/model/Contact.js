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
    define(['ApiClient', 'model/ContactCustomField', 'model/ContactImage', 'model/ContactNote', 'model/Country', 'model/List', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContactCustomField'), require('./ContactImage'), require('./ContactNote'), require('./Country'), require('./List'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.Contact = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.ContactCustomField, root.TextmagicClient.ContactImage, root.TextmagicClient.ContactNote, root.TextmagicClient.Country, root.TextmagicClient.List, root.TextmagicClient.User);
  }
}(this, function(ApiClient, ContactCustomField, ContactImage, ContactNote, Country, List, User) {
  'use strict';

  /**
   * The Contact model module.
   * @module model/Contact
   * @version 2.0.23575
   */

  /**
   * Constructs a new <code>Contact</code>.
   * @alias module:model/Contact
   * @class
   * @param id {Number} Contact ID.
   * @param favorited {Boolean} Is the Contact favorite? [Favorite list](https://docs.textmagic.com/#operation/getFavorites).
   * @param blocked {Boolean} Is the Contact blocked? [Blocked contacts](https://docs.textmagic.com/#operation/getBlockedContacts).
   * @param firstName {String} Contact first name.
   * @param lastName {String} Contact last name.
   * @param companyName {String} Company name.
   * @param phone {String} Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164).
   * @param email {String} Contact email address.
   * @param country {module:model/Country} Contact country.
   * @param customFields {Array.<module:model/ContactCustomField>} See the [Custom Fields](https://docs.textmagic.com/#tag/Custom-Fields) section.
   * @param user {module:model/User} 
   * @param lists {Array.<module:model/List>} 
   * @param phoneType {String} Phone number type: * **0** if it is fixed-line; * **1** if it is mobile; * **2** if it is mobile or fixed-line (in case we cannot distingush between fixed-line or mobile); * **3** if it is toll-free; * **4** if it is a premium rate phone; * **5** if it is a shared cost phone; * **6** if it is a VoIP; * **7** if it is a [Personal Number](); * **8** if it is a pager; * **9** if it is a Universal Access Number; * **10** if the phone type is unknown; * **-1** if the phone type is not yet processed or cannot be determined. 
   * @param avatar {module:model/ContactImage} 
   * @param notes {Array.<module:model/ContactNote>} 
   */
  var exports = function(id, favorited, blocked, firstName, lastName, companyName, phone, email, country, customFields, user, lists, phoneType, avatar, notes) {
    this.id = id;
    this.favorited = favorited;
    this.blocked = blocked;
    this.firstName = firstName;
    this.lastName = lastName;
    this.companyName = companyName;
    this.phone = phone;
    this.email = email;
    this.country = country;
    this.customFields = customFields;
    this.user = user;
    this.lists = lists;
    this.phoneType = phoneType;
    this.avatar = avatar;
    this.notes = notes;
  };

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('favorited'))
        obj.favorited = ApiClient.convertToType(data['favorited'], 'Boolean');
      if (data.hasOwnProperty('blocked'))
        obj.blocked = ApiClient.convertToType(data['blocked'], 'Boolean');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('companyName'))
        obj.companyName = ApiClient.convertToType(data['companyName'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = Country.constructFromObject(data['country']);
      if (data.hasOwnProperty('customFields'))
        obj.customFields = ApiClient.convertToType(data['customFields'], [ContactCustomField]);
      if (data.hasOwnProperty('user'))
        obj.user = User.constructFromObject(data['user']);
      if (data.hasOwnProperty('lists'))
        obj.lists = ApiClient.convertToType(data['lists'], [List]);
      if (data.hasOwnProperty('phoneType'))
        obj.phoneType = ApiClient.convertToType(data['phoneType'], 'String');
      if (data.hasOwnProperty('avatar'))
        obj.avatar = ContactImage.constructFromObject(data['avatar']);
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], [ContactNote]);
    }
    return obj;
  }

  /**
   * Contact ID.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Is the Contact favorite? [Favorite list](https://docs.textmagic.com/#operation/getFavorites).
   * @member {Boolean} favorited
   */
  exports.prototype.favorited = undefined;

  /**
   * Is the Contact blocked? [Blocked contacts](https://docs.textmagic.com/#operation/getBlockedContacts).
   * @member {Boolean} blocked
   */
  exports.prototype.blocked = undefined;

  /**
   * Contact first name.
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * Contact last name.
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  /**
   * Company name.
   * @member {String} companyName
   */
  exports.prototype.companyName = undefined;

  /**
   * Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164).
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * Contact email address.
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Contact country.
   * @member {module:model/Country} country
   */
  exports.prototype.country = undefined;

  /**
   * See the [Custom Fields](https://docs.textmagic.com/#tag/Custom-Fields) section.
   * @member {Array.<module:model/ContactCustomField>} customFields
   */
  exports.prototype.customFields = undefined;

  /**
   * @member {module:model/User} user
   */
  exports.prototype.user = undefined;

  /**
   * @member {Array.<module:model/List>} lists
   */
  exports.prototype.lists = undefined;

  /**
   * Phone number type: * **0** if it is fixed-line; * **1** if it is mobile; * **2** if it is mobile or fixed-line (in case we cannot distingush between fixed-line or mobile); * **3** if it is toll-free; * **4** if it is a premium rate phone; * **5** if it is a shared cost phone; * **6** if it is a VoIP; * **7** if it is a [Personal Number](); * **8** if it is a pager; * **9** if it is a Universal Access Number; * **10** if the phone type is unknown; * **-1** if the phone type is not yet processed or cannot be determined. 
   * @member {String} phoneType
   */
  exports.prototype.phoneType = undefined;

  /**
   * @member {module:model/ContactImage} avatar
   */
  exports.prototype.avatar = undefined;

  /**
   * @member {Array.<module:model/ContactNote>} notes
   */
  exports.prototype.notes = undefined;

  return exports;

}));
