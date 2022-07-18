let menu = document.querySelector(".menu i")

menu.addEventListener("click", function () {
    document.querySelector("header").classList.toggle("toogle")
    if (menu.className === "fa-solid fa-bars") {
        console.log(menu)
        menu.className = "fa-solid fa-arrow-right-from-bracket"
    }
    else {
        menu.className = "fa-solid fa-bars"
    }
})

let imgs = document.querySelectorAll(".img")

imgs.forEach(function (img) {
    img.addEventListener("click", function (e) {
        e.target.classList.toggle("full")
        e.target.classList.toggle("hover")

    })
})