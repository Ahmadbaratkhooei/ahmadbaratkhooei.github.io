const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️'; // Change icon to sun in dark mode
    } else {
        toggleButton.textContent = '🌙'; // Change icon to moon in normal mode
    }
});
