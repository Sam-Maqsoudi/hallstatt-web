document.addEventListener('DOMContentLoaded', () => {
  const navUl = document.querySelector('.nav-container');
  const toggleButton = document.querySelector('.menu-toggle');
  toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });
});