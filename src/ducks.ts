////////////////// RUBBER DUCK ASSIGNMENT /////////////////////////////

//IMAGE SWAP VIRKER
const logo_box: HTMLElement | null = document.getElementById("logo_box");
const logo_img: HTMLImageElement | null = document.getElementById("logo_img") as HTMLImageElement | null;

if (logo_box && logo_img) { // tilføjet kør hover-koden kun hvis begge elementer findes
logo_box!.addEventListener("mouseover", function (event: MouseEvent) {
  console.log(event);
  logo_img!.src = "/src/images/easterchicken.png";
});

logo_box!.addEventListener("mouseout", function () {
  logo_img!.src = "/src/images/duck_ck.png";
});
}

// //WRITTEN MESSAGE IN THE CONSOLE WHEN HOVERING OVER LOGO
// Har udkommenteret denne da man ikke kan loade to scripts der begge deklarerer logo_box globalt i samme scope
// const logo_box: HTMLElement | null = document.getElementById("logo_box");
// const logo_img: HTMLImageElement | null = document.getElementById("logo_img") as HTMLImageElement | null;

// if (logo_box && logo_img) {
//   logo_box.addEventListener("mouseover", function (event: MouseEvent) {
//     console.log("🦆 Mr. Duck says: Quack! Explain your problem to me…");
//     console.log("Hover event:", event);
//     logo_img.src = "/src/images/easterchicken.png";
//   });

//   logo_box.addEventListener("mouseout", function () {
//     console.log("🦆 Mr. Duck says: Come back if you get stuck!");
//     logo_img.src = "/src/images/batman_rubber_duck.png";
//   });
// }

// //MESSGAE FORM VIRKER
// // const form = document.getElementById("duckForm");
// // const textarea = document.getElementById("message");
// // const statusEl = document.getElementById("status");
// // const sentText = document.getElementById("sentText");

// // form.addEventListener("submit", (e) => {
// //   e.preventDefault();

// //   const msg = textarea.value.trim();

// //   if (!msg) {
// //     statusEl.textContent = "Please write something first 😊";
// //     outbox.style.display = "none";
// //     return;
// //   }

// //   // "Send" (front-end only)
// //   statusEl.textContent = "Quack! Message sent to Mr. Duck ✅";
// //   // sentText.textContent = msg;
// //   // outbox.style.display = "block";

// //   // textarea.value = "";
// //   // textarea.focus();
// // });

// //SAVE ALL MESSAGES (array + localStorage + DOM)
// // TJEK MED localStorage.getItem("messages") ELLER console.log(messages); I INSPECT -> CONCOLE
const form = document.getElementById("duckForm") as HTMLFormElement | null;
const textarea = document.getElementById("message") as HTMLTextAreaElement | null;
const statusEl = document.getElementById("status") as HTMLElement | null;
const outbox = document.getElementById("outbox") as HTMLElement | null;
const sentText = document.getElementById("sentText") as HTMLElement | null;
const list = document.getElementById("savedMessages") as HTMLUListElement | null;

let messages: string[] = []; //Dette gør at besked-systemet virker

// load: hent og vis
// window.addEventListener("load", () => {
//   const saved = localStorage.getItem("messages");
//   messages = saved ? JSON.parse(saved) : [];
//   showMessages();
// });

//////////////// EXERCISE 1 – MR. DUCK GREETING //////////////////
// linje 72-77 er ændret til nedenstående

// load: hent og vis
// window.addEventListener("load", () => {
//   const userName = prompt("What is your name?");

//   if (userName) {
//     statusEl.textContent = `Hello ${userName}!`;
//   }

//   const saved = localStorage.getItem("messages");
//   messages = saved ? JSON.parse(saved) : [];
//   showMessages();
// });

// linje 84-94 er ændret til nedenstående
// load: hent og vis
window.addEventListener("load", () => {
  const savedUser = localStorage.getItem("duckUser");

  if (savedUser && statusEl) {
    const user = JSON.parse(savedUser);
    statusEl.textContent = `Hello ${user.name}!`;
  } else if (statusEl) {
    const userName = prompt("What is your name?");

    if (userName) {
      statusEl.textContent = `Hello ${userName}!`;
    }
  }

  const saved = localStorage.getItem("messages");
  messages = saved ? JSON.parse(saved) : [];
  showMessages();
});

