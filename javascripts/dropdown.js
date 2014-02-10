$(document).ready(function() {
  $( "#nav-menu" ).click(function() {
    if ( $( "#nav-list-mobile" ).is( ":hidden" ) ) {
      $( "#nav-list-mobile" ).slideDown("fast");
    } else {
      $( "#nav-list-mobile" ).slideUp("fast");
    }
  });
  $( window ).resize(function() {
    $( "#nav-list-mobile" ).slideUp( "fast" );
  });
});