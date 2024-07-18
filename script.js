var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.closest('.full-group-match').querySelector('.content');
    if (content.style.display === "block") {
      this.textContent = "[show]";
      content.style.display = "none";
    } else {
      this.textContent = "[hide]";
      content.style.display = "block";
    }
  });
}



var playerButton = document.getElementsByClassName("player-button");
var i;

for (i = 0; i < playerButton.length; i++) {
  playerButton[i].addEventListener("click", function() {
    var content = this.closest('.player-card').querySelector('.player-content');
    if (content.style.display === "inline") {
      content.style.display = "none";
    } else {
      content.style.display = "inline";
    }
  });
}



function myFunction() {
  var prizesInfo = document.getElementById("prizes-info");
  var prizesContent = document.getElementById("prizes-content");
  var prizesReadmoreButton = document.getElementById("prizes-readmore-button");

  if (prizesContent.style.display === "inline") {
    prizesInfo.style.display = "none";
    prizesReadmoreButton.style.display = "inline";
    prizesContent.style.display = "none";
  } else {
    prizesInfo.style.display = "inline";
    prizesReadmoreButton.style.display = "none"; 
    prizesContent.style.display = "inline";
  }
}