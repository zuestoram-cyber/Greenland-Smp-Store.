function openModal(title, description, image) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDescription").textContent = description;
  document.getElementById("modalImage").src = image;
  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Close modal if clicked outside
window.onclick = function(event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Scroll reveal animation
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));

// Contact form demo message
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully! (Demo only)");
  form.reset();
});
