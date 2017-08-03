'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dragable = require('./Dragable');

var _Dragable2 = _interopRequireDefault(_Dragable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BrushSelection = function BrushSelection(_ref) {
  var onDraging = _ref.onDraging,
      onDragEnd = _ref.onDragEnd,
      otherProps = _objectWithoutProperties(_ref, ['onDraging', 'onDragEnd']);

  return _react2.default.createElement(
    _Dragable2.default,
    {
      onDraging: onDraging,
      onDragEnd: onDragEnd
    },
    _react2.default.createElement('path', otherProps)
  );
};

exports.default = BrushSelection;