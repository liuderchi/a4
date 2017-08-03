'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _emptyFunction = require('./utils/emptyFunction');

var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var enhance = (0, _recompose.compose)(_recompose.pure, (0, _recompose.setPropTypes)({
  generator: _react.PropTypes.func,
  getAreaProps: _react.PropTypes.func,
  data: _react.PropTypes.array
}));

var AreaChart = function AreaChart(_ref) {
  var data = _ref.data,
      generator = _ref.generator,
      _ref$getAreaProps = _ref.getAreaProps,
      getAreaProps = _ref$getAreaProps === undefined ? _emptyFunction2.default : _ref$getAreaProps,
      otherProps = _objectWithoutProperties(_ref, ['data', 'generator', 'getAreaProps']);

  var path = generator(data);

  return _react2.default.createElement(
    'g',
    otherProps,
    _react2.default.createElement('path', _extends({
      d: path,
      fill: '#EFEFEF'
    }, getAreaProps()))
  );
};

exports.default = enhance(AreaChart);