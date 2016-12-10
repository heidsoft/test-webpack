webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _content = __webpack_require__(1);

	var myModule = _interopRequireWildcard(_content);

	var _user = __webpack_require__(2);

	var _user2 = _interopRequireDefault(_user);

	__webpack_require__(3);

	__webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//多个导出
	console.log(myModule.my);
	console.log(myModule.square(11)); // 121
	console.log(myModule.diag(4, 3)); // 5
	console.log((0, _user2.default)());

	document.write("<h2>" + myModule.my + "</h2>");

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.square = square;
	exports.diag = diag;
	var my = exports.my = "It works from content.js.";
	var sqrt = exports.sqrt = Math.sqrt;

	function square(x) {
	    return x * x;
	}

	function diag(x, y) {
	    return sqrt(square(x) + square(y));
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  console.log("export default.....");
	};

	var _content = __webpack_require__(1);

	var myModule = _interopRequireWildcard(_content);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	console.log(myModule.my); /**
	                           * Created by heidsoft on 2016/12/8.
	                           */

	console.log(myModule.square(100)); // 121
	console.log(myModule.diag(10, 20)); // 5

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);