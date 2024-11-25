const modal = document.getElementById("modal");
const header = document.getElementById("modal-header");
const tab = document.getElementById("tab");
const closeBtn = document.getElementById("close-btn");

function openModal() {
  modal.classList.add("show");
  tab.classList.remove("show");
}

function closeModal() {
  modal.classList.remove("show");
  tab.classList.add("show");
}

closeBtn.addEventListener("click", closeModal);
tab.addEventListener("click", openModal);

openModal();
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const header = document.getElementById('modal-header');

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - modal.offsetLeft;
    offsetY = e.clientY - modal.offsetTop;
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      modal.style.left = `${x}px`;
      modal.style.top = `${y}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = 'auto';
  });
});
