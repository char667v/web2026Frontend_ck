////////////////// RUBBER DUCK ASSIGNMENT /////////////////////////////

const form = document.getElementById("duckForm");
const textarea = document.getElementById("message");
const statusEl = document.getElementById("status");
const sentText = document.getElementById("sentText");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const msg = textarea.value.trim();

  if (!msg) {
    statusEl.textContent = "Please write something first 😊";
    outbox.style.display = "none";
    return;
  }

  // "Send" (front-end only)
  statusEl.textContent = "Quack! Message sent to Mr. Duck ✅";
  // sentText.textContent = msg;
  // outbox.style.display = "block";

  // textarea.value = "";
  // textarea.focus();
});
