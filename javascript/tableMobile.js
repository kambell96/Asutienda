//this function hide all rows in a column
function hideRows() {
  var element = document.getElementsByClassName("column-number-0");
  var children = element[0]["children"];

  for (var i = 0; i < children.length; i++) {
    if (children[i].className == "table-list-row") {
      children[i]["style"]["display"] = "none";
    }
  }
}
//when the page has been loaded, this function is called
hideRows();

/*This function is called when the user clicks a column */
function ShowRows(clickedElement) {
  var element = document.getElementsByClassName("column-number-0");
  var children = element[0]["children"];

  for (var i = 0; i < children.length; i++) {
    if (children[i].className == "table-list-row" && children[i]["style"]["display"] == "none") {
      children[i]["style"]["display"] = "block";
    }
    else if (children[i].className == "table-list-row" && children[i]["style"]["display"] == "block") {
      children[i]["style"]["display"] = "none";
    }
  }
}
