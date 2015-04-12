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
.constant('manaCost', {
  small: {
    name: '0-1',
    enabled: false
  },
  medium: {
    name: '2-3',
    enabled: false
  },
  middle: {
    name: '4-5',
    enabled: false
  },
  big: {
    name: '6+',
    enabled: false
  }
})
.constant('colors', {
  white: {
    name: 'White',
    enabled: false
  },
  blue: {
    name: 'Blue',
    enabled: false
  },
  black: {
    name: 'Black',
    enabled: false
  },
  red: {
    name: 'Red',
    enabled: false
  },
  green: {
    name: 'Green',
    enabled: false
  },
  uncolor: {
    name: 'No color',
    enabled: false
  }
})
.run(['$rootScope', 'utils', 'cardTypes', 'manaCost', 'colors',
  function($rootScope, utils, cardTypes, manaCost, colors) {
    // Init store to save cards.
    $rootScope.newDeckItems = {};
    $rootScope.constants = {
      cardTypes: cardTypes,
      manaCost: manaCost,
      colors: colors
    };
}]);
