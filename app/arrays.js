if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
      return  arr.reduce(function(a, b){return a+b;}) ;

    },

    remove : function(arr, item) {
        var index = arr.indexOf(item)
        while (index > -1){
            arr.splice(index,1);
            index = arr.indexOf(item);
        }
        return arr;

    },

    removeWithoutCopy : function(arr, item) {
        var index = arr.indexOf(item)
         while (index > -1){
             arr.splice(index,1);
             index = arr.indexOf(item);
         }
         return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0,0,item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr;

    },

    concat : function(arr1, arr2) {
      var arr = arr1.concat(arr2);
      return arr;

    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;

    },

    count : function(arr, item) {
        var count = arr.filter(function(val){
            return val === item;
        }).length;
        return count;
    },

    duplicates : function(arr) {
        var sorted = arr.sort();
        var result = [];
        for (var i = 0; i <= arr.length - 1; i++) {
            if (sorted[i + 1] === sorted[i] && result.indexOf(sorted[i]) == -1) {
                result.push(sorted[i]);
            }
        }
        return result;
    },

    square : function(arr) {
        var result = [];
        for (var i = 0; i <= arr.length - 1; i++) {
                 result.push(arr[i] * arr[i]);
        }
        return result;
    },

    findAllOccurrences : function(arr, target) {
        var dup = arr.indexOf(target);
        var result = [];
        while (dup >= 0){
            result.push(dup);
            dup = arr.indexOf(target,dup + 1);
        }
        return result;
    }
  };
});
