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
    define(['ApiClient', 'model/MessageSession', 'model/MessagesIcsParameters', 'model/MessagesIcsTextParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageSession'), require('./MessagesIcsParameters'), require('./MessagesIcsTextParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.MessagesIcs = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.MessageSession, root.TextmagicClient.MessagesIcsParameters, root.TextmagicClient.MessagesIcsTextParameters);
  }
}(this, function(ApiClient, MessageSession, MessagesIcsParameters, MessagesIcsTextParameters) {
  'use strict';

  /**
   * The MessagesIcs model module.
   * @module model/MessagesIcs
   * @version 2.0.1067
   */

  /**
   * Constructs a new <code>MessagesIcs</code>.
   * @alias module:model/MessagesIcs
   * @class
   * @param id {Number} Schedule ID.
   * @param nextSend {Date} The next send date in [ISO 8601](https://en.wikipedia.org/?title=ISO_8601) format. 
   * @param rrule {String} [iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string. 
   * @param session {module:model/MessageSession} 
   * @param lastSent {Date} The date and time when the last message was sent.
   * @param contactName {String} Aggregated contact information. If the message was scheduled to be sent to a single contact, a full name will be returned here. Otherwise, a total amount of contacts will be returned.
   * @param parameters {module:model/MessagesIcsParameters} 
   * @param type {module:model/MessagesIcs.TypeEnum} 
   * @param summary {String} A human-readable summary of the sending schedule.
   * @param textParameters {module:model/MessagesIcsTextParameters} 
   * @param firstOccurrence {Date} First occurence date.
   * @param lastOccurrence {Date} Last occurence date (could be `null` if the schedule is endless).
   * @param recipientsCount {Number} Amount of actual recipients.
   * @param timezone {String} User-friendly timezone name (with spaces replaced by underscores).
   * @param completed {Boolean} Indicates that scheduling has been completed.
   * @param avatar {String} A relative link to the contact avatar.
   * @param createdAt {Date} Scheduling creation time.
   */
  var exports = function(id, nextSend, rrule, session, lastSent, contactName, parameters, type, summary, textParameters, firstOccurrence, lastOccurrence, recipientsCount, timezone, completed, avatar, createdAt) {
    this.id = id;
    this.nextSend = nextSend;
    this.rrule = rrule;
    this.session = session;
    this.lastSent = lastSent;
    this.contactName = contactName;
    this.parameters = parameters;
    this.type = type;
    this.summary = summary;
    this.textParameters = textParameters;
    this.firstOccurrence = firstOccurrence;
    this.lastOccurrence = lastOccurrence;
    this.recipientsCount = recipientsCount;
    this.timezone = timezone;
    this.completed = completed;
    this.avatar = avatar;
    this.createdAt = createdAt;
  };

  /**
   * Constructs a <code>MessagesIcs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessagesIcs} obj Optional instance to populate.
   * @return {module:model/MessagesIcs} The populated <code>MessagesIcs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('nextSend'))
        obj.nextSend = ApiClient.convertToType(data['nextSend'], 'Date');
      if (data.hasOwnProperty('rrule'))
        obj.rrule = ApiClient.convertToType(data['rrule'], 'String');
      if (data.hasOwnProperty('session'))
        obj.session = MessageSession.constructFromObject(data['session']);
      if (data.hasOwnProperty('lastSent'))
        obj.lastSent = ApiClient.convertToType(data['lastSent'], 'Date');
      if (data.hasOwnProperty('contactName'))
        obj.contactName = ApiClient.convertToType(data['contactName'], 'String');
      if (data.hasOwnProperty('parameters'))
        obj.parameters = MessagesIcsParameters.constructFromObject(data['parameters']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('summary'))
        obj.summary = ApiClient.convertToType(data['summary'], 'String');
      if (data.hasOwnProperty('textParameters'))
        obj.textParameters = MessagesIcsTextParameters.constructFromObject(data['textParameters']);
      if (data.hasOwnProperty('firstOccurrence'))
        obj.firstOccurrence = ApiClient.convertToType(data['firstOccurrence'], 'Date');
      if (data.hasOwnProperty('lastOccurrence'))
        obj.lastOccurrence = ApiClient.convertToType(data['lastOccurrence'], 'Date');
      if (data.hasOwnProperty('recipientsCount'))
        obj.recipientsCount = ApiClient.convertToType(data['recipientsCount'], 'Number');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
      if (data.hasOwnProperty('completed'))
        obj.completed = ApiClient.convertToType(data['completed'], 'Boolean');
      if (data.hasOwnProperty('avatar'))
        obj.avatar = ApiClient.convertToType(data['avatar'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
    }
    return obj;
  }

  /**
   * Schedule ID.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * The next send date in [ISO 8601](https://en.wikipedia.org/?title=ISO_8601) format. 
   * @member {Date} nextSend
   */
  exports.prototype.nextSend = undefined;

  /**
   * [iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string. 
   * @member {String} rrule
   */
  exports.prototype.rrule = undefined;

  /**
   * @member {module:model/MessageSession} session
   */
  exports.prototype.session = undefined;

  /**
   * The date and time when the last message was sent.
   * @member {Date} lastSent
   */
  exports.prototype.lastSent = undefined;

  /**
   * Aggregated contact information. If the message was scheduled to be sent to a single contact, a full name will be returned here. Otherwise, a total amount of contacts will be returned.
   * @member {String} contactName
   */
  exports.prototype.contactName = undefined;

  /**
   * @member {module:model/MessagesIcsParameters} parameters
   */
  exports.prototype.parameters = undefined;

  /**
   * @member {module:model/MessagesIcs.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * A human-readable summary of the sending schedule.
   * @member {String} summary
   */
  exports.prototype.summary = undefined;

  /**
   * @member {module:model/MessagesIcsTextParameters} textParameters
   */
  exports.prototype.textParameters = undefined;

  /**
   * First occurence date.
   * @member {Date} firstOccurrence
   */
  exports.prototype.firstOccurrence = undefined;

  /**
   * Last occurence date (could be `null` if the schedule is endless).
   * @member {Date} lastOccurrence
   */
  exports.prototype.lastOccurrence = undefined;

  /**
   * Amount of actual recipients.
   * @member {Number} recipientsCount
   */
  exports.prototype.recipientsCount = undefined;

  /**
   * User-friendly timezone name (with spaces replaced by underscores).
   * @member {String} timezone
   */
  exports.prototype.timezone = undefined;

  /**
   * Indicates that scheduling has been completed.
   * @member {Boolean} completed
   */
  exports.prototype.completed = undefined;

  /**
   * A relative link to the contact avatar.
   * @member {String} avatar
   */
  exports.prototype.avatar = undefined;

  /**
   * Scheduling creation time.
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "Once"
     * @const
     */
    once: "Once",

    /**
     * value: "Hourly"
     * @const
     */
    hourly: "Hourly",

    /**
     * value: "Daily"
     * @const
     */
    daily: "Daily",

    /**
     * value: "Weekly"
     * @const
     */
    weekly: "Weekly",

    /**
     * value: "Monthly"
     * @const
     */
    monthly: "Monthly",

    /**
     * value: "Yearly"
     * @const
     */
    yearly: "Yearly"
  };

  return exports;

}));
