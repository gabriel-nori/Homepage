var
	menuOpener,
	menuBar,
	aboutMeSelector,
	projectsSelector,
	technologiesSelector,
	experienceSelector,
	wardsSelector,
	skillsSelector,
	contactSelector,
	menuNav;
	
function loaded(){
	console.log("yup");
	//Start all the objects on the page:
	menuOpener = document.getElementById("menuOpener");
	menuBar = document.getElementById("menuBar");
	aboutMeSelector = document.getElementById("aboutMeSelector");
	projectsSelector = document.getElementById("projectsSelector");
	technologiesSelector = document.getElementById("technologiesSelector");
	experienceSelector = document.getElementById("experienceSelector");
	wardsSelector = document.getElementById("wardsSelector");
	skillsSelector = document.getElementById("skillsSelector");
	contactSelector = document.getElementById("contactSelector");
	menuNav = document.getElementById("menuNav");
	//Now that we have all the objects set, let's set the actions:
	menuOpener.onmouseover = openMenu;
	menuBar.onmouseleave = closeMenu;
	menuNav.onclick = closeMenu;
}

function openMenu(){
	if(menuBar.className == "slide-out" || menuBar.className == ""){
		menuBar.className = "slide-in";
		//menuBurger.style.background = "url(\"../Media/Icons/Menu/Opened/menu_open-black-18dp/2x/baseline_menu_open_black_18dp.png\")";
	}
}
function closeMenu(){
	menuBar.className = "slide-out";
}