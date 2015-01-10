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
}).
directive('card', function() {
  return {
    restrict: 'A',
    replace: true,
    /**
     * Scope:
     *  - card {number}: card id.
     */
    scope: {
      card: '=card'
    },
    templateUrl: 'templates/card.tmpl.html',
    link: function(scope, element, attributes) {
      var id = scope.card;
      scope.src = 'http://api.mtgdb.info/content/card_images/{id}.jpeg'
        .replace('{id}', id);
      // TODO: bind will be deprecated, better use of on and off.
      element.bind('on', function() {
        element.addClass('loaded');
      });
    }
  };
});
