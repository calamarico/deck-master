/**
 * Sets controller.
 */
angular.module('deckMasterApp')
.controller('setsController', ['$scope', 'mtgdbApi',
  function($scope, mtgdb) {
    function _getSetsInfo() {
      mtgdb.getAllSets().then(function(response) {
        var i;

        for (i = 0; i < response.data.length; i++) {
          var _set = {},
            _date = new Date(response.data[i].releasedAt),
            _fullYear = _date.getFullYear();

          if (typeof $scope.sets[_fullYear] === 'undefined') {
            $scope.sets[_fullYear] = [];
            $scope.sets[_fullYear].fullYear = _fullYear;
          }
          angular.extend(_set, response.data[i]);
          $scope.sets[_fullYear].push(response.data[i]);
        }
        console.log($scope.sets);
      }, function(error) {
        // TODO: error control
      });
    }

    $scope.sets = {};

    _getSetsInfo();
  }
]);
