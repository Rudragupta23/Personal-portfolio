// Theme Toggle
const themeToggle = document.getElementById("theme-toggle")
const body = document.body

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem("theme") || "light"
body.setAttribute("data-theme", currentTheme)

// Update theme toggle icon
function updateThemeIcon() {
  const icon = themeToggle.querySelector("i")
  if (body.getAttribute("data-theme") === "light") {
    icon.className = "fas fa-moon"
  } else {
    icon.className = "fas fa-sun"
  }
}

updateThemeIcon()

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme")
  const newTheme = currentTheme === "light" ? "dark" : "light"

  body.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon()

  // Add animation effect
  themeToggle.style.transform = "rotate(360deg)"
  setTimeout(() => {
    themeToggle.style.transform = "rotate(0deg)"
  }, 300)
})

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
const navMenu = document.getElementById("nav-menu")

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener("click", () => {
    mobileMenuToggle.classList.toggle("active")
    navMenu.classList.toggle("active")

    // Prevent body scroll when menu is open
    if (navMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  })

  // Close mobile menu when clicking on nav links
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuToggle.classList.remove("active")
      navMenu.classList.remove("active")
      document.body.style.overflow = ""
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      mobileMenuToggle.classList.remove("active")
      navMenu.classList.remove("active")
      document.body.style.overflow = ""
    }
  })

  // Handle window resize - close mobile menu on desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      mobileMenuToggle.classList.remove("active")
      navMenu.classList.remove("active")
      document.body.style.overflow = ""
    }
  })
}

// Navigation
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll(".section")

function showSection(targetSection) {
  // Hide all sections
  sections.forEach((section) => {
    section.classList.remove("active")
  })

  // Show target section with animation
  setTimeout(() => {
    const target = document.getElementById(targetSection)
    if (target) {
      target.classList.add("active")
    }
  }, 150)

  // Update active nav link
  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("data-section") === targetSection) {
      link.classList.add("active")
    }
  })
}

// Add click event listeners to nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetSection = link.getAttribute("data-section")
    showSection(targetSection)

    // Add click animation
    link.style.transform = "scale(0.95)"
    setTimeout(() => {
      link.style.transform = "scale(1)"
    }, 150)
  })
})

// Resume Download Function
function downloadResume() {
  // Create a temporary link element
  const link = document.createElement("a")
  link.href = "my_cv.pdf" // Corrected file name from previous response
  link.download = "my_cv.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Show download animation
  const btn = event.target.closest(".btn")
  btn.style.transform = "scale(0.95)"
  setTimeout(() => {
    btn.style.transform = "scale(1)"
  }, 150)
}

// LinkedIn Function
function openLinkedIn() {
  window.open("https://www.linkedin.com/in/rudragupta23/", "_blank") // Corrected URL from previous response

  // Add click animation
  const btn = event.target.closest(".btn")
  btn.style.transform = "scale(0.95)"
  setTimeout(() => {
    btn.style.transform = "scale(1)"
  }, 150)
}

// --- FIXED CONTACT FORM SECTION ---
const contactForm = document.getElementById("contactForm")
const submitBtn = contactForm.querySelector(".submit-btn")
// Make sure you have a div with id="form-result" in your HTML for messages
const formResult = document.getElementById("form-result")

contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default page reload

    const formData = new FormData(contactForm);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Change button text and disable it to prevent multiple submissions
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    formResult.innerHTML = ""; // Clear previous results

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let jsonResponse = await response.json();
        if (response.status == 200) {
            formResult.innerHTML = jsonResponse.message;
            formResult.style.color = "#28a745"; // Green for success
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            contactForm.reset(); // Reset form only on success
        } else {
            console.log(response);
            formResult.innerHTML = jsonResponse.message;
            formResult.style.color = "#dc3545"; // Red for error
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit';
        }
    })
    .catch(error => {
        console.log(error);
        formResult.innerHTML = "Something went wrong!";
        formResult.style.color = "#dc3545";
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit';
    })
    .finally(() => {
        // Re-enable the button after 2 seconds and reset text
        setTimeout(() => {
            submitBtn.disabled = false;
            if(formResult.style.color !== 'rgb(40, 167, 69)'){ // if not success
                 submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit';
            }
        }, 2000);
        // Clear the result message after 5 seconds
        setTimeout(() => {
            formResult.innerHTML = "";
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit';
        }, 5000);
    });
});


