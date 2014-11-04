angular.module('deckMasterApp')
.directive('setsPanel', function() {
  return {
    templateUrl: 'templates/sets-panel.tmpl.html',
    controller: 'setsController',
    replace: true,
    restrict: 'A'
  };
})
.directive('mainSection', function() {
  return {
    templateUrl: 'templates/main-section.tmpl.html',
    controller: 'mainController',
    replace: true,
    restrict: 'A'
  };
});
