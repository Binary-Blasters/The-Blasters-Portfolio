const hamburger = document.getElementById('hamburger');
    const navbarNav = document.getElementById('navbarNav');

    hamburger.addEventListener('click', () => {
      navbarNav.classList.toggle('active');
    });