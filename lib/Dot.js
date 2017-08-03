'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var enhance = (0, _recompose.compose)((0, _recompose.setPropTypes)({
  x: _react.PropTypes.number,
  y: _react.PropTypes.number,
  r: _react.PropTypes.number,
  color: _react.PropTypes.string
}), _recompose.pure);

var Dot = function Dot(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$r = _ref.r,
      r = _ref$r === undefined ? 3 : _ref$r,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? '#E6BEBC' : _ref$color,
      otherProps = _objectWithoutProperties(_ref, ['x', 'y', 'r', 'color']);

  return _react2.default.createElement('circle', _extends({
    cx: x,
    cy: y,
    r: r,
    stroke: color,
    strokeWidth: '2.5',
    fill: '#FFFFFF'
  }, otherProps));
};

exports.default = enhance(Dot);