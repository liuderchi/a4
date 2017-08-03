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

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _emptyFunction = require('./utils/emptyFunction');

var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var enhance = (0, _recompose.compose)((0, _recompose.setPropTypes)(_extends({}, _Label.propTypes, {
  axis: _react.PropTypes.oneOf(['x', 'y']).isRequired,
  tickValues: _react.PropTypes.array.isRequired,
  scale: _react.PropTypes.func.isRequired,
  getLabelProps: _react.PropTypes.func,
  getLabelValue: _react.PropTypes.func,
  renderLabel: _react.PropTypes.func
})), _recompose.pure);

var AxisLabels = function AxisLabels(_ref) {
  var axis = _ref.axis,
      tickValues = _ref.tickValues,
      _ref$getLabelProps = _ref.getLabelProps,
      getLabelProps = _ref$getLabelProps === undefined ? _emptyFunction2.default : _ref$getLabelProps,
      getLabelValue = _ref.getLabelValue,
      scale = _ref.scale,
      type = _ref.type,
      textAnchor = _ref.textAnchor,
      renderLabel = _ref.renderLabel,
      otherProps = _objectWithoutProperties(_ref, ['axis', 'tickValues', 'getLabelProps', 'getLabelValue', 'scale', 'type', 'textAnchor', 'renderLabel']);

  return _react2.default.createElement(
    'g',
    otherProps,
    typeof renderLabel === 'function' ? tickValues.map(renderLabel) : tickValues.map(function (value, i) {
      var label = getLabelValue ? getLabelValue(value, i) : value;

      if (_ramda2.default.isNil(label)) {
        return null;
      }

      return _react2.default.createElement(
        _Label2.default,
        _extends({
          key: value,
          type: type,
          textAnchor: textAnchor,
          x: axis === 'x' ? scale(value) : 0,
          y: axis === 'y' ? scale(value) : 0
        }, getLabelProps(value, i, tickValues)),
        label
      );
    })
  );
};

exports.default = enhance(AxisLabels);