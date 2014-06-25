/**
 * Sets controller.
 */
angular.module('deckMasterApp')
.controller('setsController', ['$scope', 'mtgdbApi',
  function($scope, mtgdb) {
    var _sets = [];
    /**
     * Sets scope.sets object from mtgdbApi.
     */
    function setSetsInfo() {
      var i, _date, _fullYear;

      function findYear(element, index) {
        return element.fullYear === _fullYear;
      }

      mtgdb.getAllSets().then(function(response) {
        var _set;
        for (i = 0; i < response.data.length; i++) {
          _date = new Date(response.data[i].releasedAt);
          _fullYear = _date.getFullYear();
          _set = _sets.find(findYear);

          if (angular.isUndefined(_set)) {
            _set = {
              fullYear: _fullYear,
              sets: [response.data[i]]
            };
            _sets.push(angular.copy(_set));
          } else {
            _set.sets.push(response.data[i]);
          }
        }
        $scope.sets = _sets.reverse();
        console.log($scope.sets);
      }, function(error) {
        // TODO: error control
      });
    }

    $scope.sets = null;

    setSetsInfo();
  }
]);
