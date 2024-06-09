// Navigation javascript
const navSlide = () => {
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
  
    lines.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards
            ${index / 7}s`;
        }
        });
      //lines animation
      lines.classList.toggle('toggle');
    });
  
  }
  
  
  navSlide();


  function myFunction(buttonId, contentId) {
    var moreContent = document.getElementById(contentId);
    var showButton = document.getElementById(buttonId);
  
    if (moreContent.className === "hidden") {
      moreContent.className = "profile";
      showButton.textContent = "[hide]";
    } else {
      moreContent.className = "hidden";
      showButton.textContent = "[show]";
    }
  }