// Get the theme toggle input
const themeToggle = document.querySelector('#theme-toggle');

// Function that will switch the theme based on the if the theme toggle is checked or not
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}
// Add an event listener to the theme toggle, which will switch the theme
themeToggle.addEventListener("change", switchTheme, false);

// TODO: finish dark mode
// ? <img src="images/theme-sun.svg" alt="color theme">
// TODO: Add page redirect to buttons