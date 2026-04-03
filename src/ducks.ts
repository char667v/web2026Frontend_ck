////////////////// RUBBER DUCK ASSIGNMENT /////////////////////////////
//////////// KUN for DUCK.HTML //////////////////////

//IMAGE SWAP VIRKER
const logo_box: HTMLElement | null = document.getElementById("logo_box");
const logo_img: HTMLImageElement | null = document.getElementById("logo_img") as HTMLImageElement | null;

if (logo_box && logo_img) {
  // tilføjet kør hover-koden kun hvis begge elementer findes
  logo_box!.addEventListener("mouseover", function (event: MouseEvent) {
    console.log(event);
    logo_img!.src = "/src/images/easterchicken.png";
  });

  logo_box!.addEventListener("mouseout", function () {
    logo_img!.src = "https://em-content.zobj.net/source/apple/391/duck_1f986.png";
  });
}

// // TJEK MED localStorage.getItem("messages") ELLER console.log(messages); I INSPECT -> CONCOLE
const form = document.getElementById("duckForm") as HTMLFormElement | null;
const textarea = document.getElementById("message") as HTMLTextAreaElement | null;
const statusEl = document.getElementById("status") as HTMLElement | null;
const outbox = document.getElementById("outbox") as HTMLElement | null;
const sentText = document.getElementById("sentText") as HTMLElement | null;
const list = document.getElementById("savedMessages") as HTMLUListElement | null;

let messages: string[] = []; //Dette gør at besked-systemet virker
// load: hent og vis

//////////////// EXERCISE 3 – Repetition exercise //////////////////
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

//////////////// EXERCISE 2 – MESSAGE TIMESTAMP //////////////////
// FORM
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

// /////////////// DROPDOWN DUCK OPTION ///////////////////

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

// /////////////// CUSTOM DUCK DROPDOWN  med billed ///////////////////
document.querySelectorAll<HTMLElement>(".duck-dropdown").forEach((dropdown) => {
    const trigger = dropdown.querySelector<HTMLButtonElement>(".duck-trigger");
    const menu = dropdown.querySelector<HTMLUListElement>(".duck-menu");
    const targetId = dropdown.dataset.target;
    const targetList = targetId ? document.getElementById(targetId) : null;

    if (!trigger || !menu || !targetList) return;

trigger.addEventListener("click", () => {
    console.log("trigger clicked");
    dropdown.classList.toggle("open");
    console.log("dropdown classes:", dropdown.classList);
});
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target as Node)) {
            dropdown.classList.remove("open");
        }
    });

    menu.querySelectorAll<HTMLElement>(".duck-option").forEach((option) => {
        option.addEventListener("click", () => {
          console.log("option clicked:", option.dataset.value);
            const value = option.dataset.value;
            const avatar = option.dataset.avatar;
            if (!value) return;

            const existing = targetList.querySelector(`li[data-value="${value}"]`);
            if (existing) {
                existing.remove();
            } else {
                const li = document.createElement("li");
                li.setAttribute("data-value", value);
                const img = document.createElement("img");
                img.src = avatar ?? "";
                img.alt = value;
                li.appendChild(img);
                const p = document.createElement("p");
                p.textContent = value;
                li.appendChild(p);
                targetList.appendChild(li);
            }

            dropdown.classList.remove("open");
        });
    });
});

//////////////// EXERCISE 3 – ASYNC: EXERCISE //////////////////
//////////// KUN i DUCK.HTML //////////////////////
// JOKE
const btnJoke2 = document.getElementById("btnJoke2") as HTMLButtonElement | null;
const jokeText2 = document.getElementById("jokeText2") as HTMLElement | null;

if (btnJoke2 && jokeText2) {
  btnJoke2.addEventListener("click", async function () {
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist";
    const response = await fetch(url, { method: "GET" });

    if (!response.ok) {
      jokeText2.textContent = "Something went wrong";
      return;
    }

    const data = await response.json();
    console.log(data);

    setTimeout(() => {
      if (data.type === "single") {
        jokeText2.textContent = data.joke;
      } else {
        jokeText2.textContent = data.setup + " - " + data.delivery;
      }
    }, 500); // delay på Mr. Ducks jokes
  });
}

//////////////// EXERCISE 3 – FORMS: EXERCISE //////////////////
//////////// KUN for USER.HTML //////////////////////
// User form
const userForm = document.getElementById("userForm") as HTMLFormElement | null;
const userNameInput = document.getElementById("userName") as HTMLInputElement | null;
const userEmailInput = document.getElementById("userEmail") as HTMLInputElement | null;
const userNameError = document.getElementById("userNameError") as HTMLElement | null;
const userEmailError = document.getElementById("userEmailError") as HTMLElement | null;
const userStatus = document.getElementById("userStatus") as HTMLElement | null;

function validateEkEmail(email: string): boolean {
  // Email validation
  return email.endsWith("@ek.dk");
}

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

    if (!validateEkEmail(userEmail)) {
      userEmailError.textContent = "Email must end with @ek.dk";
      return;
    }

    localStorage.setItem("duckUser", JSON.stringify({ name: userName, email: userEmail }));

    userStatus.textContent = "User created";
    userStatus.style.color = "#22c55e";

    userForm.reset();
  });
}
