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
    root.TextmagicClient.SurveyNode = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SurveyNode model module.
   * @module model/SurveyNode
   * @version 2.0.811
   */

  /**
   * Constructs a new <code>SurveyNode</code>.
   * @alias module:model/SurveyNode
   * @class
   * @param id {Number} 
   * @param label {String} 
   * @param body {String} 
   * @param nodeType {String} 
   * @param isEndNode {Boolean} 
   * @param sendDelay {Number} 
   * @param startNodes {Array.<String>} 
   * @param endNodes {Array.<String>} 
   */
  var exports = function(id, label, body, nodeType, isEndNode, sendDelay, startNodes, endNodes) {
    var _this = this;

    _this['id'] = id;
    _this['label'] = label;
    _this['body'] = body;
    _this['nodeType'] = nodeType;
    _this['isEndNode'] = isEndNode;
    _this['sendDelay'] = sendDelay;
    _this['startNodes'] = startNodes;
    _this['endNodes'] = endNodes;
  };

  /**
   * Constructs a <code>SurveyNode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SurveyNode} obj Optional instance to populate.
   * @return {module:model/SurveyNode} The populated <code>SurveyNode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('isEndNode')) {
        obj['isEndNode'] = ApiClient.convertToType(data['isEndNode'], 'Boolean');
      }
      if (data.hasOwnProperty('sendDelay')) {
        obj['sendDelay'] = ApiClient.convertToType(data['sendDelay'], 'Number');
      }
      if (data.hasOwnProperty('startNodes')) {
        obj['startNodes'] = ApiClient.convertToType(data['startNodes'], ['String']);
      }
      if (data.hasOwnProperty('endNodes')) {
        obj['endNodes'] = ApiClient.convertToType(data['endNodes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;
  /**
   * @member {Boolean} isEndNode
   */
  exports.prototype['isEndNode'] = undefined;
  /**
   * @member {Number} sendDelay
   */
  exports.prototype['sendDelay'] = undefined;
  /**
   * @member {Array.<String>} startNodes
   */
  exports.prototype['startNodes'] = undefined;
  /**
   * @member {Array.<String>} endNodes
   */
  exports.prototype['endNodes'] = undefined;



  return exports;
}));


