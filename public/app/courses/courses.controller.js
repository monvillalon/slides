angular.module('app.courses')
       .controller( 'CoursesController' , CoursesController );

CoursesController.$inject = ['CoursesService'];
function CoursesController( CoursesService ){
  var vm    = this;
  vm.list   = null;

  return init();

  function init(){
    CoursesService.list( ).then( function( list ){
        vm.list = list;
    })
  }

}