/////////////// FORM //////////////

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const msg = textarea.value.trim();

//   if (!msg) {
//     statusEl.textContent = "❌ You forgot to write me something first ❌";
//     statusEl.style.color = "#ff4d4d"; // error
//     outbox.style.display = "none";
//     return;
//   }

//   statusEl.textContent = "Your message has been sent to Mr. Duck 🦆 Quaaack!";
//   statusEl.style.color = "#22c55e"; // success
//   sentText.textContent = msg;
//   outbox.style.display = "block";

//   // GEM:
//   messages.push(msg);
//   localStorage.setItem("messages", JSON.stringify(messages));

//   // VIS:
//   showMessages();

//   textarea.value = "";
// });

// function showMessages() {
//   list.innerHTML = "";
//   messages.forEach((m) => {
//     const li = document.createElement("li");
//     li.textContent = m;
//     list.appendChild(li);
//   });
// }

//////////////// EXERCISE 2 – MESSAGE TIMESTAMP //////////////////
// linje 98-132 er ændret til nedenstående
if (form && textarea && statusEl && outbox && sentText) {
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const msg = textarea.value.trim();

  if (!msg) {
    statusEl.textContent = "❌ You forgot to write me something first ❌";
    statusEl.style.color = "#ff4d4d"; // error
    outbox.style.display = "none";
    return;
  }

  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const timestamp = `${day}/${month}/${year}, ${hours}:${minutes}`;
  const fullMessage = `${timestamp} - ${msg}`;

  statusEl.textContent = "Your message has been sent to Mr. Duck 🦆 Quaaack!";
  statusEl.style.color = "#22c55e"; // success
  sentText.textContent = fullMessage;
  outbox.style.display = "block";

  // GEM:
  messages.push(fullMessage);
  localStorage.setItem("messages", JSON.stringify(messages));

  // VIS:
  showMessages();

  textarea.value = "";
});
}

function showMessages() {
  if (!list) return;

  list.innerHTML = "";
  messages.forEach((m) => {
    const li = document.createElement("li");
    li.textContent = m;
    li.title = m;
    list.appendChild(li);
  });
}


// /////////////// DROPDOWN MENU //////////////

// //DROPDOWN DUCK OPTION
// //1) Tegneserie-ænder
// // const cartoonSelect = document.getElementById("cartoonSelect") as HTMLSelectElement | null;
// // const cartoonList = document.getElementById("cartoonList") as HTMLUListElement | null;

// // if (cartoonSelect && cartoonList) {
// //   cartoonSelect.addEventListener("change", () => {
// //     const value = cartoonSelect.value;
// //     if (value === "") return;

// //     const existing = cartoonList.querySelector(`li[data-value="${value}"]`);

// //     if (existing) existing.remove();
// //     else {
// //       const li = document.createElement("li");
// //       li.textContent = value;
// //       li.setAttribute("data-value", value);
// //       cartoonList.appendChild(li);
// //     }

// //     cartoonSelect.value = "";
// //   });
// // }

// // // 2) Danske andearter
// // const speciesSelect = document.getElementById("speciesSelect") as HTMLSelectElement | null;
// // const speciesList = document.getElementById("speciesList") as HTMLUListElement | null;

// // if (speciesSelect && speciesList) {
// //   speciesSelect.addEventListener("change", () => {
// //     const value = speciesSelect.value;
// //     if (value === "") return;

// //     const existing = speciesList.querySelector(`li[data-value="${value}"]`);

// //     if (existing) existing.remove();
// //     else {
// //       const li = document.createElement("li");
// //       li.textContent = value;
// //       li.setAttribute("data-value", value);
// //       speciesList.appendChild(li);
// //     }

// //     speciesSelect.value = "";
// //   });
// // }

// // // 3) Sydamerika-ænder
// // const southAmericaSelect = document.getElementById("southAmericaSelect") as HTMLSelectElement | null;
// // const southAmericaList = document.getElementById("southAmericaList") as HTMLUListElement | null;