// Add hover effects to buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      // Only on desktop
      btn.style.transform = "translateY(-2px)"
    }
  })

  btn.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
      // Only on desktop
      btn.style.transform = "translateY(0)"
    }
  })

  // Add touch feedback for mobile
  btn.addEventListener("touchstart", () => {
    btn.style.transform = "scale(0.95)"
  })

  btn.addEventListener("touchend", () => {
    setTimeout(() => {
      btn.style.transform = "scale(1)"
    }, 150)
  })
})

// Add scroll animations for timeline items
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe timeline items and project cards
document.querySelectorAll(".timeline-item, .project-card, .skill-card").forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "translateY(30px)"
  item.style.transition = "all 0.6s ease"
  observer.observe(item)
})

// Add typing effect to home title
function typeWriter(element, text, speed = 100, callback) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    } else if (callback) {
      setTimeout(callback, 1000) // Wait 1 second before callback
    }
  }

  type()
}

function deleteText(element, speed = 50, callback) {
  const text = element.innerHTML
  let i = text.length

  function deleteChar() {
    if (i > 0) {
      element.innerHTML = text.substring(0, i - 1)
      i--
      setTimeout(deleteChar, speed)
    } else if (callback) {
      setTimeout(callback, 500) // Wait 0.5 seconds before callback
    }
  }

  deleteChar()
}

function startTypewriterEffect() {
  const typewriterElement = document.querySelector(".typewriter-text")
  if (!typewriterElement) return; // Prevent errors if element doesn't exist
  const texts = ["Web Developer", "Programmer", "Tech Enthusiast"];
  let currentIndex = 0

  function typeNextText() {
    const currentText = texts[currentIndex]

    typeWriter(typewriterElement, currentText, 100, () => {
      deleteText(typewriterElement, 50, () => {
        currentIndex = (currentIndex + 1) % texts.length
        typeNextText()
      })
    })
  }

  // Start the typewriter effect
  typeNextText()
}

// Initialize typing effect when home section is active
const homeTitle = document.querySelector(".home-title")
if (homeTitle) {
  const originalText = homeTitle.textContent
  setTimeout(() => {
    // This seems to re-type the main H1, which might be intended.
    // typeWriter(homeTitle, originalText, 80) 
    // Start typewriter effect for rotating text
    setTimeout(() => {
      startTypewriterEffect()
    }, 1000)
  }, 500)
}

// Add particle effect to background (reduced for mobile performance)
function createParticle() {
  // Reduce particles on mobile for better performance
  if (window.innerWidth <= 768 && Math.random() > 0.3) return

  const particle = document.createElement("div")
  particle.style.position = "fixed"
  particle.style.width = "4px"
  particle.style.height = "4px"
  particle.style.background = "var(--primary-color)"
  particle.style.borderRadius = "50%"
  particle.style.pointerEvents = "none"
  particle.style.opacity = "0.6"
  particle.style.zIndex = "-1" // Set to -1 to be behind content

  particle.style.left = Math.random() * window.innerWidth + "px"
  particle.style.top = window.innerHeight + "px"

  document.body.appendChild(particle)

  const animation = particle.animate(
    [
      { transform: "translateY(0px)", opacity: 0.6 },
      { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 },
    ],
    {
      duration: Math.random() * 3000 + 2000,
      easing: "linear",
    },
  )

  animation.onfinish = () => {
    particle.remove()
  }
}

// Create particles periodically (less frequent on mobile)
const particleInterval = window.innerWidth <= 768 ? 800 : 300
setInterval(createParticle, particleInterval)

// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = "smooth"

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  // Show home section by default
  showSection("home")

  // Add loading animation
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease"
    document.body.style.opacity = "1"
  }, 100)

  // Optimize animations for mobile
  if (window.innerWidth <= 768) {
    // Reduce animation duration on mobile for better performance
    const style = document.createElement("style")
    style.textContent = `
       .floating-icon {
         animation-duration: 6s !important;
       }
       .home-profile-img {
         animation-duration: 4s !important;
       }
     `
    document.head.appendChild(style)
  }

  // Handle orientation change on mobile
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      // Close mobile menu on orientation change
      if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.classList.remove("active")
        navMenu.classList.remove("active")
        document.body.style.overflow = ""
      }
    }, 100)
  })
})