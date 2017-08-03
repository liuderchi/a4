'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Ticks = require('./Ticks');

var _Ticks2 = _interopRequireDefault(_Ticks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var enhance = (0, _recompose.setPropTypes)({
  tickValues: _react.PropTypes.array.isRequired,
  scale: _react.PropTypes.func.isRequired,
  tickSize: _react.PropTypes.number,
  axis: _react.PropTypes.string.isRequired
});

var Axis = function Axis(_ref) {
  var _ref$tickValues = _ref.tickValues,
      tickValues = _ref$tickValues === undefined ? [] : _ref$tickValues,
      scale = _ref.scale,
      _ref$tickSize = _ref.tickSize,
      tickSize = _ref$tickSize === undefined ? 0 : _ref$tickSize,
      children = _ref.children,
      axis = _ref.axis,
      getTickProps = _ref.getTickProps,
      otherProps = _objectWithoutProperties(_ref, ['tickValues', 'scale', 'tickSize', 'children', 'axis', 'getTickProps']);

  return _react2.default.createElement(
    'g',
    otherProps,
    tickSize > 0 && tickValues.length > 0 ? (0, _react.createElement)(_Ticks2.default, {
      axis: axis,
      tickSize: tickSize,
      values: tickValues,
      scale: scale,
      getTickProps: getTickProps
    }) : null,
    _react.Children.map(children, function (child, i) {
      return (0, _react.cloneElement)(child, {
        key: i,
        tickValues: tickValues,
        scale: scale
      });
    })
  );
};

exports.default = enhance(Axis);