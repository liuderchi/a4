'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Axis = require('./Axis');

var _Axis2 = _interopRequireDefault(_Axis);

var _translate = require('./utils/translate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var XAxis = function XAxis(_ref) {
  var _ref$position = _ref.position,
      position = _ref$position === undefined ? 0 : _ref$position,
      otherProps = _objectWithoutProperties(_ref, ['position']);

  return _react2.default.createElement(_Axis2.default, _extends({
    axis: 'x',
    transform: (0, _translate.translateY)(position)
  }, otherProps));
};

exports.default = XAxis;