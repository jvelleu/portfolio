// JavaScript Document

var banner_index = 0;
bannerChange();

function fadeOut(element) {
	let opacity = 1;
	function decrease () {
		opacity -= 0.01;
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
		opacity += 0.01;
		if (opacity >= 1){
			// complete
			element.style.opacity = 1;
			return true;
		}
		element.style.opacity = opacity;
		//element.style.display = "block";
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
	}
	
	banner_index++;
	if (banner_index > len) {banner_index = 1} 
	
	fadeIn(banners[banner_index-1])

	setTimeout(bannerChange, 10000); // Change image every 10 seconds
}