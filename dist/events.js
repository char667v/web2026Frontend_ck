//alert("Hej Daniel");
var box = document.getElementById("box");
box.addEventListener("mouseover", function (event) {
    // function runs when user clicks on box
    console.log(event);
    this.style.backgroundColor = 'red';
});
box.addEventListener("mouseout", function (event) {
    box.style.backgroundColor = 'blue';
});
var btn = document.getElementById("btnHover");
var div = document.getElementById("divText");
btn.addEventListener("mouseover", function () {
    div.classList.remove("hidden");
});
btn.addEventListener("mouseout", function () {
    div.classList.add("hidden");
});
//# sourceMappingURL=events.js.map