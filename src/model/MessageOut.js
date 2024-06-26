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
    root.TextmagicClient.MessageOut = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MessageOut model module.
   * @module model/MessageOut
   * @version 2.0.23575
   */

  /**
   * Constructs a new <code>MessageOut</code>.
   * @alias module:model/MessageOut
   * @class
   * @param id {Number} Message ID.
   * @param text {String} 
   * @param status {module:model/MessageOut.StatusEnum} Delivery status of the message. See [message delivery statuses](https://docs.textmagic.com/#section/Delivery-status-codes) for details. 
   * @param contactId {Number} Recipient contact ID.
   * @param sessionId {Number} Message Session ID of a message.
   * @param messageTime {Date} Sending time.
   * @param avatar {String} 
   * @param charset {String} Message charset. Could be: *   **ISO-8859-1** for plaintext SMS; *   **UTF-16BE** for Unicode SMS. 
   * @param charsetLabel {String} Human-readable message charset label. Could be: *   **ISO-8859-1** for plaintext SMS; *   **UTF-16BE** for Unicode SMS; *   **Voice** for voice services (Text-to-Speech or Voice Broadcast) messages. 
   * @param firstName {String} Contact first name. Could be substituted from your [Contacts](https://docs.textmagic.com/#tag/Contacts) (even if you submitted the phone number instead of the contact ID). 
   * @param lastName {String} Contact last name.
   * @param country {String} The 2-letter ISO country code of the recipient's phone number. 
   * @param partsCount {Number} Message parts (multiples of 160 characters) count.
   */
  var exports = function(id, text, status, contactId, sessionId, messageTime, avatar, charset, charsetLabel, firstName, lastName, country, partsCount) {
    this.id = id;
    this.text = text;
    this.status = status;
    this.contactId = contactId;
    this.sessionId = sessionId;
    this.messageTime = messageTime;
    this.avatar = avatar;
    this.charset = charset;
    this.charsetLabel = charsetLabel;
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.partsCount = partsCount;
  };

  /**
   * Constructs a <code>MessageOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageOut} obj Optional instance to populate.
   * @return {module:model/MessageOut} The populated <code>MessageOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('sender'))
        obj.sender = ApiClient.convertToType(data['sender'], 'String');
      if (data.hasOwnProperty('receiver'))
        obj.receiver = ApiClient.convertToType(data['receiver'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('contactId'))
        obj.contactId = ApiClient.convertToType(data['contactId'], 'Number');
      if (data.hasOwnProperty('sessionId'))
        obj.sessionId = ApiClient.convertToType(data['sessionId'], 'Number');
      if (data.hasOwnProperty('messageTime'))
        obj.messageTime = ApiClient.convertToType(data['messageTime'], 'Date');
      if (data.hasOwnProperty('avatar'))
        obj.avatar = ApiClient.convertToType(data['avatar'], 'String');
      if (data.hasOwnProperty('deleted'))
        obj.deleted = ApiClient.convertToType(data['deleted'], 'Boolean');
      if (data.hasOwnProperty('charset'))
        obj.charset = ApiClient.convertToType(data['charset'], 'String');
      if (data.hasOwnProperty('charsetLabel'))
        obj.charsetLabel = ApiClient.convertToType(data['charsetLabel'], 'String');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('partsCount'))
        obj.partsCount = ApiClient.convertToType(data['partsCount'], 'Number');
      if (data.hasOwnProperty('fromEmail'))
        obj.fromEmail = ApiClient.convertToType(data['fromEmail'], 'String');
      if (data.hasOwnProperty('fromNumber'))
        obj.fromNumber = ApiClient.convertToType(data['fromNumber'], 'String');
    }
    return obj;
  }

  /**
   * Message ID.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Message sender (phone number or alphanumeric Sender ID).
   * @member {String} sender
   */
  exports.prototype.sender = undefined;

  /**
   * Recipient`s phone number.
   * @member {String} receiver
   */
  exports.prototype.receiver = undefined;

  /**
   * @member {String} text
   */
  exports.prototype.text = undefined;

  /**
   * Delivery status of the message. See [message delivery statuses](https://docs.textmagic.com/#section/Delivery-status-codes) for details. 
   * @member {module:model/MessageOut.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * Recipient contact ID.
   * @member {Number} contactId
   */
  exports.prototype.contactId = undefined;

  /**
   * Message Session ID of a message.
   * @member {Number} sessionId
   */
  exports.prototype.sessionId = undefined;

  /**
   * Sending time.
   * @member {Date} messageTime
   */
  exports.prototype.messageTime = undefined;

  /**
   * @member {String} avatar
   */
  exports.prototype.avatar = undefined;

  /**
   * Indicates that the message has been deleted.
   * @member {Boolean} deleted
   */
  exports.prototype.deleted = undefined;

  /**
   * Message charset. Could be: *   **ISO-8859-1** for plaintext SMS; *   **UTF-16BE** for Unicode SMS. 
   * @member {String} charset
   */
  exports.prototype.charset = undefined;

  /**
   * Human-readable message charset label. Could be: *   **ISO-8859-1** for plaintext SMS; *   **UTF-16BE** for Unicode SMS; *   **Voice** for voice services (Text-to-Speech or Voice Broadcast) messages. 
   * @member {String} charsetLabel
   */
  exports.prototype.charsetLabel = undefined;

  /**
   * Contact first name. Could be substituted from your [Contacts](https://docs.textmagic.com/#tag/Contacts) (even if you submitted the phone number instead of the contact ID). 
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * Contact last name.
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  /**
   * The 2-letter ISO country code of the recipient's phone number. 
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * Receipent`s phone number.
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  /**
   * Message price.
   * @member {Number} price
   */
  exports.prototype.price = undefined;

  /**
   * Message parts (multiples of 160 characters) count.
   * @member {Number} partsCount
   */
  exports.prototype.partsCount = undefined;

  /**
   * The user email which this message came from. For Email2SMS and Distribution Lists the messages, it is an original email address - in other cases, it is an account email address.
   * @member {String} fromEmail
   */
  exports.prototype.fromEmail = undefined;

  /**
   * The Phone number used to send the SMS.
   * @member {String} fromNumber
   */
  exports.prototype.fromNumber = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "q"
     * @const
     */
    q: "q",

    /**
     * value: "s"
     * @const
     */
    s: "s",

    /**
     * value: "e"
     * @const
     */
    e: "e",

    /**
     * value: "r"
     * @const
     */
    r: "r",

    /**
     * value: "a"
     * @const
     */
    a: "a",

    /**
     * value: "d"
     * @const
     */
    d: "d",

    /**
     * value: "b"
     * @const
     */
    b: "b",

    /**
     * value: "f"
     * @const
     */
    f: "f",

    /**
     * value: "u"
     * @const
     */
    u: "u",

    /**
     * value: "j"
     * @const
     */
    j: "j",

    /**
     * value: "i"
     * @const
     */
    i: "i",

    /**
     * value: "p"
     * @const
     */
    p: "p",

    /**
     * value: "h"
     * @const
     */
    h: "h"
  };

  return exports;

}));
