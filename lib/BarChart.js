'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _Bar = require('./Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _emptyFunction = require('./utils/emptyFunction');

var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultYBaseAccessor = _ramda2.default.always(0);

var enhance = (0, _recompose.compose)(_recompose.pure, (0, _recompose.setPropTypes)({
  xAccessor: _react.PropTypes.func,
  yAccessor: _react.PropTypes.func,
  yBaseAccessor: _react.PropTypes.func,
  getBarProps: _react.PropTypes.func,
  data: _react.PropTypes.array
}));

var BarChart = function BarChart(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      xAccessor = _ref.xAccessor,
      yAccessor = _ref.yAccessor,
      _ref$yBaseAccessor = _ref.yBaseAccessor,
      yBaseAccessor = _ref$yBaseAccessor === undefined ? defaultYBaseAccessor : _ref$yBaseAccessor,
      _ref$getBarProps = _ref.getBarProps,
      getBarProps = _ref$getBarProps === undefined ? _emptyFunction2.default : _ref$getBarProps,
      otherProps = _objectWithoutProperties(_ref, ['data', 'xAccessor', 'yAccessor', 'yBaseAccessor', 'getBarProps']);

  return _react2.default.createElement(
    'g',
    otherProps,
    data.map(function (datum, index) {
      var x = xAccessor(datum);
      var y = yAccessor(datum);
      var yBase = yBaseAccessor(datum);

      if (_ramda2.default.isNil(x) || _ramda2.default.isNil(y) || _ramda2.default.isNil(yBase)) {
        return null;
      }

      return _react2.default.createElement(_Bar2.default, _extends({
        key: x + ', ' + y,
        x1: x,
        x2: x,
        y1: yBase,
        y2: y
      }, getBarProps(datum, index, data)));
    })
  );
};

exports.default = enhance(BarChart);