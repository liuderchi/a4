'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _recompose = require('recompose');

var _emptyFunction = require('./utils/emptyFunction');

var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

var _Dot = require('./Dot');

var _Dot2 = _interopRequireDefault(_Dot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultDefinedAccessor = _ramda2.default.always(true);

var enhance = (0, _recompose.compose)(_recompose.pure, (0, _recompose.setPropTypes)({
  getDotProps: _react.PropTypes.func,
  data: _react.PropTypes.array,
  xAccessor: _react.PropTypes.func.isRequired,
  yAccessor: _react.PropTypes.func.isRequired
}));

var DotChart = function DotChart(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      xAccessor = _ref.xAccessor,
      yAccessor = _ref.yAccessor,
      _ref$definedAccessor = _ref.definedAccessor,
      definedAccessor = _ref$definedAccessor === undefined ? defaultDefinedAccessor : _ref$definedAccessor,
      _ref$getDotProps = _ref.getDotProps,
      getDotProps = _ref$getDotProps === undefined ? _emptyFunction2.default : _ref$getDotProps,
      otherProps = _objectWithoutProperties(_ref, ['data', 'xAccessor', 'yAccessor', 'definedAccessor', 'getDotProps']);

  var dots = _ramda2.default.compose(_ramda2.default.map(function () {
    var x = xAccessor.apply(undefined, arguments);
    var y = yAccessor.apply(undefined, arguments);

    return _react2.default.createElement(_Dot2.default, _extends({
      key: x + ', ' + y,
      x: x,
      y: y,
      r: 3,
      color: '#EFEFEF'
    }, getDotProps.apply(undefined, arguments)));
  }), _ramda2.default.filter(definedAccessor))(data);

  return _react2.default.createElement(
    'g',
    otherProps,
    dots
  );
};

exports.default = enhance(DotChart);