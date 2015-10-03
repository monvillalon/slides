angular.module('app.presentation')
       .service('PresentationService' , PresentationService );

PresentationService.$inject = ['$q' , '$http'];
function PresentationService( $q , $http ){

  var service        = {};
  service.list       = list;
  service.get        = get;
  service.save       = save;
  service.getSlides  = getSlides;
  return service;

  function list( course ){
    return $http.get( '/api/courses/' + course + '/presentations' ).then( function( response ){
       return response.data;
    });
  }

  function get( course , presentation ){
    return $http.get( '/api/courses/' + course + '/presentations' + '/' + presentation ).then( function( response ){
       return response.data;
    });
  }

  function save( course , presentation ){

    if( presentation.id ){
      return $http.put( '/api/courses/' + course + '/presentations' + '/' + presentation.id , presentation ).then( function( response ){
         return response.data;
      });
    }else{
      return $http.post( '/api/courses/' + course + '/presentations' , presentation ).then( function( response ){
         return response.data;
      });
    }

  }

  function getSlides( course , presentation ){
    return $http.get( '/api/courses/' + course + '/presentations' + '/' + presentation + '/slides' ).then( function( response ){
       return response.data;
    });
  }

}
