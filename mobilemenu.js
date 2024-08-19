let menuIcon = document.querySelector(`.fa-bars`)
let mobileNav = document.querySelector(`.mobileNav`)
let logoBox = document.querySelector(`.logoBox`)
let desktopNav = document.querySelector(`.desktopNav`)
let cancelNav = document.querySelector(`.fa-xmark`)

menuIcon.addEventListener(`click`, function(event){
mobileNav.style.display = `flex`
logoBox.style.display = `none`
desktopNav.style.display = `none`

})

cancelNav.addEventListener(`click` , function (event) {
    mobileNav.style.display = `none`
    
logoBox.style.display = `flex`
desktopNav.style.display = `flex`
})