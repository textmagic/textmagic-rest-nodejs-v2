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
    root.TextmagicClient.MessagesIcsTextParameters = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MessagesIcsTextParameters model module.
   * @module model/MessagesIcsTextParameters
   * @version 2.0.1484
   */

  /**
   * Constructs a new <code>MessagesIcsTextParameters</code>.
   * @alias module:model/MessagesIcsTextParameters
   * @class
   * @param cost {Number} Cost to check that one number is constant – 0.04 in your account currency.
   * @param parts {Number} Message parts (multiples of 160 characters) count.
   * @param chars {Number} Characters count.
   * @param encoding {module:model/MessagesIcsTextParameters.EncodingEnum} Message charset. Could be: * **ISO-8859-1** – for plaintext SMS; * **UTF-16BE** – for Unicode SMS. 
   * @param countries {Array.<String>} 
   * @param charsetLabel {String} Human-readable message charset label. Could be: *   **ISO-8859-1** for plaintext SMS; *   **UTF-16BE** for Unicode SMS; *   **Voice** for voice services (Text-to-Speech or Voice Broadcast) messages. 
   */
  var exports = function(cost, parts, chars, encoding, countries, charsetLabel) {
    this.cost = cost;
    this.parts = parts;
    this.chars = chars;
    this.encoding = encoding;
    this.countries = countries;
    this.charsetLabel = charsetLabel;
  };

  /**
   * Constructs a <code>MessagesIcsTextParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessagesIcsTextParameters} obj Optional instance to populate.
   * @return {module:model/MessagesIcsTextParameters} The populated <code>MessagesIcsTextParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cost'))
        obj.cost = ApiClient.convertToType(data['cost'], 'Number');
      if (data.hasOwnProperty('parts'))
        obj.parts = ApiClient.convertToType(data['parts'], 'Number');
      if (data.hasOwnProperty('chars'))
        obj.chars = ApiClient.convertToType(data['chars'], 'Number');
      if (data.hasOwnProperty('encoding'))
        obj.encoding = ApiClient.convertToType(data['encoding'], 'String');
      if (data.hasOwnProperty('countries'))
        obj.countries = ApiClient.convertToType(data['countries'], ['String']);
      if (data.hasOwnProperty('charsetLabel'))
        obj.charsetLabel = ApiClient.convertToType(data['charsetLabel'], 'String');
    }
    return obj;
  }

  /**
   * Cost to check that one number is constant – 0.04 in your account currency.
   * @member {Number} cost
   */
  exports.prototype.cost = undefined;

  /**
   * Message parts (multiples of 160 characters) count.
   * @member {Number} parts
   */
  exports.prototype.parts = undefined;

  /**
   * Characters count.
   * @member {Number} chars
   */
  exports.prototype.chars = undefined;

  /**
   * Message charset. Could be: * **ISO-8859-1** – for plaintext SMS; * **UTF-16BE** – for Unicode SMS. 
   * @member {module:model/MessagesIcsTextParameters.EncodingEnum} encoding
   */
  exports.prototype.encoding = undefined;

  /**
   * @member {Array.<String>} countries
   */
  exports.prototype.countries = undefined;

  /**
   * Human-readable message charset label. Could be: *   **ISO-8859-1** for plaintext SMS; *   **UTF-16BE** for Unicode SMS; *   **Voice** for voice services (Text-to-Speech or Voice Broadcast) messages. 
   * @member {String} charsetLabel
   */
  exports.prototype.charsetLabel = undefined;


  /**
   * Allowed values for the <code>encoding</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EncodingEnum = {
    /**
     * value: "ISO-8859-1"
     * @const
     */
    iSO88591: "ISO-8859-1",

    /**
     * value: "UTF-16BE"
     * @const
     */
    uTF16BE: "UTF-16BE"
  };

  return exports;

}));
