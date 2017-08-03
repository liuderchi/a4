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

var _d3Shape = require('d3-shape');

var _emptyFunction = require('./utils/emptyFunction');

var _emptyFunction2 = _interopRequireDefault(_emptyFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultValueAccessor = _ramda2.default.identity;
var defaultInnerRadiusAccessor = _ramda2.default.always(0);
var defaultOuterRadiusAccessor = _ramda2.default.prop('outerRadius');
var defaultStartAngleAccessor = _ramda2.default.always(0);
var defaultEndAngleAccessor = _ramda2.default.always(2 * Math.PI);
var defaultPadAngleAccessor = _ramda2.default.always(0);

var enhance = (0, _recompose.compose)(_recompose.pure, (0, _recompose.setPropTypes)({
  getArcProps: _react.PropTypes.func,
  data: _react.PropTypes.array,
  valueAccessor: _react.PropTypes.func,
  innerRadiusAccessor: _react.PropTypes.func,
  outerRadiusAccessor: _react.PropTypes.func,
  startAngleAccessor: _react.PropTypes.func,
  endAngleAccessor: _react.PropTypes.func,
  padAngleAccessor: _react.PropTypes.func,
  sortComparator: _react.PropTypes.func,
  renderLabel: _react.PropTypes.func
}));

var PieChart = function PieChart(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _ref$valueAccessor = _ref.valueAccessor,
      valueAccessor = _ref$valueAccessor === undefined ? defaultValueAccessor : _ref$valueAccessor,
      _ref$innerRadiusAcces = _ref.innerRadiusAccessor,
      innerRadiusAccessor = _ref$innerRadiusAcces === undefined ? defaultInnerRadiusAccessor : _ref$innerRadiusAcces,
      _ref$outerRadiusAcces = _ref.outerRadiusAccessor,
      outerRadiusAccessor = _ref$outerRadiusAcces === undefined ? defaultOuterRadiusAccessor : _ref$outerRadiusAcces,
      _ref$startAngleAccess = _ref.startAngleAccessor,
      startAngleAccessor = _ref$startAngleAccess === undefined ? defaultStartAngleAccessor : _ref$startAngleAccess,
      _ref$endAngleAccessor = _ref.endAngleAccessor,
      endAngleAccessor = _ref$endAngleAccessor === undefined ? defaultEndAngleAccessor : _ref$endAngleAccessor,
      _ref$padAngleAccessor = _ref.padAngleAccessor,
      padAngleAccessor = _ref$padAngleAccessor === undefined ? defaultPadAngleAccessor : _ref$padAngleAccessor,
      _ref$sortComparator = _ref.sortComparator,
      sortComparator = _ref$sortComparator === undefined ? null : _ref$sortComparator,
      _ref$getArcProps = _ref.getArcProps,
      getArcProps = _ref$getArcProps === undefined ? _emptyFunction2.default : _ref$getArcProps,
      renderLabel = _ref.renderLabel,
      otherProps = _objectWithoutProperties(_ref, ['data', 'valueAccessor', 'innerRadiusAccessor', 'outerRadiusAccessor', 'startAngleAccessor', 'endAngleAccessor', 'padAngleAccessor', 'sortComparator', 'getArcProps', 'renderLabel']);

  var pieGen = (0, _d3Shape.pie)().padAngle(padAngleAccessor).startAngle(startAngleAccessor).endAngle(endAngleAccessor).value(valueAccessor).sort(sortComparator);

  var arcGen = (0, _d3Shape.arc)().innerRadius(innerRadiusAccessor).outerRadius(outerRadiusAccessor);

  return _react2.default.createElement(
    'g',
    otherProps,
    pieGen(data).map(function (d, i) {
      return _react2.default.createElement(
        'g',
        { key: i },
        _react2.default.createElement('path', _extends({
          fill: '#EFEFEF',
          d: arcGen(d)
        }, getArcProps(d))),
        _ramda2.default.is(Function, renderLabel) && renderLabel(d, arcGen.centroid(d))
      );
    })
  );
};

exports.default = enhance(PieChart);