if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        var obj = {
               name : obj.name,
               greeting : obj.greeting,
               sayIt : fn
             };
        return obj.sayIt();
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
        return constructor;
    },

    iterate : function(obj) {
        var result = [];
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                var kvPair = property + ": " + obj[property];
                result.push(kvPair);
            }
        }
        return result;
    }
  };
});

