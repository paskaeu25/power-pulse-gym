// toggle responsive menu
const toggleMenuBtn = document.querySelector('#toggleBtn');
const navLinks = document.querySelector('#navLinksRow');
const joinBtn = document.querySelector('#joinBtn');

toggleMenuBtn.addEventListener('click', toggleMenu);
joinBtn.addEventListener('click', removeActiveClass);
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    removeActiveClass();
  }
});

function toggleMenu() {
  navLinks.classList.toggle('active');
}

function removeActiveClass() {
  navLinks.classList.remove('active');
}
