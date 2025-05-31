// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize all components
    initNavigation()
    initTypewriter()
    initProjectFilters()
    initScrollReveal()
    initSkillsProgress()
    initContactForm()
    initCustomCursor()
  })
  
  // Navigation functionality
  function initNavigation() {
    const header = document.querySelector("header")
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
    const navLinksItems = document.querySelectorAll(".nav-link")
    const sections = document.querySelectorAll("section")
  
    // Sticky header on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
  
      // Update active nav link based on scroll position
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
  
      navLinksItems.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("active")
        }
      })
    })
  
    // Mobile menu toggle
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a link
    navLinksItems.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  }
  
  // Typewriter effect
  function initTypewriter() {
    const typedTextElement = document.querySelector(".typed-text")
    const cursorElement = document.querySelector(".cursor")
  
    const textArray = ["UI Designer", "Frontend Developer", "Full Stack Developer"]
    const typingDelay = 100
    const erasingDelay = 50
    const newTextDelay = 2000
  
    let textArrayIndex = 0
    let charIndex = 0
  
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextElement.textContent += textArray[textArrayIndex].charAt(charIndex)
        charIndex++
        setTimeout(type, typingDelay)
      } else {
        setTimeout(erase, newTextDelay)
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typedTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1)
        charIndex--
        setTimeout(erase, erasingDelay)
      } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length
        setTimeout(type, typingDelay)
      }
    }
  
    if (textArray.length) {
      setTimeout(type, newTextDelay)
    }
  }
  
  // Project filters
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        button.classList.add("active")
  
        const filterValue = button.getAttribute("data-filter")
  
        // Filter projects
        projectCards.forEach((card) => {
          if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "scale(1)"
            }, 100)
          } else {
            card.style.opacity = "0"
            card.style.transform = "scale(0.8)"
            setTimeout(() => {
              card.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }
  
  // Scroll reveal animation
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal")
  
    function checkReveal() {
      const windowHeight = window.innerHeight
      const revealPoint = 150
  
      revealElements.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top
  
        if (revealTop < windowHeight - revealPoint) {
          element.classList.add("active")
        }
      })
    }
  
    // Add reveal class to elements
    document.querySelectorAll("section:not(.hero)").forEach((section) => {
      section.classList.add("reveal")
    })
  
    document.querySelectorAll(".project-card, .skill-item, .about-stats, .contact-form").forEach((element) => {
      element.classList.add("reveal")
    })
  
    window.addEventListener("scroll", checkReveal)
    window.addEventListener("load", checkReveal)
  }
  
  // Skills progress animation
  function initSkillsProgress() {
    const progressBars = document.querySelectorAll(".progress-bar")
  
    function animateProgress() {
      progressBars.forEach((bar) => {
        const progress = bar.getAttribute("data-progress")
        bar.style.setProperty("--progress", progress + "%")
        bar.style.width = progress + "%"
      })
    }
  
    // Animate on scroll
    const skillsSection = document.querySelector(".skills")
  
    function checkSkillsVisible() {
      if (skillsSection) {
        const sectionTop = skillsSection.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (sectionTop < windowHeight - 100) {
          animateProgress()
          window.removeEventListener("scroll", checkSkillsVisible)
        }
      }
    }
  
    window.addEventListener("scroll", checkSkillsVisible)
    window.addEventListener("load", checkSkillsVisible)
  }
  
  // Contact form functionality
  function initContactForm() {
    const contactForm = document.getElementById("contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Basic form validation
        if (!name || !email || !subject || !message) {
          alert("Please fill in all fields")
          return
        }
  
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show a success message
        alert("Thank you for your message! I will get back to you soon.")
        contactForm.reset()
      })
    }
  }
  
  // Custom cursor
  function initCustomCursor() {
    const cursor = document.querySelector(".cursor")
  
    if (cursor) {
      document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"
      })
  
      // Change cursor size on hover over links and buttons
      document.querySelectorAll("a, button, .project-card, .skill-item, .social-link").forEach((element) => {
        element.addEventListener("mouseenter", () => {
          cursor.style.width = "40px"
          cursor.style.height = "40px"
          cursor.style.backgroundColor = "rgba(0, 102, 255, 0.2)"
        })
  
        element.addEventListener("mouseleave", () => {
          cursor.style.width = "20px"
          cursor.style.height = "20px"
          cursor.style.backgroundColor = "rgba(0, 102, 255, 0.5)"
        })
      })
  
      // Hide cursor when leaving window
      document.addEventListener("mouseout", () => {
        cursor.style.display = "none"
      })
  
      document.addEventListener("mouseover", () => {
        cursor.style.display = "block"
      })
    }
  }
  