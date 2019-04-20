// JavaScript Document

function openMenu() {
	let i;
	let menu = document.getElementsByClassName("h-menu-nav");	
	let len = menu.length;
	
	for (i = 0; i < len; i++) {
		if (menu[i].style.display === "flex") {
			menu[i].style.display = "none";
		}
		else {
			menu[i].style.display = "flex";
		}
	}
}
