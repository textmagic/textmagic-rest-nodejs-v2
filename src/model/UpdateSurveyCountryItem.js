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
    root.TextmagicClient.UpdateSurveyCountryItem = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateSurveyCountryItem model module.
   * @module model/UpdateSurveyCountryItem
   * @version 2.0.814
   */

  /**
   * Constructs a new <code>UpdateSurveyCountryItem</code>.
   * @alias module:model/UpdateSurveyCountryItem
   * @class
   * @param country {String} The 2-letter ISO country code
   * @param userInboundId {Number} User inbound phone ID
   */
  var exports = function(country, userInboundId) {
    var _this = this;

    _this['country'] = country;
    _this['userInboundId'] = userInboundId;
  };

  /**
   * Constructs a <code>UpdateSurveyCountryItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateSurveyCountryItem} obj Optional instance to populate.
   * @return {module:model/UpdateSurveyCountryItem} The populated <code>UpdateSurveyCountryItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('userInboundId')) {
        obj['userInboundId'] = ApiClient.convertToType(data['userInboundId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The 2-letter ISO country code
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * User inbound phone ID
   * @member {Number} userInboundId
   */
  exports.prototype['userInboundId'] = undefined;



  return exports;
}));


