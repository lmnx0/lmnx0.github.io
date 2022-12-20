var resize = 1 //resize

//search bar
function search_music() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('music');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}

//open
function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
}

//close
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

//full screen
function fullNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft= "100%";
}

//minimize
function minNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft= "350px";
}

// Get the modal
var modal = document.getElementById("settings-menu");

// Get the button that opens the modal
var btn = document.getElementById("settings-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//backup resize
/* function clickNav() {
    switch(resize) {
        case 0 :
            minNav()
            ++ resize
            break;
        case 1 :
            fullNav()
            -- resize
            break;
    }
} */

//resize
function clickNav() {
    if (resize == 0) {
        minNav();
        ++ resize;
    } else {
        fullNav();
        -- resize;
    }
}