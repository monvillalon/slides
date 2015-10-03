angular.module('app.presentation')
       .controller( 'PresentationController' , PresentationController );

PresentationController.$inject = ['Presentation'];
function PresentationController( Presentation ){
  var vm    = this;
  vm.presentation = Presentation;
}
