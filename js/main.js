document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  // Example: change color depending on scroll position
  if (scrollY > 200) {
    nav.style.color = '#000';   // dark text
  } else {
    nav.style.color = '#fff';   // light text
  }
});

