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
    root.TextmagicClient.MessageTemplate = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageTemplate model module.
   * @module model/MessageTemplate
   * @version 2.0.810
   */

  /**
   * Constructs a new <code>MessageTemplate</code>.
   * @alias module:model/MessageTemplate
   * @class
   * @param id {Number} Template ID.
   * @param name {String} Template name.
   * @param content {String} Template text. May contain tags inside braces. See the [Custom fields list](http://docs.textmagictesting.com/#section/Custom-fields-list-(Merge-tags)).
   * @param lastModified {Date} Time when the template was last modified.
   */
  var exports = function(id, name, content, lastModified) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['content'] = content;
    _this['lastModified'] = lastModified;
  };

  /**
   * Constructs a <code>MessageTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageTemplate} obj Optional instance to populate.
   * @return {module:model/MessageTemplate} The populated <code>MessageTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Template ID.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Template name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Template text. May contain tags inside braces. See the [Custom fields list](http://docs.textmagictesting.com/#section/Custom-fields-list-(Merge-tags)).
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * Time when the template was last modified.
   * @member {Date} lastModified
   */
  exports.prototype['lastModified'] = undefined;



  return exports;
}));


