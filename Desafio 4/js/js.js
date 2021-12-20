const botao = document.querySelector('.botao');
    const navLinks = document.querySelector ('.menuLista');
    botao.addEventListener('click',()=>{
        navLinks.classList.toggle('open');
    });