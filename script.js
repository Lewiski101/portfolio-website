function toggleMenu() {
    const menu = document.querySelector('.head');
    menu.classList.toggle('active');
}

document.addEventListener("scroll", () => {
    const section = document.querySelector(".section1");
    const sectionPosition = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
  
    if (sectionPosition < screenHeight) {
      section.style.left = "0"; // Move to its original position
    }
  });
  
  document.addEventListener("scroll", () => {
    const section = document.querySelector(".section2");
    const sectionPosition = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
  
    if (sectionPosition < screenHeight) {
      section.style.right = "0"; // Move to its original position from the right
    }
  });
  
  document.addEventListener("scroll", () => {
    const section = document.querySelector(".contactblock");
    const sectionPosition = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
  
    if (sectionPosition < screenHeight) {
      section.style.left = "0"; // Move to its original position
    }
  });

