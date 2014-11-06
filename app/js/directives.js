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
    scope:{
      card: '=card'
    },
    templateUrl: 'templates/card.tmpl.html',
    link: function(scope, element, attributes) {
      var id = scope.card.id;
      scope.src = 'http://api.mtgdb.info/content/card_images/{id}.jpeg'
        .replace('{id}', id);
      element.bind('on', function(){
        element.addClass('loaded');
      });
      //@TODO implement UI Bootstrap
      //element.on('click', function(){
      //  $modal.open({
      //    template: '<img ng-src="{src}" />'.replace('{src}', scope.src),
      //    size: 'sm'
      //  });
      //});
    }
  };
});
