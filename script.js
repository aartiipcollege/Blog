const slideshow = document.getElementById('slideshow');

const images = [
  'https://plus.unsplash.com/premium_photo-1744723000766-fa841a75a3f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1596301181144-5ee0a7961e89?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

let index = 0;

function changeBackground() {
  slideshow.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

// Initial call
changeBackground();

// Change image every 3 seconds
setInterval(changeBackground, 3000);
