// Botones "Ver más"
const botones = document.querySelectorAll('.btn-more');
botones.forEach(btn => {
    btn.addEventListener('click', () => {
        const cardTitle = btn.previousElementSibling.previousElementSibling.textContent;
        alert(`¡Vas a ver más sobre "${cardTitle}"!`);
    });
});

// Modo oscuro
const body = document.body;
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = 'Modo Oscuro';
darkModeBtn.style.position = 'fixed';
darkModeBtn.style.bottom = '20px';
darkModeBtn.style.right = '20px';
darkModeBtn.style.padding = '0.5rem 1rem';
darkModeBtn.style.backgroundColor = '#222';
darkModeBtn.style.color = '#fff';
darkModeBtn.style.border = 'none';
darkModeBtn.style.borderRadius = '8px';
darkModeBtn.style.cursor = 'pointer';
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
