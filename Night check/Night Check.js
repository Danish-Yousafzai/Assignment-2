let time = parseInt(prompt("Please enter the time (0-23):"));

if (isNaN(time) || time < 0 || time > 23) {
    alert("Invalid input. Please enter a valid time between 0 and 23.");
} else if (!(time >= 6 && time < 18)) {
    alert("It's night time.");
} else {
    alert("It's day time.");
}
