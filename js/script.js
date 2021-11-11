addEventListener("DOMContentLoaded", () => {
    // CSSDOM (HABILIDADES - ANIMACION)
    const element = document.querySelector(".skills")
    let screenHeight = window.innerHeight / 1.7
    let elementTop = null
    let cont = 0

    addEventListener("resize", () => {
        if (screenHeight != window.innerHeight / 1.7)
        {
            screenHeight = window.innerHeight / 1.7
        }
    })
    
    addEventListener("scroll", () => {
        elementTop = element.getBoundingClientRect().top
        if (elementTop <= screenHeight)
        {
            if (cont == 0)
            {
                cont+=1
                const skills = element.querySelectorAll(" .skill")
                skills.forEach(skill => skill.classList.add("show-skill"))
            }
        }
    })

    // CSSDOM (DESCRIPCION DEL BANNER - ANIMACION)
    const banner = document.querySelector(".main-banner")
    const bannerDescription = banner.querySelector(" p")
    setTimeout(() => {
        bannerDescription.style.opacity = 1
    }, 2000)
})