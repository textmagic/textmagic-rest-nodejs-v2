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
    define(['ApiClient', 'model/MessageSession'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageSession'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.BulkSession = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.MessageSession);
  }
}(this, function(ApiClient, MessageSession) {
  'use strict';

  /**
   * The BulkSession model module.
   * @module model/BulkSession
   * @version 2.0.1534
   */

  /**
   * Constructs a new <code>BulkSession</code>.
   * @alias module:model/BulkSession
   * @class
   * @param id {Number} Bulk Session ID.
   * @param status {module:model/BulkSession.StatusEnum} * **n** – bulk session is just created * **w** - work in progress * **f** - failed * **c** - completed with success * **s** - suspended 
   * @param itemsProcessed {Number} Amount of messages already processed.
   * @param itemsTotal {Number} Total amount of messages to be processed.
   * @param createdAt {Date} Creation date and time of a Bulk Session.
   * @param session {module:model/MessageSession} 
   * @param text {String} Message text of a Bulk Session.
   */
  var exports = function(id, status, itemsProcessed, itemsTotal, createdAt, session, text) {
    this.id = id;
    this.status = status;
    this.itemsProcessed = itemsProcessed;
    this.itemsTotal = itemsTotal;
    this.createdAt = createdAt;
    this.session = session;
    this.text = text;
  };

  /**
   * Constructs a <code>BulkSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSession} obj Optional instance to populate.
   * @return {module:model/BulkSession} The populated <code>BulkSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('itemsProcessed'))
        obj.itemsProcessed = ApiClient.convertToType(data['itemsProcessed'], 'Number');
      if (data.hasOwnProperty('itemsTotal'))
        obj.itemsTotal = ApiClient.convertToType(data['itemsTotal'], 'Number');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('session'))
        obj.session = MessageSession.constructFromObject(data['session']);
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
    }
    return obj;
  }

  /**
   * Bulk Session ID.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * * **n** – bulk session is just created * **w** - work in progress * **f** - failed * **c** - completed with success * **s** - suspended 
   * @member {module:model/BulkSession.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * Amount of messages already processed.
   * @member {Number} itemsProcessed
   */
  exports.prototype.itemsProcessed = undefined;

  /**
   * Total amount of messages to be processed.
   * @member {Number} itemsTotal
   */
  exports.prototype.itemsTotal = undefined;

  /**
   * Creation date and time of a Bulk Session.
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * @member {module:model/MessageSession} session
   */
  exports.prototype.session = undefined;

  /**
   * Message text of a Bulk Session.
   * @member {String} text
   */
  exports.prototype.text = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "n"
     * @const
     */
    n: "n",

    /**
     * value: "w"
     * @const
     */
    w: "w",

    /**
     * value: "f"
     * @const
     */
    f: "f",

    /**
     * value: "c"
     * @const
     */
    c: "c",

    /**
     * value: "s"
     * @const
     */
    s: "s"
  };

  return exports;

}));
