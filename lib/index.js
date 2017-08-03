'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YAxisLabels = exports.YAxis = exports.XAxisLabels = exports.XAxis = exports.Label = exports.Brush = exports.AreaChart = exports.BarChart = exports.Bar = exports.DotChart = exports.LineChart = undefined;

var _translate = require('./utils/translate');

Object.keys(_translate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _translate[key];
    }
  });
});

var _LineChart2 = require('./LineChart');

var _LineChart3 = _interopRequireDefault(_LineChart2);

var _DotChart2 = require('./DotChart');

var _DotChart3 = _interopRequireDefault(_DotChart2);

var _Bar2 = require('./Bar');

var _Bar3 = _interopRequireDefault(_Bar2);

var _BarChart2 = require('./BarChart');

var _BarChart3 = _interopRequireDefault(_BarChart2);

var _AreaChart2 = require('./AreaChart');

var _AreaChart3 = _interopRequireDefault(_AreaChart2);

var _Brush2 = require('./Brush');

var _Brush3 = _interopRequireDefault(_Brush2);

var _Label2 = require('./Label');

var _Label3 = _interopRequireDefault(_Label2);

var _XAxis2 = require('./XAxis');

var _XAxis3 = _interopRequireDefault(_XAxis2);

var _XAxisLabels2 = require('./XAxisLabels');

var _XAxisLabels3 = _interopRequireDefault(_XAxisLabels2);

var _YAxis2 = require('./YAxis');

var _YAxis3 = _interopRequireDefault(_YAxis2);

var _YAxisLabels2 = require('./YAxisLabels');

var _YAxisLabels3 = _interopRequireDefault(_YAxisLabels2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LineChart = _LineChart3.default;
exports.DotChart = _DotChart3.default;
exports.Bar = _Bar3.default;
exports.BarChart = _BarChart3.default;
exports.AreaChart = _AreaChart3.default;
exports.Brush = _Brush3.default;
exports.Label = _Label3.default;
exports.XAxis = _XAxis3.default;
exports.XAxisLabels = _XAxisLabels3.default;
exports.YAxis = _YAxis3.default;
exports.YAxisLabels = _YAxisLabels3.default;