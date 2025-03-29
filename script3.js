document.getElementById("rotationSlider").addEventListener("input", function () {
	const angle = this.value;
	const cube = document.querySelector(".cube");
	cube.style.transform = `rotateX(${angle}deg) rotateY(${angle}deg)`;
});
