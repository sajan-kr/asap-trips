// =========================
// LOAD HEADER
// =========================

fetch("components/header.html")
  .then(response => response.text())
  .then(data => {

    document.getElementById("header").innerHTML = data;

    // =========================
    // STICKY HEADER SHOW/HIDE
    // =========================

    let prevScrollPos = window.pageYOffset;

    window.addEventListener("scroll", function () {

      const navbar = document.querySelector(".custom-navbar");

      if (!navbar) return;

      let currentScrollPos = window.pageYOffset;

      // Existing Scroll Effect
      navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
      );

      // Hide on Scroll Down
      if (currentScrollPos > prevScrollPos) {

        navbar.classList.add("navbar-hide");

      } else {

        navbar.classList.remove("navbar-hide");

      }

      prevScrollPos = currentScrollPos;

    });

  });

// =========================
// LOAD FOOTER
// =========================

fetch("components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });


// =========================
// NAVBAR SCROLL EFFECT
// =========================

// Remove this section completely because
// it is already included above

/*
window.addEventListener("scroll", function () {

  const navbar =
    document.querySelector(".custom-navbar");

  if (navbar) {

    navbar.classList.toggle(
      "scrolled",
      window.scrollY > 50
    );

  }

});
*/


// banner trip button active state
const tripBtns = document.querySelectorAll(".trip-btn");

tripBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    tripBtns.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

  });

});

// search flight button click event