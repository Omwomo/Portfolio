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
// //////////////////////////////////////

// //////////////////////////////////////

// Function to generate the HTML code for a project
function generateProjectHTML(projectName, imageSrc, company, role, year) {
  return `
      <div class='project'>
          <img class='snapshot' src='${imageSrc}'>
          <div class='info_blocks'>
              <div class='projos'>
                  <h2 class='project_names'>${projectName}</h2>
                  <ul class='detailss'>
                      <li class='details'>${company}</li>
                      <li class='details'><img src='count.svg'></li>
                      <li class='details'>${role}</li>
                      <li class='details'><img src='count.svg'></li>
                      <li class='details'>${year}</li>
                  </ul>
              </div>
              <p class='infos'>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
              <ul class='languagess'>
                  <li class='languages' id='html1'>HTML</li>
                  <li class='languages' id='css1'>CSS</li>
                  <li class='languages' id='javascript1'>Javascript</li>
              </ul>
              <button class='buttons' type='button'>see project</button>
          </div>
      </div>
  `;
}

// Function to generate the HTML code for the entire 'work' section
function generateWorkSectionHTML() {
  const projects = [
    {
      projectName: 'Tonic',
      imageSrc: 'snap.svg',
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2023',
    },
    {
      projectName: 'Multi-Post stories',
      imageSrc: 'snap.svg',
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2023',
    },
    {
      projectName: 'Facebook 360',
      imageSrc: 'snap1.svg',
      company: 'FACEBOOK',
      role: 'Back End Dev',
      year: '2023',
    },
    {
      projectName: 'Uber Navigation',
      imageSrc: 'snap2.svg',
      company: 'Uber',
      role: 'Back End Dev',
      year: '2023',
    },
  ];

  let workHTML = `
      <section class='work'>
          <section class='works' id='desktops'>
  `;

  // Generate HTML for each project
  projects.forEach((project) => {
    workHTML += generateProjectHTML(
      project.projectName,
      project.imageSrc,
      project.company,
      project.role,
      project.year,
    );
  });

  workHTML += `
          </section>
      </section>
  `;

  return workHTML;
}

// Call the function to generate the 'work' section HTML
const workSectionHTML = generateWorkSectionHTML();

// Insert the generated HTML into the document
document.getElementById('my-work-container').innerHTML = workSectionHTML;

// ///////////////////////////////////////
// Function to generate the HTML code for the mobile version of a project
function generateMobileProjectHTML(projectName, imageSrc, company, role, year) {
  return `
      <div class="projects">
          <img class="snapshots" src="${imageSrc}">
          <div class="info_block">
              <div class="projo">
                  <h2 class="project_name">${projectName}</h2>
                  <ul class="details">
                      <li class="detail">${company}</li>
                      <li class="detail"><img src="count.svg"></li>
                      <li class="detail">${role}</li>
                      <li class="detail"><img src="count.svg"></li>
                      <li class="detail">${year}</li>
                  </ul>
              </div>
              <p class="info">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
              <ul class="languages">
                  <li class="language" id="html">HTML</li>
                  <li class="language" id="css">CSS</li>
                  <li class="language" id="javascript">Javascript</li>
              </ul>
              <button class="button">see project</button>
          </div>
      </div>
  `;
}

// Function to generate the HTML code for the entire mobile version of the "work" section
function generateMobileWorkSectionHTML() {
  const mobileProjects = [
    {
      projectName: 'Tonic',
      imageSrc: 'snap2.svg',
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2023',
    },
    {
      projectName: 'Multi-Post Stories',
      imageSrc: 'snap3.svg',
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2023',
    },
    {
      projectName: 'Tonic',
      imageSrc: 'snap2.svg',
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2023',
    },
    {
      projectName: 'Multi-Post Stories',
      imageSrc: 'snap3.svg',
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2023',
    },
  ];

  let mobileWorkHTML = `
      <section class="work" id="mobiles">
  `;

  // Generate HTML for each mobile project
  mobileProjects.forEach((project) => {
    mobileWorkHTML += generateMobileProjectHTML(
      project.projectName,
      project.imageSrc,
      project.company,
      project.role,
      project.year,
    );
  });

  mobileWorkHTML += `
      </section>
  `;

  return mobileWorkHTML;
}

// Call the function to generate the mobile version of the "work" section HTML
const mobileWorkSectionHTML = generateMobileWorkSectionHTML();

// Insert the generated mobile version HTML into the document
document.getElementById('my-work-container-mobile').innerHTML = mobileWorkSectionHTML;

// /////////////////////////////////////////

// JavaScript array to store mobile version popuop module information

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
function openPopup(projects) {
  const popupContainer = document.querySelector('.popup-container');
  const popupHeading = popupContainer.querySelector('.pop-header');
  const popupImage = popupContainer.querySelector('.pop-img img');
  const popupText = popupContainer.querySelector('.pop-text p');
  const popupLangs = popupContainer.querySelector('.pop-langs ul');
  const liveLink = popupContainer.querySelector('.project-link');
  const sourceLink = popupContainer.querySelector('.github-link');

  // Populate project details
  popupHeading.textContent = projects.name;
  popupText.textContent = projects.description;
  popupImage.src = projects.featuredImage;

  // Add technologies to the list
  popupLangs.innerHTML = '';
  projects.technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.textContent = technology;
    popupLangs.appendChild(li);
  });

  // Set the link URLs
  liveLink.href = projects.liveLink;
  sourceLink.href = projects.sourceLink;

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
    openPopup(projects[index]); // Open the popup for the corresponding project
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
document.getElementById('fs-frm').addEventListener('submit', (event) => {
  // prevent default action

  // get email input value.
  const emailValue = document.getElementById('email-address').value;

  // Check for email casing.
  if (emailValue === emailValue.toLowerCase()) {
    document.getElementById('error-message').innerHTML = 'form submitted succesfully';
  } else {
    document.getElementById('error-message').innerHTML = 'Email must be in lower case';
    event.preventDefault();
  }
});