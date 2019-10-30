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
    define(['ApiClient', 'model/DoAuthResponseMinVersions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DoAuthResponseMinVersions'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.DoAuthResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.DoAuthResponseMinVersions);
  }
}(this, function(ApiClient, DoAuthResponseMinVersions) {
  'use strict';




  /**
   * The DoAuthResponse model module.
   * @module model/DoAuthResponse
   * @version 2.0.834
   */

  /**
   * Constructs a new <code>DoAuthResponse</code>.
   * @alias module:model/DoAuthResponse
   * @class
   * @param username {String} 
   * @param token {String} 
   * @param expires {Date} 
   * @param minVersions {module:model/DoAuthResponseMinVersions} 
   * @param disallowedRules {Array.<String>} 
   */
  var exports = function(username, token, expires, minVersions, disallowedRules) {
    var _this = this;

    _this['username'] = username;
    _this['token'] = token;
    _this['expires'] = expires;
    _this['minVersions'] = minVersions;
    _this['disallowedRules'] = disallowedRules;
  };

  /**
   * Constructs a <code>DoAuthResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DoAuthResponse} obj Optional instance to populate.
   * @return {module:model/DoAuthResponse} The populated <code>DoAuthResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
      }
      if (data.hasOwnProperty('minVersions')) {
        obj['minVersions'] = DoAuthResponseMinVersions.constructFromObject(data['minVersions']);
      }
      if (data.hasOwnProperty('disallowedRules')) {
        obj['disallowedRules'] = ApiClient.convertToType(data['disallowedRules'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * @member {Date} expires
   */
  exports.prototype['expires'] = undefined;
  /**
   * @member {module:model/DoAuthResponseMinVersions} minVersions
   */
  exports.prototype['minVersions'] = undefined;
  /**
   * @member {Array.<String>} disallowedRules
   */
  exports.prototype['disallowedRules'] = undefined;



  return exports;
}));


