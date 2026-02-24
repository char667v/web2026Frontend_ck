////////////////// RUBBER DUCK ASSIGNMENT /////////////////////////////

// ducks.js
var logo_box = document.getElementById("logo_box");
var logo_img = document.getElementById("logo_img");

if (logo_box && logo_img) {
  logo_box.addEventListener("mouseover", function (event) {
    console.log("🦆 Mr. Duck says: Quack! Tell me your problem…");
    console.log(event);
    logo_img.src = "/src/images/easterchicken.png";
  });

  logo_box.addEventListener("mouseout", function () {
    console.log("🦆 Mr. Duck says: I'll be here when you need me.");
    logo_img.src = "/src/images/batman_rubber_duck.png";
  });
}

// IMAGE SWAP VIRKER
// var logo_box = document.getElementById("logo_box");
// var logo_img = document.getElementById("logo_img");

// logo_box.addEventListener("mouseover", function (event) {
//   console.log(event);
//   logo_img.src = "/src/images/easterchicken.png";
// });

// logo_box.addEventListener("mouseout", function () {
//   logo_img.src = "/src/images/batman_rubber_duck.png";
// });

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
