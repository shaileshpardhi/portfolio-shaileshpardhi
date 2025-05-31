// Advanced animations
document.addEventListener("DOMContentLoaded", () => {
    // Initialize animations
    initGlitchEffect()
    initParallaxEffect()
    initScrollAnimations()
  })
  
  // Glitch effect for hero title
  function initGlitchEffect() {
    const glitchElement = document.querySelector(".glitch")
  
    if (glitchElement) {
      // Set data-text attribute to match the text content
      glitchElement.setAttribute("data-text", glitchElement.textContent)
  
      // Random glitch trigger
      setInterval(() => {
        glitchElement.classList.add("active")
  
        setTimeout(() => {
          glitchElement.classList.remove("active")
        }, 200)
      }, 3000)
    }
  }
  
  // Parallax effect for hero section
  function initParallaxEffect() {
    const heroSection = document.querySelector(".hero")
    const shapes = document.querySelectorAll(".shape")
  
    if (heroSection && shapes.length) {
      window.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight
  
        shapes.forEach((shape, index) => {
          const speed = (index + 1) * 20
          const xOffset = (x - 0.5) * speed
          const yOffset = (y - 0.5) * speed
  
          shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`
        })
      })
    }
  }
  
  // Scroll-triggered animations
  function initScrollAnimations() {
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll(".project-card, .skill-item, .contact-form, .about-image")
  
    fadeElements.forEach((element) => {
      element.classList.add("fade-in")
      element.style.opacity = "0"
    })
  
    function checkFade() {
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom
        const windowHeight = window.innerHeight
  
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
          element.style.opacity = "1"
        }
      })
    }
  
    window.addEventListener("scroll", checkFade)
    window.addEventListener("load", checkFade)
  
    // Animate section headers
    const sectionHeaders = document.querySelectorAll(".section-header")
  
    sectionHeaders.forEach((header) => {
      header.style.opacity = "0"
      header.style.transform = "translateY(30px)"
      header.style.transition = "all 0.8s ease"
    })
  
    function checkHeaders() {
      sectionHeaders.forEach((header) => {
        const headerTop = header.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (headerTop < windowHeight - 100) {
          header.style.opacity = "1"
          header.style.transform = "translateY(0)"
        }
      })
    }
  
    window.addEventListener("scroll", checkHeaders)
    window.addEventListener("load", checkHeaders)
  
    // Staggered animation for skills items
    const skillItems = document.querySelectorAll(".skill-item")
  
    function animateSkills() {
      skillItems.forEach((item, index) => {
        item.style.opacity = "0"
        item.style.transform = "translateY(20px)"
        item.style.transition = `all 0.5s ease ${index * 0.1}s`
      })
  
      const skillsSection = document.querySelector(".skills")
  
      function checkSkills() {
        if (skillsSection) {
          const sectionTop = skillsSection.getBoundingClientRect().top
          const windowHeight = window.innerHeight
  
          if (sectionTop < windowHeight - 100) {
            skillItems.forEach((item) => {
              item.style.opacity = "1"
              item.style.transform = "translateY(0)"
            })
            window.removeEventListener("scroll", checkSkills)
          }
        }
      }
  
      window.addEventListener("scroll", checkSkills)
      window.addEventListener("load", checkSkills)
    }
  
    animateSkills()
  }
  