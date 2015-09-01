if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
      valueAtBit: function (num, bit) {
          var bin = num.toString(2);
          return (bin.split('').map(Number).reverse()[bit - 1]);
    },

      base10: function (str) {
          return parseInt(str, 2);

    },

    convertToBinary: function(num) {
        var bin = num.toString(2);
        if (bin.length < 8) {
            bin = '0000000'.split('').slice(0, 8 - bin.length).join('') + bin;
        }
        return (bin);

    },

    multiply: function(a, b) {
        var atens = Math.pow(10, String(a).length - String(a).indexOf('.') - 1),
             btens = Math.pow(10, String(b).length - String(b).indexOf('.') - 1);
        var result = (a * atens) * (b * btens) / (atens * btens);
        return result;
    }
  };
});

