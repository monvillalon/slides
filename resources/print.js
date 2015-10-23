var DOCUMENT_ID  = "#document";
var DOCUMENT_URL = "http://localhost:9393/presentations/ruby2-control-flow.md";

var renderer = new marked.Renderer();
var rendererTable = renderer.table;
renderer.table = function ( ) {
    var table = rendererTable.apply( renderer ,  arguments );
    var html  = $("<div>").html( table ).find("table").addClass("table").parent().html();
    return html;
};

var MARKED_OPTS  =   {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: true,
  sanitize: false,
  smartLists: true,
  langPrefix: '' ,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  renderer: renderer
};

$(document).ready( function(){
  loadPresentation();
});

function loadPresentation(){
  getPresentation( DOCUMENT_URL ).then( function( slides ){
    buildPresentation( slides );
  });
}

function buildPresentation( slides ){
  var doc = $( DOCUMENT_ID );
  slides.forEach( function( slide ){
      var page = $("<div>").addClass("page")
      var content = $("<div>")
                .addClass("page-content")
                .addClass( "halign-" + slide.halign )
                .addClass( "valign-" + slide.valign )
                .html( slide.content );

      page.append( content );
      doc.append( page );

  });
}

function getPresentation( url ){

  var deferred = Q.defer();
  $.get( url ).then( function( content ){
    parsePresentation( content ).then( function( slides ){
      deferred.resolve( slides );
    });
  });

  return deferred.promise;

}

function parsePresentation( content ){

  var promises = [];

  //Fix Content problems
  content = content.replace( /^(\s*)(#+)(.+)$/gm , "$1 $2 $3" );

  var pages  = content.split(/^---\s*/gm);
  pages.forEach( function( page ){

      //Extract class
      var regexp = /^\s*class:\s(.+)\n/;
      var header = page.match(regexp);
      var halign = null;
      var valign = null;
      if( header ){
        header[1].split(",").forEach( function( i ){

          if( ["left","center","right"].indexOf( i.trim()) != -1 ){
            halign = i.trim();
          }
          if( ["top","middle","bottom"].indexOf( i.trim()) != -1 ){
            valign = i.trim();
          }
        });
        page = page.replace( regexp , "" );
      }

      var deferred = Q.defer();
      promises.push(deferred.promise);
      marked( page , MARKED_OPTS , function( a , content ){
        deferred.resolve({
          "halign":  halign,
          "valign":  valign,
          "content": content
        });
      });

  });

  return Q.all( promises );

}
