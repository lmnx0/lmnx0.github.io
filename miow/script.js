var resize = 1 //resize

//search bar
function searchBar() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("musicList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
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