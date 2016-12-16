//dragdrop testi
$(function(){
  var block1 = document.getElementById("block1");
  $(block1).data("target", 4);
  var block2 = document.getElementById("block2");
  $(block2).data("target", 4);
  var block3 = document.getElementById("block3");
  $(block3).data("target", 4);
  var block9 = document.getElementById("block9");
  $(block9).data("target", 2);
  var block4 = document.getElementById("block4");
  $(block4).data("target", 1);
  var block5 = document.getElementById("block5");
  $(block5).data("target", 1);
  var block6 = document.getElementById("block6");
  $(block6).data("target", 2);
  var block7 = document.getElementById("block7");
  $(block7).data("target", 2);
  var block10 = document.getElementById("block10");
  $(block10).data("target", 3);
  var block11 = document.getElementById("block11");
  $(block11).data("target", 3);
  var block12 = document.getElementById("block12");
  $(block12).data("target", 3);
  var block8 = document.getElementById("block8");
  $(block8).data("target", 2);

  var goal1 = document.getElementById("goal1");
  $(goal1).data("id", 1);
  var goal2 = document.getElementById("goal2");
  $(goal2).data("id", 2);
  var goal3 = document.getElementById("goal3");
  $(goal3).data("id", 3);
  var goal4 = document.getElementById("goal4");
  $(goal4).data("id", 4);

  $( ".draggable" ).draggable();
  $( ".droppable" ).droppable({
    drop: handleDropEvent
  });
});

function handleDropEvent( event, ui ) {
  var drop = $(this).data( 'id' );
  var drag = ui.draggable.data( 'target' );
  if(drop === drag){
    ui.draggable.addClass( "droppedright" );
    ui.draggable.removeClass( "droppedwrong" );
  } else{
    ui.draggable.addClass( "droppedwrong" );
    ui.draggable.removeClass( "droppedright" );
  }
}
