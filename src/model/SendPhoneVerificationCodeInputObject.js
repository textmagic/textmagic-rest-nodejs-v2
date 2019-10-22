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
    root.TextmagicClient.SendPhoneVerificationCodeInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendPhoneVerificationCodeInputObject model module.
   * @module model/SendPhoneVerificationCodeInputObject
   * @version 2.0.658
   */

  /**
   * Constructs a new <code>SendPhoneVerificationCodeInputObject</code>.
   * @alias module:model/SendPhoneVerificationCodeInputObject
   * @class
   * @param phone {String} Use the phone number in international E.164 format. If you need to pass phone numbers in the local format, please use them with the **country** parameter to specify the origin country of the phone number. 
   * @param brand {String} Alphanumeric string with up to 18 characters you can use to personalize the verification text message body, to help users identify your company or application name. For example: “Your TextMagic PIN is …” 
   * @param codeLength {Number} The length of the verification code. The value can be 4 or 6 characters. 
   */
  var exports = function(phone, brand, codeLength) {
    var _this = this;

    _this['phone'] = phone;
    _this['brand'] = brand;
    _this['codeLength'] = codeLength;



  };

  /**
   * Constructs a <code>SendPhoneVerificationCodeInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendPhoneVerificationCodeInputObject} obj Optional instance to populate.
   * @return {module:model/SendPhoneVerificationCodeInputObject} The populated <code>SendPhoneVerificationCodeInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('brand')) {
        obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
      }
      if (data.hasOwnProperty('codeLength')) {
        obj['codeLength'] = ApiClient.convertToType(data['codeLength'], 'Number');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('senderId')) {
        obj['senderId'] = ApiClient.convertToType(data['senderId'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * Use the phone number in international E.164 format. If you need to pass phone numbers in the local format, please use them with the **country** parameter to specify the origin country of the phone number. 
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * Alphanumeric string with up to 18 characters you can use to personalize the verification text message body, to help users identify your company or application name. For example: “Your TextMagic PIN is …” 
   * @member {String} brand
   */
  exports.prototype['brand'] = undefined;
  /**
   * The length of the verification code. The value can be 4 or 6 characters. 
   * @member {Number} codeLength
   */
  exports.prototype['codeLength'] = undefined;
  /**
   * By default, the SMS or text-to-speech (TTS) voice message is generated in the locale that matches the number. For example, the text message or TTS message for a 33\\* number is sent in French. Use this parameter to explicitly control the language, accent, and gender used for the verification request.Can be one of the following: `de-de`, `en-au`, `en-gb`, `en-us`, `en-in`, `es-es`, `es-mx`, `es-us`, `fr-ca`, `fr-fr`, `is-is`, `it-it`, `ja-jp`, `ko-kr`, `nl-nl`, `pl-pl`, `pt-pt`, `pt-br`, `ro-ro`, `ru-ru`, `sv-se`, `tr-tr`, `zh-cn` or `zh-tw`. 
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * One of the available [sender settings](https://my.textmagic.com/online/reply-options/) on your TextMagic account. If specified sender setting type is not allowed for some destinations, a fallback default sender will be used to ensure the message delivery. More info about known restrictions can be found [here](https://support.textmagic.com/article/how-to-understand-sender-setting-restrictions/). 
   * @member {String} senderId
   */
  exports.prototype['senderId'] = undefined;
  /**
   * 2-letter ISO country code for local phone number.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


