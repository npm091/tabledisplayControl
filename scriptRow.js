function checkbox_row(obj, targetName) {
  var target = document.getElementsByName(targetName);
  for (var i=0; i < target.length; i++) {
    target[i].style.display = obj.checked ? "" : "none";
  }
}
