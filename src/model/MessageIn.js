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
    root.TextmagicClient.MessageIn = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageIn model module.
   * @module model/MessageIn
   * @version 2.0.813
   */

  /**
   * Constructs a new <code>MessageIn</code>.
   * @alias module:model/MessageIn
   * @class
   * @param id {Number} The ID of the inbound message.
   * @param sender {String} The sender’s phone number.
   * @param receiver {String} The receiver’s phone number (i.e. your dedicated or shared reply number).
   * @param messageTime {Date} The time when the message reached the TextMagic API endpoint.
   * @param text {String} The text from the received message.
   * @param avatar {String} 
   */
  var exports = function(id, sender, receiver, messageTime, text, avatar) {
    var _this = this;

    _this['id'] = id;
    _this['sender'] = sender;
    _this['receiver'] = receiver;
    _this['messageTime'] = messageTime;
    _this['text'] = text;



    _this['avatar'] = avatar;
  };

  /**
   * Constructs a <code>MessageIn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageIn} obj Optional instance to populate.
   * @return {module:model/MessageIn} The populated <code>MessageIn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
      if (data.hasOwnProperty('receiver')) {
        obj['receiver'] = ApiClient.convertToType(data['receiver'], 'String');
      }
      if (data.hasOwnProperty('messageTime')) {
        obj['messageTime'] = ApiClient.convertToType(data['messageTime'], 'Date');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('contactId')) {
        obj['contactId'] = ApiClient.convertToType(data['contactId'], 'Number');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the inbound message.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The sender’s phone number.
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * The receiver’s phone number (i.e. your dedicated or shared reply number).
   * @member {String} receiver
   */
  exports.prototype['receiver'] = undefined;
  /**
   * The time when the message reached the TextMagic API endpoint.
   * @member {Date} messageTime
   */
  exports.prototype['messageTime'] = undefined;
  /**
   * The text from the received message.
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Sender contact ID.
   * @member {Number} contactId
   */
  exports.prototype['contactId'] = undefined;
  /**
   * Sender contact first name.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Sender contact last name.
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;



  return exports;
}));


