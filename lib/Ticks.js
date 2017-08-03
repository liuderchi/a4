'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Line = require('./Line');

var _Line2 = _interopRequireDefault(_Line);

var _translate = require('./utils/translate');

var _emptyFunction = require('./utils/emptyFunction');

var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getLineCoordinate = function getLineCoordinate(axis, start, end) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, axis + '1', start), _defineProperty(_ref, axis + '2', end), _ref;
};

var transformAxis = function transformAxis(axis) {
  return { x: 'y', y: 'x' }[axis];
};

var enhance = (0, _recompose.compose)((0, _recompose.setPropTypes)({
  axis: _react.PropTypes.oneOf(['x', 'y']),
  tickSize: _react.PropTypes.number,
  values: _react.PropTypes.array,
  scale: _react.PropTypes.func,
  getTickProps: _react.PropTypes.func
}), _recompose.pure);

var Ticks = function Ticks(_ref2) {
  var tickSize = _ref2.tickSize,
      _ref2$axis = _ref2.axis,
      axis = _ref2$axis === undefined ? 'x' : _ref2$axis,
      _ref2$values = _ref2.values,
      values = _ref2$values === undefined ? [] : _ref2$values,
      scale = _ref2.scale,
      _ref2$getTickProps = _ref2.getTickProps,
      getTickProps = _ref2$getTickProps === undefined ? _emptyFunction2.default : _ref2$getTickProps,
      otherProps = _objectWithoutProperties(_ref2, ['tickSize', 'axis', 'values', 'scale', 'getTickProps']);

  return _react2.default.createElement(
    'g',
    otherProps,
    values.map(function (value, index) {
      return (0, _react.createElement)(_Line2.default, _extends({
        key: value,
        transform: axis === 'x' ? (0, _translate.translateX)(scale(value)) : (0, _translate.translateY)(scale(value))
      }, getTickProps(value, index), getLineCoordinate(transformAxis(axis), 0, tickSize)));
    })
  );
};

exports.default = enhance(Ticks);