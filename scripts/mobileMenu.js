const buttonMobile = document.querySelector("#navTop button")
const menuMobile = document.querySelector("#menuMobile")
const buttonMenuExit = document.querySelector("#menuExit")

const body = document.querySelector("body")


buttonMobile.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()

    menuMobile.style.display = "none" ? menuMobile.style.display = "flex" : menuMobile.style.display = "none"
    body.style.overflowY = "none"

    
})

buttonMenuExit.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()


    if(menuMobile.style.display == "flex"){
        menuMobile.style.display = "none"
    }

})