if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      var state = false;
      return state;
    },

    functions : function(flag) {
      if (flag) {
        return 'a';
      } else {
        return 'b';
      }
    },

    parseInt : function(num) {
      var numVal = num.match(/[0-9]*/g);
      return parseInt(numVal);
    },

    identity : function(val1, val2) {
        if (typeof(val1) == typeof (val2))
            return val1 == val2;
        else return false
    }
  };
});
