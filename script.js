    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");

    menuButton.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });

    document.getElementById("year").textContent =
      new Date().getFullYear();
