"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*
 * 
 *
 *
 *
 */

var producer = function producer() {
	var x = 0;
	return function () {
		return new Promise(function (res, rej) {
			setTimeout(function () {
				return res(x++);
			}, Math.random() * 1000);
		});
	};
};

_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	var p, axs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, ax;

	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					p = producer();
					axs = Array(100).fill(0).map(p);
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 5;
					_iterator = axs[Symbol.iterator]();

				case 7:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 17;
						break;
					}

					ax = _step.value;
					_context.t0 = console;
					_context.next = 12;
					return ax;

				case 12:
					_context.t1 = _context.sent;

					_context.t0.log.call(_context.t0, _context.t1);

				case 14:
					_iteratorNormalCompletion = true;
					_context.next = 7;
					break;

				case 17:
					_context.next = 23;
					break;

				case 19:
					_context.prev = 19;
					_context.t2 = _context["catch"](5);
					_didIteratorError = true;
					_iteratorError = _context.t2;

				case 23:
					_context.prev = 23;
					_context.prev = 24;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 26:
					_context.prev = 26;

					if (!_didIteratorError) {
						_context.next = 29;
						break;
					}

					throw _iteratorError;

				case 29:
					return _context.finish(26);

				case 30:
					return _context.finish(23);

				case 31:
				case "end":
					return _context.stop();
			}
		}
	}, _callee, undefined, [[5, 19, 23, 31], [24,, 26, 30]]);
}))();