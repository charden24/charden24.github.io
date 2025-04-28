const sliderMenu = document.querySelector('.menu')
const frame = document.querySelector('.frame')

sliderMenu.addEventListener('click', () => {
    sliderMenu.classList.toggle('active')
    frame.classList.toggle('active')
})

src = "https://fareharbor.com/embeds/api/v1/?autolightframe=yes" 
