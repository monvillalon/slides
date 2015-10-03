angular.module('app.courses')
       .service('CoursesService' , CoursesService );

CoursesService.$inject = ['$q' , '$http'];
function CoursesService( $q , $http ){

  var service = {};
  service.list = list;
  service.get  = get;
  return service;

  function list(  ){
    return $http.get( '/api/courses' ).then( function( response ){
       return response.data;
    });
  }

  function get( course ){
    return $http.get( '/api/courses/' + course ).then( function( response ){
       return response.data;
    });
  }

}
