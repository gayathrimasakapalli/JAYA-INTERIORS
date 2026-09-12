/* ======================================
   MOBILE MENU
====================================== */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }

    });

}


/* ======================================
   CLOSE MOBILE MENU
====================================== */

const links = document.querySelectorAll(".navbar a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        if (window.innerWidth <= 1000) {

            navbar.classList.remove("active");

            if (menuToggle) {
                menuToggle.innerHTML = "☰";
            }

        }

    });

});


/* ======================================
   HEADER SCROLL
====================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", function() {

    if (header) {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

});


/* ======================================
   SCROLL REVEAL
====================================== */

const revealElements =
    document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const observer =
        new IntersectionObserver(function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });


    revealElements.forEach(function(element) {

        observer.observe(element);

    });

}


/* ======================================
   PROJECT FILTER
====================================== */

const filters =
    document.querySelectorAll(".filter");

const projects =
    document.querySelectorAll(".project-card");


filters.forEach(function(filter) {

    filter.addEventListener("click", function() {

        filters.forEach(function(btn) {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const category =
            filter.getAttribute("data-filter");


        projects.forEach(function(project) {

            if (
                category === "all" ||
                project.classList.contains(category)
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* ======================================
   GALLERY LIGHTBOX
====================================== */

const galleryImages =
    document.querySelectorAll(".gallery-image");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.querySelector(".close-lightbox");


galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        if (lightbox && lightboxImage) {

            lightbox.classList.add("show");

            lightboxImage.src = image.src;

        }

    });

});


if (closeLightbox) {

    closeLightbox.addEventListener("click", function() {

        lightbox.classList.remove("show");

    });

}


if (lightbox) {

    lightbox.addEventListener("click", function(e) {

        if (e.target === lightbox) {

            lightbox.classList.remove("show");

        }

    });

}


/* ======================================
   CONTACT FORM
====================================== */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const message =
            document.getElementById("formMessage");


        if (message) {

            message.innerHTML =
                "Thank you, " + name +
                "! Your enquiry has been received. " +
                "We will contact you soon.";

        }

        contactForm.reset();

    });

}


/* ======================================
   CURRENT YEAR
====================================== */

const yearElements =
    document.querySelectorAll(".year");

yearElements.forEach(function(element) {

    element.textContent =
        new Date().getFullYear();

});