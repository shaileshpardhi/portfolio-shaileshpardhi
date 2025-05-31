// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle")
    const body = document.body
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
  
    // Apply saved theme or default to light
    if (savedTheme === "dark") {
      body.classList.add("dark-theme")
    }
  
    // Toggle theme on click
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-theme")
  
      // Save theme preference
      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark")
      } else {
        localStorage.setItem("theme", "light")
      }
    })
  
    // Check user's system preference for dark mode
    function checkSystemPreference() {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // Only apply if no saved preference exists
        if (!savedTheme) {
          body.classList.add("dark-theme")
          localStorage.setItem("theme", "dark")
        }
      }
    }
  
    // Check system preference on load
    checkSystemPreference()
  
    // Listen for changes in system preference
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!savedTheme) {
        if (e.matches) {
          body.classList.add("dark-theme")
          localStorage.setItem("theme", "dark")
        } else {
          body.classList.remove("dark-theme")
          localStorage.setItem("theme", "light")
        }
      }
    })
  })
  