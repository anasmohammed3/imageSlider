
    var slideIndex = 0; // Start with the first slide
    var slideTimer; // Timer for automatic sliding

    var slides = document.querySelectorAll('.slide'); // Get all slides
    var dots = document.querySelectorAll('.dot'); // Get all dots

    function showSlides() {
        // Calculate the transform percentage based on the current slide index
        document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 100}%)`;
        
        // Remove 'active' class from all dots
        dots.forEach(dot => dot.classList.remove('active'));

        // Add 'active' class to the current dot
        dots[slideIndex].classList.add('active');
    }

    function nextSlide() {
        slideIndex++; // Move to the next slide index
        if (slideIndex >= slides.length) {
            slideIndex = 0; // If at the end, loop back to the first slide
        }
        showSlides(); // Show the updated slide
        resetTimer(); // Reset the timer for auto-sliding
    }

    function prevSlide() {
        slideIndex--; // Move to the previous slide index
        if (slideIndex < 0) {
            slideIndex = slides.length - 1; // If at the beginning, loop to the last slide
        }
        showSlides(); // Show the updated slide
        resetTimer(); // Reset the timer for auto-sliding
    }

    function currentSlide(index) {
        slideIndex = index; // Set the current slide index
        showSlides(); // Show the selected slide
        resetTimer(); // Reset the timer for auto-sliding
    }

    function resetTimer() {
        clearInterval(slideTimer); // Clear the existing timer
        slideTimer = setInterval(nextSlide, 3000); // Set a new timer for auto-sliding every 3 seconds
    }

    // Event listeners for navigation buttons
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Event listeners to pause auto-sliding on mouseover and resume on mouseout
    document.querySelector('.slider').addEventListener('mouseover', () => clearInterval(slideTimer));
    document.querySelector('.slider').addEventListener('mouseout', resetTimer);

    // Add event listeners to each dot for navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index));
    });

    // Initialize the slider
    showSlides(); // Show the first slide
    resetTimer(); // Start the automatic slide timer

