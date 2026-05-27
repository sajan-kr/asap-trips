// ============================================
// LOAD HEADER COMPONENT
// ============================================

fetch("components/header.html")

  // Convert response into text
  .then(response => response.text())

  // Insert header HTML inside #header div
  .then(data => {

    document.getElementById("header").innerHTML = data;

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================

    window.addEventListener("scroll", function () {

      // Select navbar
      const navbar =
        document.querySelector(".custom-navbar");

      // Check navbar exists
      if (navbar) {

        // Add/remove scrolled class
        navbar.classList.toggle(
          "scrolled",
          window.scrollY > 50
        );

      }

    });

  })

  // Error Handling
  .catch(error => {

    console.log(
      "Header Not Loaded",
      error
    );

  });


// ============================================
// LOAD FOOTER COMPONENT
// ============================================

fetch("components/footer.html")

  // Convert response into text
  .then(response => response.text())

  // Insert footer HTML inside #footer div
  .then(data => {

    document.getElementById("footer").innerHTML = data;

  })

  // Error Handling
  .catch(error => {

    console.log(
      "Footer Not Loaded",
      error
    );

  });


// ============================================
// TRIP BUTTON ACTIVE FUNCTIONALITY
// ============================================

// Select all trip buttons
const tripButtons =
  document.querySelectorAll(".trip-btn");

// Loop through buttons
tripButtons.forEach(button => {

  // Click Event
  button.addEventListener("click", () => {

    // Remove active class from all buttons
    tripButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    // Add active class to clicked button
    button.classList.add("active");

  });

});


// ============================================
// FLIGHT SEARCH FORM
// ============================================

// Select flight form
const flightForm =
  document.getElementById("flightForm");

// Check form exists
if (flightForm) {

  // Form Submit Event
  flightForm.addEventListener("submit", function (e) {

    // Prevent page reload
    e.preventDefault();

    // Get form values
    const from =
      document.getElementById("from").value;

    const to =
      document.getElementById("to").value;

    const departure =
      document.getElementById("departure").value;

    const passengers =
      document.getElementById("passengers").value;

    // Validation
    if (
      from === "" ||
      to === "" ||
      departure === ""
    ) {

      alert(
        "Please Fill All Required Fields"
      );

      return;

    }

    // Success Message
    alert(
      `Flight Search Submitted!

From: ${from}
To: ${to}
Departure: ${departure}
Passengers: ${passengers}`
    );

  });

}


// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================

// Select all anchor links
document.querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener("click", function (e) {

      e.preventDefault();

      // Get target section
      const target =
        document.querySelector(
          this.getAttribute("href")
        );

      // Smooth scroll
      if (target) {

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });


// ============================================
// PAGE LOADER COMPLETE
// ============================================

window.addEventListener("load", () => {

  console.log(
    "ASAP Trips Website Loaded Successfully"
  );

});