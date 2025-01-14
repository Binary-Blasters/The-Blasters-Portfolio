const hamburger = document.getElementById('hamburger');
    const navbarNav = document.getElementById('navbarNav');

    hamburger.addEventListener('click', () => {
      navbarNav.classList.toggle('active');
      removeNav();
    });

    const removeNav=()=>{
      setTimeout(() => {
        navbarNav.classList.remove('active')
      }, 1.5*1000);
    }