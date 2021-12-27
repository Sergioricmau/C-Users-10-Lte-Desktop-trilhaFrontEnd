const hamburguer = document.querySelector('.hamburguer');
    const navLinks = document.querySelector ('.linksMenu');
    hamburguer.addEventListener('click',()=>{
        navLinks.classList.toggle('open');
    });
