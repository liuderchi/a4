'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _emptyFunction = require('./utils/emptyFunction');

var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dragable = function (_React$Component) {
  _inherits(Dragable, _React$Component);

  function Dragable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dragable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dragable.__proto__ || Object.getPrototypeOf(Dragable)).call.apply(_ref, [this].concat(args))), _this), _this.isDraging = false, _this.dragStartPosition = {}, _this.onMouseDown = function (e) {
      e.stopPropagation();

      _this.isDraging = true;
      _this.dragStartPosition = {
        x0: e.clientX,
        y0: e.clientY
      };

      _this.props.onDragStart(_this.dragStartPosition);

      window.addEventListener('mouseup', _this.onMouseUp);
      window.addEventListener('mousemove', _this.onMouseMove);
    }, _this.onMouseUp = function (e) {
      e.stopPropagation();

      _this.props.onDragEnd(_extends({}, _this.dragStartPosition, {
        x1: e.clientX,
        y1: e.clientY
      }));

      _this.isDraging = false;
      _this.dragStartPosition = {};

      window.removeEventListener('mouseup', _this.onMouseUp);
      window.removeEventListener('mousemove', _this.onMouseMove);
    }, _this.onMouseMove = function (e) {
      e.stopPropagation();

      if (!_this.isDraging) return;

      _this.props.onDraging(_extends({}, _this.dragStartPosition, {
        x1: e.clientX,
        y1: e.clientY
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dragable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.DOM = (0, _reactDom.findDOMNode)(this);
      this.DOM.addEventListener('mousedown', this.onMouseDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.DOM.removeEventListener('mousedown', this.onMouseDown);
      window.removeEventListener('mouseup', this.onMouseUp);
      window.removeEventListener('mousemove', this.onMouseMove);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'g',
        null,
        this.props.children
      );
    }
  }]);

  return Dragable;
}(_react2.default.Component);

Dragable.defaultProps = {
  onDragStart: _emptyFunction2.default,
  onDraging: _emptyFunction2.default,
  onDragEnd: _emptyFunction2.default
};
exports.default = Dragable;