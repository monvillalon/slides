angular.module('app' , [
  'app.courses',
  'app.presentation'
]).config( AppConfig );

AppConfig.$inject = ['$urlRouterProvider'];
function AppConfig( $urlRouterProvider ){
  $urlRouterProvider.when('' , '/courses' );
}
