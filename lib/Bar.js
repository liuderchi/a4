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

var enhance = (0, _recompose.compose)(_recompose.pure, (0, _recompose.setPropTypes)({
  strokeWidth: _react.PropTypes.number,
  width: _react.PropTypes.number, // alias for strokeWidth
  stroke: _react.PropTypes.string,
  color: _react.PropTypes.string, // alias for stroke
  x1: _react.PropTypes.number,
  x2: _react.PropTypes.number,
  y1: _react.PropTypes.number,
  y2: _react.PropTypes.number
}));

var Bar = function Bar(_ref) {
  var x1 = _ref.x1,
      x2 = _ref.x2,
      y1 = _ref.y1,
      y2 = _ref.y2,
      strokeWidth = _ref.strokeWidth,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 10 : _ref$width,
      stroke = _ref.stroke,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? '#EFEFEF' : _ref$color,
      otherProps = _objectWithoutProperties(_ref, ['x1', 'x2', 'y1', 'y2', 'strokeWidth', 'width', 'stroke', 'color']);

  return _react2.default.createElement('line', _extends({
    x1: x1,
    x2: x2,
    y1: y1,
    y2: y2,
    strokeWidth: strokeWidth || width,
    stroke: stroke || color
  }, otherProps));
};

exports.default = enhance(Bar);