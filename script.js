// Wait until the entire HTML document is loaded and parsed
document.addEventListener("DOMContentLoaded", function() {

    // --- Mobile Navigation (Hamburger Menu) ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Check if the hamburger element exists before adding an event listener
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("nav-active");
        });
    }

    // --- On-Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animated');
    // Ensure IntersectionObserver is supported by the browser
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: stop observing the element once it's visible
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        animatedElements.forEach(el => observer.observe(el));
    }


    // --- Visitor Counter Logic (Robust Version) ---
    function updateVisitorCount() {
        // 1. Define a clear key for localStorage
        const countKey = "purnaPradhanVisitorCount";
        
        // 2. Find the HTML element where the count will be displayed
        const countElement = document.getElementById("visitor-count");

        // 3. IMPORTANT: Only run the counter logic if the element exists on the page
        if (countElement) {
            // 4. Get the current count from localStorage.
            let count = localStorage.getItem(countKey);

            // 5. Check if count is null or undefined (for the very first visit)
            if (count === null) {
                count = 1;
            } else {
                // Convert the stored string value to a number and increment it
                count = parseInt(count) + 1;
            }

            // 6. Save the new count back to localStorage
            localStorage.setItem(countKey, count);

            // 7. Update the text content of the HTML element
            countElement.textContent = count;
        }
    }

    // Run the function to update the count
    updateVisitorCount();

});

    // --- Read More Button Logic for Services Page ---
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        // Check if the card has hidden content
        const card = button.closest('.service-card');
        if (card.querySelector('.more-content')) {
            button.style.display = 'inline-block'; // Show the button
        } else {
            button.style.display = 'none'; // Hide if no hidden content
        }
        
        button.addEventListener('click', () => {
            card.classList.toggle('open');

            // Change button text based on the state
            if (card.classList.contains('open')) {
                button.textContent = 'Read Less';
            } else {
                button.textContent = 'Read More';
            }
        });
    });