if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
      count: function (start, end) {
          var count;
          var myVar;
          var result = {
              cancel: function () {
                  clearTimeout(myVar);
              }
          }
          for (count = start; count <= end ; count++) {
               myVar = setTimeout(console.log(count), 100);
          }
          clearTimeout(myVar);
          return { result };
    }
  };
});
