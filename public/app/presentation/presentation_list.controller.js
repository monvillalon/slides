angular.module('app.presentation')
       .controller( 'PresentationListController' , PresentationListController );

PresentationListController.$inject = ['PresentationService' , 'Course'];
function PresentationListController( PresentationService , Course ){
  var vm    = this;
  vm.course = Course;
  vm.list   = null;

  return init();

  function init(){
    PresentationService.list( Course.id ).then( function( list ){
        vm.list = list;
    })
  }

}
