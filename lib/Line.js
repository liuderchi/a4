'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Line = function Line(_ref) {
  var _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? '#EFEFEF' : _ref$stroke,
      otherProps = _objectWithoutProperties(_ref, ['strokeWidth', 'stroke']);

  return _react2.default.createElement('line', _extends({
    strokeWidth: strokeWidth,
    stroke: stroke
  }, otherProps));
};

exports.default = (0, _pure2.default)(Line);