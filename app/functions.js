if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        var result = fn(arr[0],arr[1],arr[2])
        return result;
    },

    speak : function(fn, obj) {
        greeting = obj.greeting;
        name = obj.name;
        var result = fn();
        return result;
    },

    functionFunction : function(str) {
        return function(param){
            return str + ", " + param;
        }
    },

    makeClosures : function(arr, fn) {
        var funcs = [];

        for (var i = 0; i < arr.length; i++) {
            funcs[i] = (function () {
                var val = arr[i];
                var f = fn;
                return function(){
                    return f(val)
                };
            }
            )();
        }
        return funcs;
    },

    partial : function(fn, str1, str2) {

        return (function(){
            return function(sep) {
                return fn(str1, str2, sep);
            };

        })();

    },

    useArguments : function() {
        var result = 0;
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    },

    callIt : function(fn) {
        var args = [];
         for (var i = 0; i < arguments.length - 1; i++) {
             args[i] = arguments[i + 1];
         }
        return fn.apply(this,args);
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1)
        return function () {
            var remainingArgs = Array.prototype.slice.call(arguments)
            return fn.apply(null, args.concat(remainingArgs))
        }
    },

    curryIt : function(fn) {
        var initial_args = [].slice.apply(arguments, [1]);
        var func_args_length = fn.length;

        function curried(args) {
            if (args.length >= func_args_length) {
                return fn.apply(null, args);
            }

            return function (func_args_length) {
                return curried(args.concat([].slice.apply(arguments)));
            };
        }

        return curried(initial_args);
    }
  };
});
