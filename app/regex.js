if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
      containsNumber: function (str) {
          return str.match(/[0-9]+/) != null;

    },

    containsRepeatingLetter : function(str) {
        return str.match(/([a-z])\1/i) != null;
    },

    endsWithVowel : function(str) {
        return str.match(/.*[aeiou]$/i) != null;
    },

    captureThreeNumbers : function(str) {
        return (str.match(/^[0-9]{3}/));

    },

    matchesPattern : function(str) {
        return (str.match(/^(\d{3}-)\d{3}-\d{4}$/) != null);

    },
    isUSD: function (str) {
        var exp = /^\$[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/;
        return (str.match(exp) != null);

    }
  };
});
