const menus = document.querySelector('.mobile-menu');
const btn = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-button');
const links = document.querySelectorAll('.mobile-menu a');

function toggle() {
  menus.classList.toggle('show-menu');
}

// Adding event listeners
btn.addEventListener('click', toggle);
closeBtn.addEventListener('click', toggle);

// Adding event listeners to mobile menu links
links.forEach((link) => {
  link.addEventListener('click', toggle);
});
