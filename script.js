const header = document.querySelector('header');
const toggleBtn = document.getElementById('toggleBtn');
const toggleIcon = document.getElementById('toggleIcon');
const toggleText = document.getElementById('toggle-text');
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const skillsSection = document.getElementById('skills');
const downloadbtn = document.getElementById('downloadBtn');
const projectSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');
window.addEventListener('scroll', (e)=>{
    header.classList.toggle('sticky', window.scrollY > 0); // Add or remove sticky class based on scroll position
})

// Function to check if element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to load the progress bars
  function loadProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
  
    progressBars.forEach(bar => {
      if (isElementInViewport(bar)) {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = `${percentage}%`;
      }
    });
  }
  
  // Listen for scroll event and check when to load the bars
  window.addEventListener('scroll', loadProgressBars);
  
  // Load the progress bars initially if they are already in view
  window.addEventListener('load', loadProgressBars);
  
let isLightMode = true;

;
menuIcon.addEventListener('click', ()=>{
    if(!isMenuActive){
        navList.classList.add('active'); 
    }else{
        navList.classList.remove('active');
    }
});

toggleBtn.addEventListener('click', () => {
    if(isLightMode){
        document.body.classList.add('dark-mode');
        toggleBtn.classList.add('dark-mode');
        homeSection.classList.add('dark-mode');
        aboutSection.classList.add('dark-mode');
        skillsSection.classList.add('dark-mode');
        projectSection.classList.add('dark-mode');
        contactSection.classList.add('dark-mode');
        header.classList.add('dark-mode');
        toggleText.textContent = 'Dark';
        toggleText.style.color = 'white';
        toggleIcon.src = 'dark mode-woback-1.png';
    }else{
        document.body.classList.remove('dark-mode');
        toggleBtn.classList.remove('dark-mode');
        homeSection.classList.remove('dark-mode');
        aboutSection.classList.remove('dark-mode');
        skillsSection.classList.remove('dark-mode');
        projectSection.classList.remove('dark-mode');
        contactSection.classList.remove('dark-mode');
        header.classList.remove('dark-mode');
        toggleText.textContent = 'Light';
        toggleText.style.color = 'black';
        toggleIcon.src = 'light mode.png';
    }

    isLightMode = !isLightMode;
})

