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
.constant('cardTypes', {
    criatura: {
      name: 'Criatura',
      enabled: false
    },
    instantaneo: {
      name: 'Instantaneo',
      enabled: false
    },
    artefacto: {
      name: 'Artefacto',
      enabled: false
    },
    conjuro: {
      name: 'Conjuro',
      enabled: false
    },
    encantamiento: {
      name: 'Encantamiento',
      enabled: false
    }
})
.run(['$rootScope', 'utils', 'cardTypes',
  function($rootScope, utils, cardTypes) {
    // Init store to save cards.
    $rootScope.newDeckItems = {};
    $rootScope.constants = {
      cardTypes: cardTypes
    };
}]);
