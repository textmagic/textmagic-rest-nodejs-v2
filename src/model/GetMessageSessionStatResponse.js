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
    root.TextmagicClient.GetMessageSessionStatResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetMessageSessionStatResponse model module.
   * @module model/GetMessageSessionStatResponse
   * @version 2.0.807
   */

  /**
   * Constructs a new <code>GetMessageSessionStatResponse</code>.
   * @alias module:model/GetMessageSessionStatResponse
   * @class
   * @param failed {Number} Amount of failed messages.
   * @param delivered {Number} Amount of delivered messages.
   * @param accepted {Number} Amount of accepted messages.
   * @param rejected {Number} Amount of rejected messages.
   * @param scheduled {Number} Amount of scheduled messages.
   * @param all {Number} Total amount of messages.
   * @param sent {Number} Amount of sent but not yet delivered messages.
   */
  var exports = function(failed, delivered, accepted, rejected, scheduled, all, sent) {
    var _this = this;

    _this['failed'] = failed;
    _this['delivered'] = delivered;
    _this['accepted'] = accepted;
    _this['rejected'] = rejected;
    _this['scheduled'] = scheduled;
    _this['all'] = all;
    _this['sent'] = sent;
  };

  /**
   * Constructs a <code>GetMessageSessionStatResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMessageSessionStatResponse} obj Optional instance to populate.
   * @return {module:model/GetMessageSessionStatResponse} The populated <code>GetMessageSessionStatResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('failed')) {
        obj['failed'] = ApiClient.convertToType(data['failed'], 'Number');
      }
      if (data.hasOwnProperty('delivered')) {
        obj['delivered'] = ApiClient.convertToType(data['delivered'], 'Number');
      }
      if (data.hasOwnProperty('accepted')) {
        obj['accepted'] = ApiClient.convertToType(data['accepted'], 'Number');
      }
      if (data.hasOwnProperty('rejected')) {
        obj['rejected'] = ApiClient.convertToType(data['rejected'], 'Number');
      }
      if (data.hasOwnProperty('scheduled')) {
        obj['scheduled'] = ApiClient.convertToType(data['scheduled'], 'Number');
      }
      if (data.hasOwnProperty('all')) {
        obj['all'] = ApiClient.convertToType(data['all'], 'Number');
      }
      if (data.hasOwnProperty('sent')) {
        obj['sent'] = ApiClient.convertToType(data['sent'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Amount of failed messages.
   * @member {Number} failed
   */
  exports.prototype['failed'] = undefined;
  /**
   * Amount of delivered messages.
   * @member {Number} delivered
   */
  exports.prototype['delivered'] = undefined;
  /**
   * Amount of accepted messages.
   * @member {Number} accepted
   */
  exports.prototype['accepted'] = undefined;
  /**
   * Amount of rejected messages.
   * @member {Number} rejected
   */
  exports.prototype['rejected'] = undefined;
  /**
   * Amount of scheduled messages.
   * @member {Number} scheduled
   */
  exports.prototype['scheduled'] = undefined;
  /**
   * Total amount of messages.
   * @member {Number} all
   */
  exports.prototype['all'] = undefined;
  /**
   * Amount of sent but not yet delivered messages.
   * @member {Number} sent
   */
  exports.prototype['sent'] = undefined;



  return exports;
}));


