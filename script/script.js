// =========================
// Dynamic Clock
// =========================
function updateClock() {
    const now = new Date();

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    const formattedDate = now.toLocaleDateString('en-US', dateOptions);
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

    const clockElement = document.getElementById('dynamic-clock');
    if (clockElement) {
        clockElement.innerHTML = `<i class="fa-solid fa-clock"></i> ${formattedDate} at ${formattedTime}`;
    }
}

// Update every second
setInterval(updateClock, 1000);

// Call immediately when DOM is ready
document.addEventListener('DOMContentLoaded', updateClock);


// =========================
// Owl Carousel Initialization
// =========================
$(document).ready(function () {
    $(".recent-activities-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            1000: { items: 4 }
        }
    });
});


// =========================
// Multi-Level Dropdown Support for Mobile
// =========================
document.addEventListener('DOMContentLoaded', function() {
    let submenus = document.querySelectorAll('.dropdown-submenu > a');

    submenus.forEach(function(menu) {
        menu.addEventListener('click', function(e) {
            // Stop link from navigating away
            e.preventDefault();
            // Stop the event from closing the parent dropdown
            e.stopPropagation();

            // Find the submenu
            let subMenuEl = this.nextElementSibling;
            
            // Toggle its display
            if (subMenuEl) {
                if (subMenuEl.style.display === "block") {
                    subMenuEl.style.display = "none";
                } else {
                    subMenuEl.style.display = "block";
                }
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
        var galleryModal = document.getElementById('galleryModal');
        galleryModal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal
            var button = event.relatedTarget;
            // Extract image src from data-src attribute
            var imgSrc = button.getAttribute('data-src');
            // Update the modal's image
            var modalImage = galleryModal.querySelector('#modalImage');
            modalImage.src = imgSrc;
        });
    });

// gallery
document.addEventListener('DOMContentLoaded', function () {
        // --- Lightbox Logic ---
        const galleryModal = document.getElementById('galleryModal');
        galleryModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const imgSrc = button.getAttribute('data-src');
            const modalImage = galleryModal.querySelector('#modalImage');
            modalImage.src = imgSrc;
        });

        // --- Filter Logic ---
        const filterButtons = document.querySelectorAll('.filter-btn-group .btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Manage active button style
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
