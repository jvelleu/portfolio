// JavaScript Document

var banner_index = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("featured-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  banner_index++;
  if (banner_index > slides.length) {banner_index = 1} 
  slides[banner_index-1].style.display = "block"; 
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}