var resize = 1 //resize

//search bar
// JavaScript code
function search_animal() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('animals');
	
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