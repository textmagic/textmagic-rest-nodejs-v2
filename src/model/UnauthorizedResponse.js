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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.UnauthorizedResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UnauthorizedResponse model module.
   * @module model/UnauthorizedResponse
   * @version 2.0.1588
   */

  /**
   * Constructs a new <code>UnauthorizedResponse</code>.
   * Returned when request has been denied in reason of access problems.
   * @alias module:model/UnauthorizedResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UnauthorizedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnauthorizedResponse} obj Optional instance to populate.
   * @return {module:model/UnauthorizedResponse} The populated <code>UnauthorizedResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
    }
    return obj;
  }

  /**
   * Error code. Meanings of error codes are similar to [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
   * @member {Number} code
   */
  exports.prototype.code = undefined;

  /**
   * Brief error message. You could display this message to your user or save it in a log.
   * @member {String} message
   */
  exports.prototype.message = undefined;

  return exports;

}));
