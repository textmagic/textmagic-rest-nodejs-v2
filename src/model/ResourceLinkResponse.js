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
    root.TextmagicClient.ResourceLinkResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ResourceLinkResponse model module.
   * @module model/ResourceLinkResponse
   * @version 2.0.23575
   */

  /**
   * Constructs a new <code>ResourceLinkResponse</code>.
   * Response contains paginated list of data items.
   * @alias module:model/ResourceLinkResponse
   * @class
   * @param id {Number} Resource ID.
   * @param href {String} A link to this resource. If you want to fetch it, just **GET** this address.
   */
  var exports = function(id, href) {
    this.id = id;
    this.href = href;
  };

  /**
   * Constructs a <code>ResourceLinkResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceLinkResponse} obj Optional instance to populate.
   * @return {module:model/ResourceLinkResponse} The populated <code>ResourceLinkResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('href'))
        obj.href = ApiClient.convertToType(data['href'], 'String');
    }
    return obj;
  }

  /**
   * Resource ID.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * A link to this resource. If you want to fetch it, just **GET** this address.
   * @member {String} href
   */
  exports.prototype.href = undefined;

  return exports;

}));
