// Set the target date for the countdown
const targetDate = new Date('October 12, 2025').getTime();

function updateCountdown() {
    // Get the current date
    const now = new Date().getTime();
    
    // Find the time between now and the target date
    const distance = targetDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="launch"
    document.getElementById("launch").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
