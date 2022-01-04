let menuIcon = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".sidebar");
let container = document.querySelector(".container");
let subscribe = document.querySelector(".subscribe-list")

menuIcon.onclick = function() {
    sideBar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
    subscribe.classList.toggle("subscribe-none")
}