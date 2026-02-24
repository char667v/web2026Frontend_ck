////////////////// RUBBER DUCK ASSIGNMENT /////////////////////////////
var logo_box = document.getElementById("logo_box");
var logo_img = document.getElementById("logo_img");

logo_box.addEventListener("mouseover", function (event) {
  console.log(event);
  logo_img.src = "/src/images/easterchicken.png";
});

logo_box.addEventListener("mouseout", function () {
  logo_img.src = "/src/images/batman_rubber_duck.png";
});

/////////////////////////////
const form = document.getElementById("duckForm");
const textarea = document.getElementById("message");
const statusEl = document.getElementById("status");
const outbox = document.getElementById("outbox");
const sentText = document.getElementById("sentText");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const msg = textarea.value.trim();

  if (!msg) {
    statusEl.textContent = "Please write something first 🙂";
    outbox.style.display = "none";
    return;
  }

  // "Send" (front-end only)
  statusEl.textContent = "Quack! Message sent to Mr. Duck ✅";
  sentText.textContent = msg;
  outbox.style.display = "block";

  textarea.value = "";
  textarea.focus();
});
