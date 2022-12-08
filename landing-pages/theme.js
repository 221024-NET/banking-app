// * Uses <body data-dark-theme> to toggle [data-dark-theme] CSS styles
const body = document.body;
const themeBtn = document.querySelector('#theme-btn');
const themeAttr = body.getAttribute('data-dark-theme');
let modePref; // localStorage item

// On page load, check localStorage for theme preference
window.onload = function () {
    modePref = localStorage.getItem('modePref');

}

// * Event Handler
const toggleTheme = () => {
    let isDark = body.classList.contains('data-dark-theme');
    // * if body has darkTheme, remove it and set modepref to 'light'
    // * if not, add it and set modepref to 'dark'
}



// toggleTheme()
// Event listener for dark mode toggle



// ! Method 2 (using class)
// * Check if dark mode is enabled
const darkMode = localStorage.getItem('darkMode');

// * If dark mode is enabled, apply the dark mode styles to the page
if (darkMode === 'true') {
    document.body.classList.add('dark-mode');
}

// * When the toggle button is clicked, toggle the dark mode state and update page styles
toggleButton.addEventListener('click', () => {
    if (darkMode === 'true') {
        localStorage.setItem('darkMode', 'false');
        document.body.classList.remove('dark-mode');
    } else {
        localStorage.setItem('darkMode', 'true');
        document.body.classList.add('dark-mode');
    }
});


// ! Method 3 (Toggle works, no persist)

// const setDarkTheme = (event) => {
//     theme = 'dark';
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('data-theme', 'dark') // update local storage
//     event.preventDefault();
// }
// const setLightTheme = (event) => {
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('data-theme', 'light');
//     event.preventDefault();
// }

// themeBtn.addEventListener('click', () => {
//     switch (theme) {
//         case 'light':
//             setDarkTheme();
//             break;
//         case 'dark':
//             setLightTheme();
//             break;
//     }
//     themeBtn.dispatchEvent(new Event("click"))
// });


// TODO: Add page redirect to buttons