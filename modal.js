const modal = document.getElementById("modal");
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
