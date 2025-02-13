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
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
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

  // 4. Dark Mode Toggle
  const darkModeToggle = document.createElement("button");
  darkModeToggle.textContent = "🌙 Dark Mode";
  darkModeToggle.style.position = "fixed";
  darkModeToggle.style.top = "20px";
  darkModeToggle.style.right = "20px";
  darkModeToggle.style.padding = "10px";
  darkModeToggle.style.backgroundColor = "#333";
  darkModeToggle.style.color = "#fff";
  darkModeToggle.style.border = "none";
  darkModeToggle.style.borderRadius = "5px";
  darkModeToggle.style.cursor = "pointer";
  document.body.appendChild(darkModeToggle);

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "☀️ Light Mode";
    } else {
      darkModeToggle.textContent = "🌙 Dark Mode";
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
});