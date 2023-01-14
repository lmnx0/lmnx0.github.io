//var
//var resize = 0 //resize

//let
let resize = 0;
let theme = 0;
let themes = document.body;//themes
 
//const
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const trigger1 = document.querySelector('.trigger1');
const para = document.createElement('p');
const para2 = document.createElement('p');
const aboutbtn = document.createElement('button'); //creates button
const themesbtn = document.createElement('button');
 
//setAttribute
para.setAttribute("class", "Abouttitle");
para2.setAttribute("class", "Abouttxt");
aboutbtn.setAttribute("class", "aboutbtn");
themesbtn.setAttribute("class", "themesbtn");
 
//event listener
aboutbtn.addEventListener("click", showingAbout);
themesbtn.addEventListener("click", clickTheme);
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
 
//start of search bar
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
//end of search bar
 
//start of resize
//open
function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
}
 
//close
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("sbscreen").innerHTML = "fullscreen";
    resize = 0;
}
 
//full screen
function fullNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft= "100%";
    document.getElementById("sbscreen").innerHTML = "fullscreen_exit";
}
 
//minimize
function minNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft= "350px";
    document.getElementById("sbscreen").innerHTML = "fullscreen";
}

//resize
function clickNav() {
    if (resize == 0) {
        fullNav();
        resize ++;
    } else {
        minNav();
        resize --;
    }
}
// end of resize
 
//start of modal
//modal
function toggleModal() {
    aboutbtn.innerText = 'About';
    themesbtn.innerText = 'Theme'
    modalContent.append(aboutbtn);
    modalContent.append(themesbtn);
    const createModal = document.createElement('div');
    modal.classList.toggle("show-modal");
    createModal.setAttribute('class','modal');
    para.remove();
    para2.remove();
 
}
 
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
 
//about modal
function showingAbout(){
    aboutbtn.remove();//remove about button
    themesbtn.remove();
    para.innerText = "About us: ";
    para2.innerText = "MAGHILAK NAKO KAY AKO RA JUD ISA NAGHIMO DINHIA YAWA";
    document.querySelector(".modal-content").append(para);
    document.querySelector(".modal-content").append(para2);
}
//end of modal
 
//start of themes
//dark mode
function darkMode() {
    themes.classList.toggle("darkmode"); 
}
 
function flashBang() {
    themes.classList.toggle("flashbang");
}
 
function clickTheme() {
    if (theme == 0) {
        darkMode();
        theme++
    } else if(theme == 1){
        flashBang();
        theme++
    }else{
        themes.classList.remove('flashbang')
        themes.classList.remove('darkmode')
        theme -= 2
    } 
}
//end of themes