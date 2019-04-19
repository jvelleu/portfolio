// JavaScript Document

var banner_index = 0;
showSlides();

function fadeOut(element) {
	let opacity = 1;
	function decrease () {
		opacity -= 0.05;
		if (opacity <= 0){
			// complete
			element.style.opacity = 0;
			return true;
		}
		element.style.opacity = opacity;
		requestAnimationFrame(decrease);
	}
	decrease();
}

function fadeIn(element) {
	let opacity = 0;
	function increase () {
		opacity += 0.05;
		if (opacity >= 1){
			// complete
			element.style.opacity = 1;
			return true;
		}
		element.style.opacity = opacity;
		requestAnimationFrame(increase);
	}
	increase();
}

function showSlides() {
	let i;
	let banners = document.getElementsByClassName("featured-item");
	let len = banners.length;
	
	for (i = 0; i < len; i++) {
		//banners[i].style.display = "none";
		fadeOut(banners[i]);
	}
	
	banner_index++;
	if (banner_index > len) {banner_index = 1} 
	
	//banners[banner_index-1].style.display = "block"; 
	fadeIn(banners[i]);
	
	setTimeout(showSlides, 1000); // Change image every 10 seconds
}