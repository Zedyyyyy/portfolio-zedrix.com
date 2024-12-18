const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});








function openModal(projectNumber) {
	// Open modal
	document.getElementById("myModal").style.display = "block";
	
	// Set images based on the project number
	const modalImages = document.getElementById("modal-images");
	modalImages.innerHTML = ''; // Clear previous images
	
	let images = [];
	
	// Define images for each project
	if (projectNumber === 1) {
	  images = ['./img/p1.png', './img/p2.png',' ./img/p3.png', './img/p4.png']; // Add images for Project 1
	} else if (projectNumber === 2) {
	  images = ['./img/b1.png', './img/b2.png','./img/b3.png', './img/b4.png','./img/b5.png', './img/b6.png']; // Add images for Project 2
	} else if (projectNumber === 3) {
	  images = ['./img/FINALS-APP-GROUP-BONDOC-TODO-LIST-orig.jpg']; // Add images for Project 3
	} else if (projectNumber === 4) {
	  images = ['./img/FINALS-APP-GROUP-BONDOC-CALCULATOR-orig.jpg']; // Add images for Project 4
	} else if (projectNumber === 5) {
	  images = ['./img/r1.jpg', './img/r4.jpg','./img/r3.jpg']; // Add images for Project 5
	}
	
	// Add the images to the modal
	images.forEach(image => {
	  const imgElement = document.createElement('img');
	  imgElement.src = image;
	  imgElement.alt = `Project ${projectNumber} image`;
	  modalImages.appendChild(imgElement);
	});
  }
  
  function closeModal() {
	// Close modal
	document.getElementById("myModal").style.display = "none";
  }
  