// JavaScript Document

var banner_index = 0;
bannerChange();

function fadeOut(element) {
	let opacity = 1;
	function decrease () {
		opacity -= 0.05;
		if (opacity <= 0){
			// complete
			console.log(element);
			element.style.opacity = 0;
			element.style.display = "none";
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
			console.log(element);
			element.style.opacity = 1;
			return true;
		}
		element.style.opacity = opacity;
		requestAnimationFrame(increase);
	}
	increase();
}

function bannerChange() {
	let i;
	let banners = document.getElementsByClassName("featured-item");
	let len = banners.length;
	
	for (i = 0; i < len; i++) {
		fadeOut(banners[i]);
		//banners[i].style.display = "none";
	}
	
	banner_index++;
	if (banner_index > len) {banner_index = 1} 
	
	banners[banner_index-1].style.display = "block"; 
	fadeIn(banners[banner_index-1]);

	setTimeout(bannerChange, 2000); // Change image every 10 seconds
}