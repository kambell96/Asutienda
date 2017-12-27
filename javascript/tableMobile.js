//detect if we are in mobile
function isMobile() {
  if (window.innerWidth <= 480) {
    return true;
  }
  else {
    false;
  }
}

//this function hide all rows in a column
function hideRows() {
  var tableRows = document.getElementsByClassName("table-list-row");
  for (var i = 0; i < tableRows.length; i++) {
    tableRows[i]["style"]["display"] = "none";
  }
}
//when the page has been loaded, this function is called
if (isMobile()) hideRows();

/*This function is called when the user clicks a column */
function ShowRows(clickedElement) {
  var children = clickedElement["children"];

  for (var i = 0; i < children.length; i++) {
    if (children[i].className == "table-list-row" && children[i]["style"]["display"] == "none") {
      children[i]["style"]["display"] = "flex";
    }
    else if (children[i].className == "table-list-row" && children[i]["style"]["display"] == "flex") {
      children[i]["style"]["display"] = "none";
    }
  }
}
