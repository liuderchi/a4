'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// coordinates is an array of coordinate
// [{x, y}, {x, y} ... ]

var createPath = function createPath() {
  var coordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return coordinates.reduce(function (path, _ref, i) {
    var x = _ref.x,
        y = _ref.y;

    if (i === 0) return 'M' + x + ',' + y;
    return path + 'L' + x + ',' + y;
  }, '');
};

exports.default = createPath;