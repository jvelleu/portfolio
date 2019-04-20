// JavaScript Document

function expandContent(id) {
	let detail = document.getElementById(id);
	if (detail.className.indexOf("show") == -1) {
		detail.classList.add("show");
	} 
	else {
		detail.classList.remove("show");
	}
}