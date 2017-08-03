'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _createPath = require('./utils/createPath');

var _createPath2 = _interopRequireDefault(_createPath);

var _translate = require('./utils/translate');

var _Dragable = require('./Dragable');

var _Dragable2 = _interopRequireDefault(_Dragable);

var _BrushSelection = require('./BrushSelection');

var _BrushSelection2 = _interopRequireDefault(_BrushSelection);

var _emptyFunction = require('./utils/emptyFunction');

var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var max = Math.max,
    min = Math.min;


var styles = {
  cursor: 'crosshair'
};

var createPathFromArea = function createPathFromArea(_ref) {
  var x0 = _ref.x0,
      y0 = _ref.y0,
      x1 = _ref.x1,
      y1 = _ref.y1;
  return (0, _createPath2.default)([[x0, y0], [x0, y1], [x1, y1], [x1, y0], [x0, y0]]);
};

var transformAreaToDelta = function transformAreaToDelta(_ref2) {
  var x0 = _ref2.x0,
      y0 = _ref2.y0,
      x1 = _ref2.x1,
      y1 = _ref2.y1;
  return {
    dx: x1 - x0,
    dy: y1 - y0
  };
};

var Brush = function (_React$Component) {
  _inherits(Brush, _React$Component);

  function Brush() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Brush);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Brush.__proto__ || Object.getPrototypeOf(Brush)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      selection: null,
      delta: null
    }, _this.overlay = null, _this.clampSelectionByBoundaries = function (_ref4) {
      var x0 = _ref4.x0,
          y0 = _ref4.y0,
          x1 = _ref4.x1,
          y1 = _ref4.y1;

      var _this$overlay$getBoun = _this.overlay.getBoundingClientRect(),
          top = _this$overlay$getBoun.top,
          bottom = _this$overlay$getBoun.bottom,
          left = _this$overlay$getBoun.left,
          right = _this$overlay$getBoun.right;

      return {
        x0: x0 - left,
        y0: y0 - top,
        x1: _ramda2.default.clamp(left, right, x1) - left,
        y1: _ramda2.default.clamp(top, bottom, y1) - top
      };
    }, _this.clampDeltaByBoundaries = function (_ref5) {
      var dx = _ref5.dx,
          dy = _ref5.dy;
      var _this$state$selection = _this.state.selection;
      _this$state$selection = _this$state$selection === undefined ? {} : _this$state$selection;
      var x0 = _this$state$selection.x0,
          x1 = _this$state$selection.x1,
          y0 = _this$state$selection.y0,
          y1 = _this$state$selection.y1;

      var _this$overlay$getBoun2 = _this.overlay.getBoundingClientRect(),
          width = _this$overlay$getBoun2.width,
          height = _this$overlay$getBoun2.height;

      return {
        dx: _ramda2.default.clamp(-min(x0, x1), width - max(x0, x1))(dx),
        dy: _ramda2.default.clamp(-min(y0, y1), height - max(y0, y1))(dy)
      };
    }, _this.onBrushStart = function (dragArea) {
      return _this.setState({
        isBrushing: true,
        selection: null
      }, function () {
        return _this.props.onBrushStart(dragArea);
      });
    }, _this.onBrushing = function (dragArea) {
      return _this.setState({
        selection: _this.clampSelectionByBoundaries(dragArea)
      }, function () {
        return _this.props.onBrushing(dragArea);
      });
    }, _this.onBrushEnd = function (dragArea) {
      return _this.setState({
        isBrushing: false,
        selection: _this.clampSelectionByBoundaries(dragArea)
      }, function () {
        return _this.props.onBrushEnd(dragArea);
      });
    }, _this.onSelectionDraging = _ramda2.default.pipe(transformAreaToDelta, _this.clampDeltaByBoundaries, function (_ref6) {
      var dx = _ref6.dx,
          dy = _ref6.dy;

      _this.setState({
        delta: { dx: dx, dy: dy }
      });
    }), _this.onSelectionDragEnd = function () {
      var _this$state = _this.state,
          _this$state$delta = _this$state.delta,
          dx = _this$state$delta.dx,
          dy = _this$state$delta.dy,
          _this$state$selection2 = _this$state.selection,
          x0 = _this$state$selection2.x0,
          x1 = _this$state$selection2.x1,
          y0 = _this$state$selection2.y0,
          y1 = _this$state$selection2.y1;


      var newArea = {
        x0: x0 + dx,
        x1: x1 + dx,
        y0: y0 + dy,
        y1: y1 + dy
      };

      _this.setState({
        delta: null,
        selection: newArea
      }, function () {
        return _this.props.onBrushEnd(newArea);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Brush, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          width = _props.width,
          height = _props.height,
          _props$fill = _props.fill,
          fill = _props$fill === undefined ? 'rgba(0, 0, 0, 0.1)' : _props$fill;
      var _state = this.state,
          selection = _state.selection,
          delta = _state.delta,
          isBrushing = _state.isBrushing;


      return _react2.default.createElement(
        _Dragable2.default,
        {
          onDragStart: this.onBrushStart,
          onDraging: this.onBrushing,
          onDragEnd: this.onBrushEnd
        },
        _react2.default.createElement('rect', {
          opacity: '0',
          ref: function ref(_ref7) {
            _this2.overlay = _ref7;
          },
          width: width,
          height: height,
          style: styles
        }),
        selection && _react2.default.createElement(_BrushSelection2.default, {
          d: createPathFromArea(selection),
          transform: delta ? (0, _translate.translate)(delta.dx, delta.dy) : undefined,
          fill: fill,
          cursor: 'move',
          pointerEvents: isBrushing ? 'none' : 'all',
          onDraging: this.onSelectionDraging,
          onDragEnd: this.onSelectionDragEnd
        })
      );
    }
  }]);

  return Brush;
}(_react2.default.Component);

Brush.defaultProps = {
  onBrushStart: _emptyFunction2.default,
  onBrushing: _emptyFunction2.default,
  onBrushEnd: _emptyFunction2.default
};
exports.default = Brush;