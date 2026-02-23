//alert("Hej Daniel");

const box: HTMLElement | null = document.getElementById("box"); 

box.addEventListener("mouseover", function(event: MouseEvent) {
    // function runs when user clicks on box
    console.log(event);
    this.style.backgroundColor = 'red';
})

box.addEventListener("mouseout", function(event: MouseEvent) {
    box.style.backgroundColor = 'blue'
});


const btn: HTMLElement | null = document.getElementById("btnHover");
const div: HTMLElement | null = document.getElementById("divText");

btn.addEventListener("mouseover", () => {
    div.classList.remove("hidden");
})
btn.addEventListener("mouseout", () => {
    div.classList.add("hidden");
})