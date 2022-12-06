// ! Not working yet, just typed some stuff in
const colorTheme = document.querySelector('#theme');
const themeToggle = document.querySelector('#theme-toggle');

const toggleColorTheme = (colorTheme) => {
    if (colorTheme.getAttribute('href') == 'css/dark-global.css') {
        // switch to light
        themeToggle.textContent = 'Dark Mode';
    } else if (colorTheme.getAttribute('href') == 'css/global.css') {
        // switch to dark
        themeToggle.textContent = 'Light Mode';
    }
};

themeToggle.addEventListener('click', toggleColorTheme);
