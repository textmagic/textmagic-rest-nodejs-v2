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
    root.TextmagicClient.BadRequestResponseErrors = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BadRequestResponseErrors model module.
   * @module model/BadRequestResponseErrors
   * @version 2.0.812
   */

  /**
   * Constructs a new <code>BadRequestResponseErrors</code>.
   * If it was a **POST** or **PUT** request (and the **message** returned is &#x60;Validation Failed&#x60;), this field may contain **errors **that describe the errors grouped by the input parameter name. 
   * @alias module:model/BadRequestResponseErrors
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>BadRequestResponseErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BadRequestResponseErrors} obj Optional instance to populate.
   * @return {module:model/BadRequestResponseErrors} The populated <code>BadRequestResponseErrors</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('common')) {
        obj['common'] = ApiClient.convertToType(data['common'], ['String']);
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], Object);
      }
    }
    return obj;
  }

  /**
   * Array of messages with errors related to the entire request. For example, you did not specify either the **text** or the **templateId** when [sending the message](http://docs.textmagictesting.com/#tag/Outbound-Messages). 
   * @member {Array.<String>} common
   */
  exports.prototype['common'] = undefined;
  /**
   * Associative array. The keys are the POST/PUT parameter names and the values are arrays with error messages for these parameters. 
   * @member {Object} fields
   */
  exports.prototype['fields'] = undefined;



  return exports;
}));


