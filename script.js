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