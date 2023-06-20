let menus = document.querySelector('.mobile-menu');
let btn = document.querySelector('.navbar');
let closeBtn = document.querySelector('.close-button');
let links = document.querySelectorAll('.mobile-menu a');

//creating toggle function

function togle() {
    menus.classList.toggle('show-menu');
}

//adding event listners

btn.addEventListener('click', togle);

closeBtn.addEventListener('click', togle);

//adding event listeners o obile menu links

links.forEach(link => {
    link.addEventListener('click', togle);
  });