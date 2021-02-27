/* Week 5 Assignment: Java Script for sorting the table in the bike_guide.html page.https://www.w3schools.com/ Was used as a reference. 
- Created by Thomas Thomas*/




/* Function for Sort Price button to hide or show other buttons for sorting*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// This will close the dropdown if clicked outside button
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//This function sorts the table from lowest to highest price by iterating through each item and switching them if lower/higher
function sortTable_LH() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;

  // loop that will continue untilno switching has been done
  while (switching) {
    //1) No switching is done
    switching = false;
    rows = table.rows;

    //Iterate through all table rows (except the headers)
    for (i = 1; i < (rows.length - 1); i++) {
      //no switching
      shouldSwitch = false;

      //Grab current row item and next item in next row to compare
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];

      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if yes - mark as a switch and stop loop via break
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      //If a switch has been noted, then switch items
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


//This function sorts the table from highest to lowest price by iterating through each item and switching them if lower/higher
function sortTable_HL() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];

      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
