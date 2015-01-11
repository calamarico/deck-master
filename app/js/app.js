/* App.js */
angular.module('deckMasterApp', ['ngRoute', 'ngAnimate'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'templates/seeker.tmpl.html',
      pageTitle: 'Deck Master - Seeker'
    })

    // TODO: Add deck section
    // .otherwise({
    //   templateUrl: 'templates/deck.tmpl.html'
    // });
    .otherwise({
      templateUrl: 'templates/seeker.tmpl.html'
    });
  }
])
.run(['utils', function() {
}]);
