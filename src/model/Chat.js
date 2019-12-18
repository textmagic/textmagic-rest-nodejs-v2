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
    define(['ApiClient', 'model/Contact', 'model/Country'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Contact'), require('./Country'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.Chat = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.Contact, root.TextmagicClient.Country);
  }
}(this, function(ApiClient, Contact, Country) {
  'use strict';

  /**
   * The Chat model module.
   * @module model/Chat
   * @version 2.0.1067
   */

  /**
   * Constructs a new <code>Chat</code>.
   * @alias module:model/Chat
   * @class
   * @param id {Number} Chat ID.
   * @param originalId {Number} 
   * @param phone {String} Chat partner's phone number.
   * @param contact {module:model/Contact} 
   * @param unsubscribedContactId {Number} If this field has a value, it means that the chat phone number has been unsubscribed from you and this value is an ID of an Unsubscribed contact entity. See [Get all unsubscribed contacts](https://docs.textmagic.com/#operation/getUnsubscribers).
   * @param unread {Number} Total unread incoming messages.
   * @param updatedAt {Date} Time when the last incoming message arrived at this chat.
   * @param status {module:model/Chat.StatusEnum} Chat status:   * **a** - Active;   * **c** - Closed;   * **d** - Deleted. 
   * @param mute {Number} Indicates when the chat is muted.
   * @param lastMessage {String} The last message content of a chat.
   * @param direction {module:model/Chat.DirectionEnum} Last message type: * **ci** - incoming call; * **co** - outgoing call; * **i** - incoming message; * **o** - outgoing message. 
   * @param from {String} If filled, the value will be used as a sender number for all outgoing messages of a chat.
   * @param mutedUntil {Date} Date and time until the chat will be muted.
   * @param timeLeftMute {Number} Time left untill the chat will be unmuted (seconds).
   * @param country {module:model/Country} 
   */
  var exports = function(id, originalId, phone, contact, unsubscribedContactId, unread, updatedAt, status, mute, lastMessage, direction, from, mutedUntil, timeLeftMute, country) {
    this.id = id;
    this.originalId = originalId;
    this.phone = phone;
    this.contact = contact;
    this.unsubscribedContactId = unsubscribedContactId;
    this.unread = unread;
    this.updatedAt = updatedAt;
    this.status = status;
    this.mute = mute;
    this.lastMessage = lastMessage;
    this.direction = direction;
    this.from = from;
    this.mutedUntil = mutedUntil;
    this.timeLeftMute = timeLeftMute;
    this.country = country;
  };

  /**
   * Constructs a <code>Chat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Chat} obj Optional instance to populate.
   * @return {module:model/Chat} The populated <code>Chat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('originalId'))
        obj.originalId = ApiClient.convertToType(data['originalId'], 'Number');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('contact'))
        obj.contact = Contact.constructFromObject(data['contact']);
      if (data.hasOwnProperty('unsubscribedContactId'))
        obj.unsubscribedContactId = ApiClient.convertToType(data['unsubscribedContactId'], 'Number');
      if (data.hasOwnProperty('unread'))
        obj.unread = ApiClient.convertToType(data['unread'], 'Number');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('mute'))
        obj.mute = ApiClient.convertToType(data['mute'], 'Number');
      if (data.hasOwnProperty('lastMessage'))
        obj.lastMessage = ApiClient.convertToType(data['lastMessage'], 'String');
      if (data.hasOwnProperty('direction'))
        obj.direction = ApiClient.convertToType(data['direction'], 'String');
      if (data.hasOwnProperty('from'))
        obj.from = ApiClient.convertToType(data['from'], 'String');
      if (data.hasOwnProperty('mutedUntil'))
        obj.mutedUntil = ApiClient.convertToType(data['mutedUntil'], 'Date');
      if (data.hasOwnProperty('timeLeftMute'))
        obj.timeLeftMute = ApiClient.convertToType(data['timeLeftMute'], 'Number');
      if (data.hasOwnProperty('country'))
        obj.country = Country.constructFromObject(data['country']);
    }
    return obj;
  }

  /**
   * Chat ID.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} originalId
   */
  exports.prototype.originalId = undefined;

  /**
   * Chat partner's phone number.
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * @member {module:model/Contact} contact
   */
  exports.prototype.contact = undefined;

  /**
   * If this field has a value, it means that the chat phone number has been unsubscribed from you and this value is an ID of an Unsubscribed contact entity. See [Get all unsubscribed contacts](https://docs.textmagic.com/#operation/getUnsubscribers).
   * @member {Number} unsubscribedContactId
   */
  exports.prototype.unsubscribedContactId = undefined;

  /**
   * Total unread incoming messages.
   * @member {Number} unread
   */
  exports.prototype.unread = undefined;

  /**
   * Time when the last incoming message arrived at this chat.
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * Chat status:   * **a** - Active;   * **c** - Closed;   * **d** - Deleted. 
   * @member {module:model/Chat.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * Indicates when the chat is muted.
   * @member {Number} mute
   */
  exports.prototype.mute = undefined;

  /**
   * The last message content of a chat.
   * @member {String} lastMessage
   */
  exports.prototype.lastMessage = undefined;

  /**
   * Last message type: * **ci** - incoming call; * **co** - outgoing call; * **i** - incoming message; * **o** - outgoing message. 
   * @member {module:model/Chat.DirectionEnum} direction
   */
  exports.prototype.direction = undefined;

  /**
   * If filled, the value will be used as a sender number for all outgoing messages of a chat.
   * @member {String} from
   */
  exports.prototype.from = undefined;

  /**
   * Date and time until the chat will be muted.
   * @member {Date} mutedUntil
   */
  exports.prototype.mutedUntil = undefined;

  /**
   * Time left untill the chat will be unmuted (seconds).
   * @member {Number} timeLeftMute
   */
  exports.prototype.timeLeftMute = undefined;

  /**
   * @member {module:model/Country} country
   */
  exports.prototype.country = undefined;


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
    a: "a",

    /**
     * value: "c"
     * @const
     */
    c: "c",

    /**
     * value: "d"
     * @const
     */
    d: "d"
  };


  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "ci"
     * @const
     */
    ci: "ci",

    /**
     * value: "co"
     * @const
     */
    co: "co",

    /**
     * value: "i"
     * @const
     */
    i: "i",

    /**
     * value: "o"
     * @const
     */
    o: "o"
  };

  return exports;

}));
