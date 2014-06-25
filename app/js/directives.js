angular.module('deckMasterApp')
.directive('setsPanel', function() {
  return {
    templateUrl: 'templates/sets-panel.tmpl.html',
    controller: 'setsController',
    restrict: 'A'
  };
});
