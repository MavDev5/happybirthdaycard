// 1. Navigation Logic (Updated for smooth transition)
function nextPage(pageNumber) {
    // Select all pages
    const pages = document.querySelectorAll('.page');
    
    // Deactivate all pages: remove 'active' and ensure they are ready to transition
    pages.forEach(page => {
        page.classList.remove('active');
        // Add an 'exit' class if you want specific exit animations in CSS
        page.classList.add('exit'); 
    });

    // Activate the requested page
    const activePage = document.getElementById('page' + pageNumber);
    if (activePage) {
        // Remove 'exit' class from the new active page
        activePage.classList.remove('exit');
        activePage.classList.add('active');
    } else {
        // If the page doesn't exist (e.g., 'page5'), loop back to start
        document.getElementById('page1').classList.add('active');
        document.getElementById('page1').classList.remove('exit');
    }
}


// 2. Countdown Timer
// !! CHANGE THIS TO TANU'S ACTUAL BIRTHDAY !!
// For example: "December 14, 2024 00:00:00"
const birthday = "March 28, 2026 00:00:00"; 
const countDownDate = new Date(birthday).getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the elements with id="days", "hours", "minutes", "seconds"
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the count down is finished, display some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        // You could also change the 'h1' on page 1 here if you like!
        // document.querySelector('#page1 h1').innerText = "It's TANU'S BIRTHDAY! 🎂";
    }
}, 1000);


//