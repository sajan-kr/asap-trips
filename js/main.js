// =========================
// LOAD HEADER
// =========================

fetch("components/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
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


//  banner trip button active state
const tripBtns = document.querySelectorAll(".trip-btn");

tripBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        tripBtns.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

    });

});

// search flight button click event