// // if (southAmericaSelect && southAmericaList) {
// //   southAmericaSelect.addEventListener("change", () => {
// //     const value = southAmericaSelect.value;
// //     if (value === "") return;

// //     const existing = southAmericaList.querySelector(`li[data-value="${value}"]`);

// //     if (existing) existing.remove();
// //     else {
// //       const li = document.createElement("li");
// //       li.textContent = value;
// //       li.setAttribute("data-value", value);
// //       southAmericaList.appendChild(li);
// //     }

// //     southAmericaSelect.value = "";
// //   });
// // }

// ////////// Virker kun for DUCK_TEST.HTML //////////////////////
// // ///////// DROPDOWN DUCK OPTION CUSTOM //////////////

function setupDuckDropdown(dropdownEl: HTMLElement): void {
  const button = dropdownEl.querySelector(".duck-trigger") as HTMLButtonElement | null;
  const menu = dropdownEl.querySelector(".duck-menu") as HTMLUListElement | null;
  const targetId = dropdownEl.dataset.target;

  if (!button || !menu || !targetId) return;

  const targetList = document.getElementById(targetId) as HTMLUListElement | null;
  if (!targetList) return;

  const placeholderP = button.querySelector("p") as HTMLParagraphElement | null;
  const placeholderText = placeholderP?.textContent ?? "-- vælg mellem --";

  // Åbn/luk (og luk de andre)
  button.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();

    document.querySelectorAll<HTMLElement>(".duck-dropdown.open").forEach((d) => {
      if (d !== dropdownEl) d.classList.remove("open");
    });

    dropdownEl.classList.toggle("open");
  });

  // Klik udenfor lukker
  document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as Node | null;
    if (target && !dropdownEl.contains(target)) dropdownEl.classList.remove("open");
  });

  // Klik på option (event delegation)
  menu.addEventListener("click", (e: MouseEvent) => {
    const t = e.target as HTMLElement | null;
    const opt = t?.closest(".duck-option") as HTMLElement | null;
    if (!opt) return;

    const value = opt.dataset.value ?? "";
    if (!value) return;

    const avatar = opt.dataset.avatar ?? "";

    // find eksisterende (uden querySelector-escaping)
    const existing = Array.from(targetList.children).find((li) => {
      return (li as HTMLElement).dataset.value === value;
    }) as HTMLLIElement | undefined;

    if (existing) {
      existing.remove();
    } else {
      const li = document.createElement("li");
      li.dataset.value = value;

      if (avatar) {
        const img = document.createElement("img");
        img.src = avatar;
        img.alt = "";
        li.appendChild(img);
      }

      const p = document.createElement("p");
      p.textContent = value;
      li.appendChild(p);

      targetList.appendChild(li);
    }

    dropdownEl.classList.remove("open");
    if (placeholderP) placeholderP.textContent = placeholderText;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll<HTMLElement>(".duck-dropdown").forEach(setupDuckDropdown);
});

// ////////// KUN for USER.HTML //////////////////////
const userForm = document.getElementById("userForm") as HTMLFormElement | null;
const userNameInput = document.getElementById("userName") as HTMLInputElement | null;
const userEmailInput = document.getElementById("userEmail") as HTMLInputElement | null;
const userNameError = document.getElementById("userNameError") as HTMLElement | null;
const userEmailError = document.getElementById("userEmailError") as HTMLElement | null;
const userStatus = document.getElementById("userStatus") as HTMLElement | null;

if (userForm && userNameInput && userEmailInput && userNameError && userEmailError && userStatus) {
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = userNameInput.value.trim();
    const userEmail = userEmailInput.value.trim();

    userNameError.textContent = "";
    userEmailError.textContent = "";
    userStatus.textContent = "";

    if (userName === "") {
      userNameError.textContent = "Please write your name";
      return;
    }

    if (userEmail === "") {
      userEmailError.textContent = "Please write your email";
      return;
    }

    localStorage.setItem("duckUser", JSON.stringify({ name: userName, email: userEmail }));

    userStatus.textContent = "User created";
    userStatus.style.color = "#22c55e";

    userForm.reset();
  });
}