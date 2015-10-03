angular.module('app.courses' , [
  'ui.router'
]).config( CoursesModuleConfig );

CoursesModuleConfig.$inject = ['$stateProvider'];
function CoursesModuleConfig( $stateProvider ){

  $stateProvider.state('courses', {
      url:         "/courses",
      templateUrl: "app/courses/courses.html",
      controller:  "CoursesController as vm"
  });

}
