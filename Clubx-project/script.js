const eventDate = new Date('2025-02-14T00:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();

document.getElementById("registerButton").addEventListener("click", function() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScfrbmlp9GC6yGTfmITIkyh-Z_IqqwCrqbymreTB7k8cvKEdA/viewform";
});