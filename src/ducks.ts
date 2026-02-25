////////////////// RUBBER DUCK ASSIGNMENT /////////////////////////////

// IMAGE SWAP VIRKER
// const logo_box: HTMLElement | null = document.getElementById("logo_box");
// const logo_img: HTMLImageElement | null = document.getElementById("logo_img") as HTMLImageElement | null;

// logo_box!.addEventListener("mouseover", function (event: MouseEvent) {
//   console.log(event);
//   logo_img!.src = "/src/images/easterchicken.png";
// });

// logo_box!.addEventListener("mouseout", function () {
//   logo_img!.src = "/src/images/batman_rubber_duck.png";
// });

//WRITTEN MESSAGE IN THE CONSOLE WHEN HOVERING OVER LOGO
const logo_box: HTMLElement | null = document.getElementById("logo_box");
const logo_img: HTMLImageElement | null = document.getElementById("logo_img") as HTMLImageElement | null;

if (logo_box && logo_img) {
  logo_box.addEventListener("mouseover", function (event: MouseEvent) {
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
// TJEK MED localStorage.getItem("messages") ELLER console.log(messages); I INSPECT -> CONCOLE
const form = document.getElementById("duckForm") as HTMLFormElement;
const textarea = document.getElementById("message") as HTMLTextAreaElement;
const statusEl = document.getElementById("status") as HTMLElement;
const outbox = document.getElementById("outbox") as HTMLElement;
const sentText = document.getElementById("sentText") as HTMLElement;
const list = document.getElementById("savedMessages") as HTMLUListElement;

let messages: string[] = [];

// load: hent og vis
window.addEventListener("load", () => {
  const saved = localStorage.getItem("messages");
  messages = saved ? JSON.parse(saved) : [];
  showMessages();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const msg = textarea.value.trim();

  if (!msg) {
    statusEl.textContent = "❌ You forgot to write me something first ❌";
    outbox.style.display = "none";
    return;
  }

  statusEl.textContent = "Your message has been sent to Mr. Duck 🦆 Quaaack!";
  sentText.textContent = msg;
  outbox.style.display = "block";

  // GEM:
  messages.push(msg);
  localStorage.setItem("messages", JSON.stringify(messages));

  // VIS:
  showMessages();

  textarea.value = "";
});

function showMessages() {
  list.innerHTML = "";
  messages.forEach((m) => {
    const li = document.createElement("li");
    li.textContent = m;
    list.appendChild(li);
  });
}

//DROPDOWN DUCK OPTION
// 1) Tegneserie-ænder
const cartoonSelect = document.getElementById("cartoonSelect") as HTMLSelectElement | null;
const cartoonList = document.getElementById("cartoonList") as HTMLUListElement | null;

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
const speciesSelect = document.getElementById("speciesSelect") as HTMLSelectElement | null;
const speciesList = document.getElementById("speciesList") as HTMLUListElement | null;

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

// 3) Sydamerika-ænder
const southAmericaSelect = document.getElementById("southAmericaSelect") as HTMLSelectElement | null;
const southAmericaList = document.getElementById("southAmericaList") as HTMLUListElement | null;

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
