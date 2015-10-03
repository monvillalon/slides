angular.module('app.presentation')
       .controller( 'PresentationEditorController' , PresentationEditorController );

PresentationEditorController.$inject = [ '$scope' , '$timeout' , '$state' , 'PresentationService', 'Course' , 'Presentation'];
function PresentationEditorController( $scope , $timeout , $state , PresentationService , Course , Presentation ){
  var vm    = this;

  vm.course                    = Course;
  vm.presentation              = Presentation || { 'name': "Untitled" };
  vm.slides                    = [];

  vm.sortableOptions           = {
    'update': onSortChange ,
    'handle': '.sortable-handle'
  };

  vm.remarkApi   = null;
  vm.selected    = null;
  vm.slideIndex  = null;
  vm.content     = "";

  vm.onAddSlide                = onAddSlide;
  vm.onRemoveSlide             = onRemoveSlide;
  vm.onSlideSelect             = onSlideSelect;
  vm.onSlideChange             = onSlideChange;
  vm.onSlideContentChange      = onSlideContentChange;
  vm.onSave                    = onSave;

  return init();

  function init(){
      loadSlides();

      //Update the preview when we resize
      $scope.$on('ui.layout.resize', function(){
        vm.remarkApi.update();
      });
      $scope.$on('ui.layout.toggle', function(){
        vm.remarkApi.update();
      });
  }

  function loadSlides(){
      if( vm.presentation.id ){
        PresentationService.getSlides( Course.id , Presentation.id ).then( function( data ){
            vm.slides = data;
            if( !vm.slides.length ){
              onAddSlide();
            }else{
              onSlideSelect( data[0] );
            }
        });
      }else{
        onAddSlide();
      }
  }

  function onAddSlide(){
    vm.slides.push({
      'content': '' ,
      'valign':  'top',
      'halign':  'left'
    });
    vm.slideIndex = vm.slides.length - 1;
    updatePresentationContent();
  }

  function onRemoveSlide( slide ){

      var index = vm.slides.indexOf( slide );
      vm.slides.splice(index, 1);
      vm.selected   = vm.slides[index];
      vm.slideIndex = index;
      updatePresentationContent();

      if( vm.slides.length == 0 ){
         onAddSlide();
      }

  }

  function onSlideSelect( slide ){
    vm.selected   = slide;
    vm.slideIndex = vm.slides.indexOf( slide );
  }

  function onSlideChange( slideIndex ){
    vm.selected   = vm.slides[ slideIndex ];
    vm.slideIndex = slideIndex;
  }

  function onSortChange(){
    $timeout( updatePresentationContent );
  }

  function onSlideContentChange(){

    var name = vm.selected.content.match(/^\s*#+(.+)/m);
    if( name && name.length >= 2 ){
      vm.selected.name = name[1];
    }else{
      vm.selected.name = "";
    }

    updatePresentationContent();
  }

  function updatePresentationContent(){

      var content = "";
      var size    = vm.slides.length;
      var content = "";
      vm.slides.forEach( function( slide , i , array ){
          content += "class: " + slide.halign + "," + slide.valign + "\n";
          content += slide.content.replace(/^---\s*/gm,"<hr />");
          if( i != size -1 ){
            content += "\n---\n";
          }
      });
      vm.content = content;
  }

  function onSave(){
      var body = {};
      var pos  = 0;
      body.id        = vm.presentation.id;
      body.name      = vm.presentation.name;
      body.course_id = vm.course.id;
      body.slides    = vm.slides.map( function( slide ){
          slide.position = pos;
          return slide;
      });

      PresentationService.save( Course.id , body ).then( function( data ){
          $state.go('^');
      });

  }

}
