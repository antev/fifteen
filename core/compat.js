/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.compat');

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(fn, scope) {
		for(var i = 0, len = this.length; i < len; ++i) {
			fn.call(scope || this, this[i], i, this);
		}
	}
}

if (!Array.prototype.map) {
	Array.prototype.map = function(callback, thisArg) {
		var T, A, k;
		if (this == null) {
			throw new TypeError(" this is null or not defined");
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if ({}.toString.call(callback) != "[object Function]") {
			throw new TypeError(callback + " is not a function");
		}
		if (thisArg) {
			T = thisArg;
		}
		A = new Array(len);
		k = 0;
		while(k < len) {
			var kValue, mappedValue;
			if (k in O) {
				kValue = O[ k ];
				mappedValue = callback.call(T, kValue, k, O);
				A[ k ] = mappedValue;
			}
			k++;
		}
		return A;
	};
}


if (!Array.prototype.reduce) {
	Array.prototype.reduce = function reduce(accumulator){
		if (this===null || this===undefined) throw new TypeError("Object is null or undefined");
		var i = 0, l = this.length >> 0, curr;

		if(typeof accumulator !== "function") // ES5 : "If IsCallable(callbackfn) is false, throw a TypeError exception."
			throw new TypeError("First argument is not callable");

		if(arguments.length < 2) {
			if (l === 0) throw new TypeError("Array length is 0 and no second argument");
			curr = this[0];
			i = 1; // start accumulating at the second element
		}
		else
			curr = arguments[1];

		while (i < l) {
			if(i in this) curr = accumulator.call(undefined, curr, this[i], i, this);
			++i;
		}

		return curr;
	};
}