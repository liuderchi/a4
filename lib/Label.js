'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = exports.propTypes = {
  type: _react.PropTypes.oneOf(['default', 'small']),
  textAnchor: _react.PropTypes.string,
  fill: _react.PropTypes.string,
  color: _react.PropTypes.string // alias for fill
};

var enhance = (0, _recompose.compose)(_recompose.pure, (0, _recompose.setPropTypes)(propTypes));

var Label = function Label(_ref) {
  var _ref$textAnchor = _ref.textAnchor,
      textAnchor = _ref$textAnchor === undefined ? 'middle' : _ref$textAnchor,
      fill = _ref.fill,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'currentColor' : _ref$color,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ['textAnchor', 'fill', 'color', 'children']);

  return _react2.default.createElement(
    'text',
    _extends({
      textAnchor: textAnchor,
      fill: fill || color
    }, otherProps),
    children
  );
};

exports.default = enhance(Label);