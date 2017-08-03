'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _d3Shape = require('d3-shape');

var _emptyFunction = require('./utils/emptyFunction');

var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var isFunction = function isFunction(fn) {
  return typeof fn === 'function';
};

var defaultXAccessor = function defaultXAccessor(d) {
  return d[0];
};
var defaultYAccessor = function defaultYAccessor(d) {
  return d[1];
};
var defaultDefinedAccessor = function defaultDefinedAccessor() {
  return true;
};
var defaultCurveFactory = _d3Shape.curveLinear;

var enhance = (0, _recompose.compose)(_recompose.pure, (0, _recompose.setPropTypes)({
  getDotProps: _react.PropTypes.func,
  getLineProps: _react.PropTypes.func,
  data: _react.PropTypes.array,
  xAccessor: _react.PropTypes.func,
  yAccessor: _react.PropTypes.func,
  definedAccessor: _react.PropTypes.func,
  curveFactory: _react.PropTypes.func,

  // deprecated
  generator: _react.PropTypes.func
}));

var LineChart = function LineChart(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      generator = _ref.generator,
      _ref$xAccessor = _ref.xAccessor,
      xAccessor = _ref$xAccessor === undefined ? defaultXAccessor : _ref$xAccessor,
      _ref$yAccessor = _ref.yAccessor,
      yAccessor = _ref$yAccessor === undefined ? defaultYAccessor : _ref$yAccessor,
      _ref$definedAccessor = _ref.definedAccessor,
      definedAccessor = _ref$definedAccessor === undefined ? defaultDefinedAccessor : _ref$definedAccessor,
      _ref$curveFactory = _ref.curveFactory,
      curveFactory = _ref$curveFactory === undefined ? defaultCurveFactory : _ref$curveFactory,
      _ref$getLineProps = _ref.getLineProps,
      getLineProps = _ref$getLineProps === undefined ? _emptyFunction2.default : _ref$getLineProps,
      otherProps = _objectWithoutProperties(_ref, ['data', 'generator', 'xAccessor', 'yAccessor', 'definedAccessor', 'curveFactory', 'getLineProps']);

  var gen = isFunction(generator) ? generator : (0, _d3Shape.line)().x(xAccessor).y(yAccessor).defined(definedAccessor).curve(curveFactory);

  return _react2.default.createElement(
    'g',
    otherProps,
    _react2.default.createElement('path', _extends({
      d: gen(data),
      stroke: '#EFEFEF',
      strokeWidth: '2',
      fill: 'transparent'
    }, getLineProps(data)))
  );
};

exports.default = enhance(LineChart);