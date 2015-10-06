angular.module('app.remark' , ['ngStorage'] )
       .directive( 'remark' , RemarkDirective );

function RemarkDirective( $localStorage , $timeout ){
  return {
    restrict: "E" ,
    scope: {
      'source':        '=',
      'slideIndex':    '=?',
      'slideshow':     '=?',
      'api':           '=?',
      'onSlideChange': '&?'
    } ,
    link: function( $scope , $element , $attrs ){

      //Set Element Size
      $element.css('width' ,  '100%');
      $element.css('height' , '100%');

      //Initialize local storage
      if( $localStorage.presentations === undefined ){
        $localStorage.presentations = {};
      }

      //Create Slideshow
      $scope.api = remark.create({
        highlightLanguage: 'ruby' ,
        highlightStyle:    'monokai',
        highlightLines:     true,
        container:          $element[0]
      });

      //Set the slide index from local storage
      if( $scope.slideIndex === undefined ){
        $scope.slideIndex = $localStorage.presentations[ $scope.source ];
      }

      //Respond to content changes
      $scope.$watch( 'source' , function( newValue ){
          $scope.api.loadFromString( newValue );
      });

      //Respond to slide changes
      $scope.$watch( 'slideIndex' , function( newValue ){
          if( newValue || newValue == 0 )
            $scope.api.gotoSlide( newValue + 1 );
      });

      //Save current slide
      $scope.api.on('showSlide', function (slide) {
          $timeout(function(){
            $scope.slideIndex = slide.getSlideIndex();
            if($scope.onSlideChange) $scope.onSlideChange( {'slideIndex': $scope.slideIndex } );
            $localStorage.presentations[ $scope.source ] = $scope.slideIndex + 1;
          });
      });

    }
  }
}
