document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded!");

  // 1. Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll("header nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = link.getAttribute("href").substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Smooth scroll to the target section
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // 2. Animate Sections on Scroll
  const sections = document.querySelectorAll(".section");

  const animateOnScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) {
        section.classList.add("visible");
      }
    });
  };

  // Initial check on page load
  animateOnScroll();

  // Add scroll event listener
  window.addEventListener("scroll", animateOnScroll);

  // 3. Dynamic Year in Footer
  const footerYear = document.querySelector("footer p");
  const currentYear = new Date().getFullYear();
  footerYear.innerHTML = `&copy; ${currentYear} Adulta Sai Kiran Reddy. All rights reserved.`;

  // 4. Dark Mode Toggle with LocalStorage
  const darkModeToggle = document.createElement("button");
  darkModeToggle.textContent = "🌙 Dark Mode";
  darkModeToggle.style.position = "fixed";
  darkModeToggle.style.top = "20px";
  darkModeToggle.style.right = "20px";
  darkModeToggle.style.padding = "10px";
  darkModeToggle.style.backgroundColor = "#6a11cb";
  darkModeToggle.style.color = "#fff";
  darkModeToggle.style.border = "none";
  darkModeToggle.style.borderRadius = "5px";
  darkModeToggle.style.cursor = "pointer";
  darkModeToggle.style.zIndex = "1000"; // Ensure it's above other elements
  document.body.appendChild(darkModeToggle);

  // Check for saved dark mode preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️ Light Mode";
  }

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "☀️ Light Mode";
      localStorage.setItem("dark-mode", "enabled");
    } else {
      darkModeToggle.textContent = "🌙 Dark Mode";
      localStorage.setItem("dark-mode", "disabled");
    }
  });

  // 5. Dynamic Project Filter (Example)
  const projects = document.querySelectorAll(".project");
  const filterButtons = document.createElement("div");
  filterButtons.innerHTML = `
    <button class="filter-btn" data-filter="all">All</button>
    <button class="filter-btn" data-filter="machine-learning">Machine Learning</button>
    <button class="filter-btn" data-filter="data-analysis">Data Analysis</button>
  `;
  filterButtons.style.textAlign = "center";
  filterButtons.style.marginBottom = "20px";
  document.getElementById("projects").insertBefore(filterButtons, document.getElementById("projects").firstChild);

  const filterProjects = (filter) => {
    projects.forEach((project) => {
      if (filter === "all" || project.classList.contains(filter)) {
        project.style.display = "block";
        project.classList.add("animate__animated", "animate__fadeIn"); // Add animation
      } else {
        project.style.display = "none";
      }
    });
  };

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      filterProjects(filter);
    });
  });

  // 6. Back-to-Top Button
  const backToTopButton = document.createElement("button");
  backToTopButton.textContent = "↑";
  backToTopButton.style.position = "fixed";
  backToTopButton.style.bottom = "20px";
  backToTopButton.style.right = "20px";
  backToTopButton.style.padding = "10px";
  backToTopButton.style.backgroundColor = "#6a11cb";
  backToTopButton.style.color = "#fff";
  backToTopButton.style.border = "none";
  backToTopButton.style.borderRadius = "50%";
  backToTopButton.style.cursor = "pointer";
  backToTopButton.style.display = "none";
  backToTopButton.style.zIndex = "1000"; // Ensure it's above other elements
  document.body.appendChild(backToTopButton);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
      backToTopButton.classList.add("animate__animated", "animate__fadeIn"); // Add animation
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 7. Add Animate.css for Animations
  const animateCSS = document.createElement("link");
  animateCSS.rel = "stylesheet";
  animateCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
  document.head.appendChild(animateCSS);
});
