var
	menuOpener,
	menuBar,
	aboutMeSelector,
	projectsSelector,
	technologiesSelector,
	experienceSelector,
	awardsSelector,
	skillsSelector,
	contactSelector,
	menuNav,
	loaderWrapper,
	language,
	supportedLanguages = ['english', 'spanish', 'portuguese'];
	
function loaded(){
	//Start all the objects on the page:
	about = document.getElementsByClassName("about");
	menuOpener = document.getElementById("menuOpener");
	menuBar = document.getElementById("menuBar");
	aboutMeSelector = document.getElementById("aboutMeSelector");
	projectsSelector = document.getElementById("projectsSelector");
	technologiesSelector = document.getElementById("technologiesSelector");
	experienceSelector = document.getElementById("experienceSelector");
	awardsSelector = document.getElementById("awardsSelector");
	skillsSelector = document.getElementById("skillsSelector");
	contactSelector = document.getElementById("contactSelector");
	menuNav = document.getElementById("menuNav");
	loaderWrapper = document.getElementById("loaderWrapper");
	//Now that we have all the objects set, let's set the actions:
	menuOpener.onmouseover = openMenu;
	menuBar.onmouseleave = closeMenu;
	menuNav.onclick = closeMenu;
	//Now, let's see if the language is in the supported list and then set it:
	language = getUrlParam('language','portuguese');
	console.log(`site language is set to ${language}`);
	if(!supportedLanguages.includes(language)){
		language = 'english';
	}
	console.log("setting the site language")
	setLanguage(language);
	//setTimeout(dropLoader, 10000);
	console.log("dropping the loader");
	dropLoader();
	console.log("if you're trying to access the console to fuck this page up, you should know that there's no need to, I already did it myself...")
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

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function setLanguage(language){
	var keys, setLanguage;
	if(languageFile){
		setLanguage = languageFile[language];
		keys = Object.keys(setLanguage);
		var toSet;
		for(toSet in keys){
			document.getElementById(keys[toSet]).innerHTML = setLanguage[keys[toSet]];
		}
	}
}

function dropLoader(){
	loaderWrapper.style.display = "none";
}

function createLoader(){
	loaderWrapper.style.display = "block";
}

function setCookie(name, value){
	document.cookie = `${name}= ${value};`;
}

function getCookie(name) {
	var 
		coockie = document.cookie,
		startPosition = coockie.indexOf(name + "="),
		endPosition = coockie.indexOf(";", startPosition),
		val = null;
	
	if(startPosition != -1){
		if(endPosition != -1){
			val = coockie.slice(startPosition, endPosition);
		}
		else{
			val = coockie.slice(startPosition);
		}
		val = val.slice(val.indexOf("=")+1);
	}
	return val;
}

function clearCookies(){
	var 
		cookies = document.cookie.replace(" ", "").split(";"),
		x;
	for(x in cookies){
		delCookie(cookies[x]);
	}
	console.log(cookies);
}

function delCookie(name){
	setCookie(name, "");
}