if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
      async: function (value) {
          if (typeof value === "string") {
              return {
                  then: function (fn) {
                      return "success";
                  }
              }
          } else {
              return {
                  then: function (fn) {
                      return true;
                  }
              }
          }
    },

    manipulateRemoteData : function(url) {
        $.get(url, function (data) {
        });
    }
  };
});
