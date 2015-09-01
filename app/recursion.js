if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    return {
        listFiles: function (data, dirName) {
            function getFiles(structure,dirName, isSubDir) {
                var results = [];
                var count = 0;
                var curDir = structure;
                for (var i = 0; i < curDir.files.length; i++) {
                    if (typeof curDir.files[i] === "string"){
                        if (curDir.dir === dirName || isSubDir) {
                            isSubDir = true;
                            results.push(curDir.files[i]);
                        }
                    } else {
                        var newList = getFiles(curDir.files[i],dirName, isSubDir);
                        results = results.concat(newList);
                    }
                }
                return results;
            }
            var isSubDirName = data.dir === dirName || dirName == undefined;
          return getFiles(data, dirName, isSubDirName);

      },

    permute: function(arr) {

    }
  };
});
