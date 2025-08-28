//menu desplegable y focus en el primer enlace

const toggleMenu = document.getElementById('togglemenu');
const menu = document.getElementById('appmenu');

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('toggled');

    toggleMenu.classList.toggle('active')
const expanded= toggleMenu.getAttribute('aria-expanded') === 'true';
toggleMenu.setAttribute('aria-expanded', String(!expanded));

if(!expanded) {
    const primerEnlace = menu.querySelector ('a');
    if (primerEnlace) {
        primerEnlace.focus();
        }
    } else {
        toggleMenu.focus();
    }
});

document.addEventListener('click', (event) =>{
    const isClickInsideMenu= menu.contains(event.target);
    
    const isClickOnToggle= toggleMenu.contains(event.target);
    
    //si el click NO es en el menu no en el boton cerramos el menu
    if (!isClickInsideMenu && !isClickOnToggle && menu.classList.contains('toggled')) {
    
    menu.classList.remove('toggled');
        toggleMenu.classList.remove('active');
    toggleMenu.setAttribute('aria-expanded','false');
        }
    });

// animation slogan

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
    document.querySelector('.slogan').classList.add('visible');
    }, 1600);   
});


//comentarios// 

          document.getElementById('caja').addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = this.nombre.value.trim();
            const comment = this.comment.value.trim();
            
            if(nombre && comment) {
                const comentariosDiv = document.getElementById('comentarios');
                const nuevoComentario = document.createElement('div');
                nuevoComentario.className = 'comentario';
                
                // Formatear fecha
                const ahora = new Date();
                const fecha = ahora.toLocaleDateString('es-ES', { 
                    day: '2-digit', 
                    month: 'long', 
                    year: 'numeric' 
                });
                
                nuevoComentario.innerHTML = `
                    <strong>${nombre}</strong> 
                    <small>(${fecha})</small>
                    <p>${comment}</p>
                `;
                
                comentariosDiv.prepend(nuevoComentario);
                this.reset();
                
                // Animación para el nuevo comentario
                nuevoComentario.style.opacity = '0';
                nuevoComentario.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    nuevoComentario.style.transition = 'all 0.5s ease';
                    nuevoComentario.style.opacity = '1';
                    nuevoComentario.style.transform = 'translateY(0)';
                }, 100);
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });