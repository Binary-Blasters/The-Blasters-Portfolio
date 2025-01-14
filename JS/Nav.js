const hamburger = document.getElementById('hamburger');
    const navbarNav = document.getElementById('navbarNav');
    const content = document.getElementById('content');

    hamburger.addEventListener('click', () => {
      navbarNav.classList.toggle('active');
      content.classList.toggle('shifted');
    });