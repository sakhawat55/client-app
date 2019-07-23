'use strict';

const path = require('path');

const _root = path.resolve('.');
const root_2 = path.resolve('..');

function root2(args) {
  args = Array.prototype.slice.call(arguments, 0);

  return path.join.apply(
    path,
    [
      root_2
    ].concat(args)
  );
}
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);

  return path.join.apply(
    path,
    [
      _root
    ].concat(args)
  );
}

exports.root = root;
exports.root2 = root2;
