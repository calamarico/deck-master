angular.module('deckMasterApp')
.directive('setsPanel', function() {
  return {
    templateUrl: 'templates/sets-panel.tmpl.html',
    controller: 'setsController',
    restrict: 'A'
  };
}).
directive('card', function() {
  return {
    restrict: 'A',
    scope:{
      card:'=card'
    },
    template:'<img ng-src="{{src}}" />',
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
