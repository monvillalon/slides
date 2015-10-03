angular.module('app.presentation' , [
  'ui.router' ,
  'ui.bootstrap',
  'ui.ace',
  'ui.layout',
  'ui.sortable',
  'ngClickConfirm',
  'app.remark'
]).config( PresentationModuleConfig );

PresentationModuleConfig.$inject = ['$stateProvider'];
function PresentationModuleConfig( $stateProvider ){

  $stateProvider.state('presentations', {
      url:         "/courses/:course/presentations",
      templateUrl: "app/presentation/presentation_list.html",
      controller:  "PresentationListController as vm",
      resolve:     {
        Course: ['$stateParams' , 'CoursesService' , function( $stateParams , CoursesService ){
            return CoursesService.get( $stateParams.course );
        }]
      }
  });

  $stateProvider.state('presentations.new', {
      url:         "/new",
      templateUrl: "app/presentation/presentation_list.html",
      views: {
        '@': {
          templateUrl: "app/presentation/presentation_editor.html",
          controller:  "PresentationEditorController as vm"
        }
      },
      resolve: {
        Presentation: function( $stateParams , PresentationService , Course ){
            return null;
        }
      }
  });

  $stateProvider.state('presentation', {
      parent:      "presentations",
      url:         "/view/:presentation",
      views: {
        '@': {
          templateUrl: "app/presentation/presentation.html",
          controller:  "PresentationController as vm"
        }
      },
      resolve:     {
          Presentation: function( $stateParams , PresentationService , Course ){
              return PresentationService.get( Course.id , $stateParams.presentation );
          }
      }
  });

  $stateProvider.state('presentation.edit', {
      parent:      "presentations",
      url:         "/edit/:presentation",
      views: {
        '@': {
          templateUrl: "app/presentation/presentation_editor.html",
          controller:  "PresentationEditorController as vm"
        }
      },
      resolve: {
          Presentation: function( $stateParams , PresentationService , Course ){
              return PresentationService.get( Course.id , $stateParams.presentation );
          }
      }
  });

}
