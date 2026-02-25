////////////////// RUBBER DUCK ASSIGNMENT /////////////////////////////

// IMAGE SWAP VIRKER
// const logo_box = document.getElementById("logo_box");
// const logo_img = document.getElementById("logo_img");

// logo_box.addEventListener("mouseover", function (event) {
//   console.log(event);
//   logo_img.src = "/src/images/easterchicken.png";
// });

// logo_box.addEventListener("mouseout", function () {
//   logo_img.src = "/src/images/batman_rubber_duck.png";
// });

//WRITTEN MESSAGE TOT THE CONSOLE WHEN HOVERING OVER LOGO
const logo_box = document.getElementById("logo_box");
const logo_img = document.getElementById("logo_img");

if (logo_box && logo_img) {
  logo_box.addEventListener("mouseover", function (event) {
    console.log("🦆 Mr. Duck says: Quack! Explain your problem to me…");
    console.log("Hover event:", event);

    logo_img.src = "/src/images/easterchicken.png";
  });

  logo_box.addEventListener("mouseout", function () {
    console.log("🦆 Mr. Duck says: Come back if you get stuck!");
    logo_img.src = "/src/images/batman_rubber_duck.png";
  });
}

//MESSGAE FORM VIRKER
// const form = document.getElementById("duckForm");
// const textarea = document.getElementById("message");
// const statusEl = document.getElementById("status");
// const sentText = document.getElementById("sentText");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const msg = textarea.value.trim();

//   if (!msg) {
//     statusEl.textContent = "Please write something first 😊";
//     outbox.style.display = "none";
//     return;
//   }

//   // "Send" (front-end only)
//   statusEl.textContent = "Quack! Message sent to Mr. Duck ✅";
//   // sentText.textContent = msg;
//   // outbox.style.display = "block";

//   // textarea.value = "";
//   // textarea.focus();
// });

//SAVE ALL MESSAGES (array + localStorage + DOM)
const form = document.getElementById("duckForm");
const textarea = document.getElementById("message");
const statusEl = document.getElementById("status");
const outbox = document.getElementById("outbox");
const sentText = document.getElementById("sentText");
const list = document.getElementById("savedMessages");

let messages = [];

// Når siden loader: hent og vis gemte beskeder
window.addEventListener("load", () => {
  const saved = localStorage.getItem("messages");
  messages = saved ? JSON.parse(saved) : [];
  showMessages();
});

// Når man sender: gem beskeden + vis igen
if (form && textarea && statusEl && outbox && sentText && list) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const msg = textarea.value.trim();

    if (!msg) {
      statusEl.textContent = "❌ You forgot to write me something first ❌";
      statusEl.style.color = "#ff4d4d"; // error
      outbox.style.display = "none";
      return;
    }

    statusEl.textContent = "Your message has been sent to Mr. Duck 🦆 Quaaack!";
    statusEl.style.color = "#22c55e"; // success
    sentText.textContent = msg;
    outbox.style.display = "block";

    messages.push(msg);
    localStorage.setItem("messages", JSON.stringify(messages));

    showMessages();

    textarea.value = "";
    textarea.focus();
  });
}

function showMessages() {
  if (!list) return;

  list.innerHTML = "";
  messages.forEach((m) => {
    const li = document.createElement("li");
    li.textContent = m;
    list.appendChild(li);
  });
}

//DROPDOWN DUCK OPTION
// 1) Tegneserie-ænder
const cartoonSelect = document.getElementById("cartoonSelect");
const cartoonList = document.getElementById("cartoonList");

if (cartoonSelect && cartoonList) {
  cartoonSelect.addEventListener("change", () => {
    const value = cartoonSelect.value;
    if (value === "") return;

    const existing = cartoonList.querySelector(`li[data-value="${value}"]`);

    if (existing) existing.remove();
    else {
      const li = document.createElement("li");
      li.textContent = value;
      li.setAttribute("data-value", value);
      cartoonList.appendChild(li);
    }

    cartoonSelect.value = "";
  });
}

// 2) Danske andearter
const speciesSelect = document.getElementById("speciesSelect");
const speciesList = document.getElementById("speciesList");

if (speciesSelect && speciesList) {
  speciesSelect.addEventListener("change", () => {
    const value = speciesSelect.value;
    if (value === "") return;

    const existing = speciesList.querySelector(`li[data-value="${value}"]`);

    if (existing) existing.remove();
    else {
      const li = document.createElement("li");
      li.textContent = value;
      li.setAttribute("data-value", value);
      speciesList.appendChild(li);
    }

    speciesSelect.value = "";
  });
}

// 3) Sydamerikanske ænder
const southAmericaSelect = document.getElementById("southAmericaSelect");
const southAmericaList = document.getElementById("southAmericaList");

if (southAmericaSelect && southAmericaList) {
  southAmericaSelect.addEventListener("change", () => {
    const value = southAmericaSelect.value;
    if (value === "") return;

    const existing = southAmericaList.querySelector(`li[data-value="${value}"]`);

    if (existing) existing.remove();
    else {
      const li = document.createElement("li");
      li.textContent = value;
      li.setAttribute("data-value", value);
      southAmericaList.appendChild(li);
    }

    southAmericaSelect.value = "";
  });
}

// ///////// DROPDOWN DUCK OPTION CUSTOM //////////////

// function setupDuckDropdown(dropdownEl) {
//   const button = dropdownEl.querySelector(".duck-trigger");
//   const menu = dropdownEl.querySelector(".duck-menu");
//   const targetId = dropdownEl.dataset.target;

//   if (!button || !menu || !targetId) return;

//   const targetList = document.getElementById(targetId);
//   if (!targetList) return;

//   const placeholderP = button.querySelector("p");
//   const placeholderText = (placeholderP && placeholderP.textContent) || "-- vælg mellem --";

//   button.addEventListener("click", (e) => {
//     e.preventDefault();

//     document.querySelectorAll(".duck-dropdown.open").forEach((d) => {
//       if (d !== dropdownEl) d.classList.remove("open");
//     });

//     dropdownEl.classList.toggle("open");
//   });

//   document.addEventListener("click", (e) => {
//     if (!dropdownEl.contains(e.target)) dropdownEl.classList.remove("open");
//   });

//   menu.addEventListener("click", (e) => {
//     const opt = e.target && e.target.closest ? e.target.closest(".duck-option") : null;
//     if (!opt) return;

//     const value = opt.dataset.value || "";
//     if (!value) return;

//     const avatar = opt.dataset.avatar || "";

//     const children = Array.from(targetList.children);
//     const existing = children.find((li) => li.dataset && li.dataset.value === value);

//     if (existing) {
//       existing.remove();
//     } else {
//       const li = document.createElement("li");
//       li.dataset.value = value;

//       if (avatar) {
//         const img = document.createElement("img");
//         img.src = avatar;
//         img.alt = "";
//         li.appendChild(img);
//       }

//       const p = document.createElement("p");
//       p.textContent = value;
//       li.appendChild(p);

//       targetList.appendChild(li);
//     }

//     dropdownEl.classList.remove("open");
//     if (placeholderP) placeholderP.textContent = placeholderText;
//   });
// }

// window.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".duck-dropdown").forEach(setupDuckDropdown);
// });
