// Obtener elementos
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Agregar evento click a todas las imágenes
document.querySelectorAll('.grid-item img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block'; // Mostrar modal
    modalImage.src = img.src; // Asignar la fuente de la imagen clicada
  });
});

// Cerrar modal al hacer clic en la "X"
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
