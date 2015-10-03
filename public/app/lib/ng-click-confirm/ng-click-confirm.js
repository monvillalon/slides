(function(){
  'use strict';

  angular.module('ngClickConfirm' , [
  ])
  .directive( 'ngClickConfirm' , NgClickConfirmDirective )

  NgClickConfirmDirective.$inject = [ '$rootScope' , '$modal' ];
  function NgClickConfirmDirective( $rootScope , $modal ){

    return {
      restrict:   'A',
      scope: {
        'ngClickConfirm': '&'
      },
      link:       function( $scope , element , attrs ){

        //Get the configuration
        var prefix    = 'ngClickConfirm';
        var prefixLen = prefix.length;
        var conf = {
          "title":             "Are you sure?"     ,
          "content":           "Are you sure?"     ,
          "okButtonClass":     "btn btn-primary"   ,
          "okIconClass":       "fa fa-trash"       ,
          "okLabel":           "Delete"            ,
          "cancelButtonClass": "btn btn-danger"    ,
          "cancelIconClass":   "fa fa-close"       ,
          "cancelLabel":       "Cancel"
        };
        angular.forEach( attrs , function( attr , key ){
          if( key != prefix && key.indexOf(prefix) == 0  ){
            key    = key.substring( prefixLen  );
            key    = key.substr(0,1).toLowerCase() + key.substr(1);
            conf[key] = attr;
          }
        });

        element.on('click' , function( e ){

            //Stop Propagation
            e.stopPropagation();

            //Create New Scope
            var $newScope = $rootScope.$new();
            angular.forEach( conf , function( value , key ){
              $newScope[ key ] = value;
            });

            //Show Modal
            var modal = $modal.open({
              "templateUrl": "app/lib/ng-click-confirm/ng-click-confirm.html" ,
              "scope":       $newScope
            });

            //On Ok
            modal.result.then( function(){
              $scope.ngClickConfirm();
            });

            //Cleanup
            modal.result.catch( function(){
              $newScope.$destroy();
            });

        });

      }
    };

  };
})();
