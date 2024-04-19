AOS.init({
	duration: 1200,
})
window.onload = function () {
	let slider = new MicroSlider('.micro-slider',{
		indicators: true,
		indicatorText: '',
		perspectiveFactor: 1.0
	});

	document.getElementById('nextSlide').addEventListener("click",function (e) {
		slider.next();
	})
	document.getElementById('prevSlide').addEventListener("click",function (e) {
		slider.prev();
	})
}