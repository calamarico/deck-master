/* App.js */
angular.module('deckMasterApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      redirectTo: '/seeker'
    })
    .when('/seeker', {
      templateUrl: 'templates/seeker.tmpl.html',
      pageTitle: 'Deck Master - Seeker'
    })
    .when('/deck', {
      templateUrl: 'templates/deck.tmpl.html',
      pageTitle: 'Deck Master - Deck'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
])
.run(['$rootScope', 'utils', function($rootScope, utils) {
  // Init store to save cards.
  $rootScope.newDeckItems = {};
}]);
