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

// JavaScript array to store mobile version project information
const project = [
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'snap.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/Omwomo',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'snap.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/Omwomo',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'snap.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/Omwomo',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'snap.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/Omwomo',
  },
];

// JavaScript array to store desktop version project information
const projects = [
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'img/pop-img.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies2: ['Ruby', 'Bootstrap'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/Omwomo',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'img/pop-img.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies2: ['Ruby', 'Bootstrap'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/Omwomo',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'img/pop-img.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies2: ['Ruby', 'Bootstrap'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/Omwomo',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'img/pop-img.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies2: ['Ruby', 'Bootstrap'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/Omwomo',
  },
];

// Function to open the popup and populate project details for mobile version
function openPopup(project) {
  const popupContainer = document.querySelector('.popup-container');
  const popupHeading = popupContainer.querySelector('.pop-header');
  const popupImage = popupContainer.querySelector('.pop-img img');
  const popupText = popupContainer.querySelector('.pop-text p');
  const popupLangs = popupContainer.querySelector('.pop-langs ul');
  const liveLink = popupContainer.querySelector('.project-link');
  const sourceLink = popupContainer.querySelector('.github-link');

  // Populate project details
  popupHeading.textContent = project.name;
  popupText.textContent = project.description;
  popupImage.src = project.featuredImage;

  // Add technologies to the list
  popupLangs.innerHTML = '';
  project.technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.textContent = technology;
    popupLangs.appendChild(li);
  });

  // Set the link URLs
  liveLink.href = project.liveLink;
  sourceLink.href = project.sourceLink;

  // Show the popup
  popupContainer.style.display = 'block';
}

// Function to open the popup for desktop version and populate project details
function openPopups(projects) {
  const popupContainer = document.querySelector('.popup-containers');
  const popupHeading = popupContainer.querySelector('.pop-headers');
  const popupImage = popupContainer.querySelector('.pop-imgs img');
  const popupText = popupContainer.querySelector('.pop-texts p');
  const popupText2 = popupContainer.querySelector('.text-2');
  const popupLangs = popupContainer.querySelector('.pop-langss-new ul');
  const popupLangs2 = popupContainer.querySelector('.pop-langss ul');
  const liveLink = popupContainer.querySelector('.project-links');
  const sourceLink = popupContainer.querySelector('.github-links a');

  // Populate project details
  popupHeading.textContent = projects.name;
  popupText.textContent = projects.description;
  popupText2.textContent = projects.description;
  popupImage.src = projects.featuredImage;

  // Add technologies to the list
  popupLangs2.innerHTML = '';
  projects.technologies2.forEach((technology2) => {
    const lis = document.createElement('li');
    lis.textContent = technology2;
    popupLangs2.appendChild(lis);
  });

  popupLangs.innerHTML = '';
  projects.technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.textContent = technology;
    popupLangs.appendChild(li);
  });

  // Set the link URLs for mobile version
  liveLink.href = projects.liveLink;
  sourceLink.href = projects.sourceLink;

  // Show the popup for mobile version
  popupContainer.style.display = 'block';
}

// Function to close the popup for mobile version
function closePopup() {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.style.display = 'none';
}

// Function to close the popup for desktop version
function closePopups() {
  const popupContainer = document.querySelector('.popup-containers');
  popupContainer.style.display = 'none';
}

// Attach click event listeners to buttons
const mobileButtons = document.querySelectorAll('.button');
const desktopButtons = document.querySelectorAll('.buttons');

mobileButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    openPopup(project[index]); // Open the popup for the corresponding project
  });
});

desktopButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    openPopups(projects[index]); // Open the popup for the corresponding project
  });
});

// Attach click event listener to close button for mobile version
const closeButton = document.querySelector('.pop-btn');
closeButton.addEventListener('click', closePopup);

// Attach click event listener to close button for desktop version
const closeButtons = document.querySelector('.pop-btns');
closeButtons.addEventListener('click', closePopups);
