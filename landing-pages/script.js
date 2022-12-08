// TODO: finish dark mode
// ? loop theme toggle
// ? persist theme

const themeBtn = document.querySelector('#theme-btn');
let theme = document.documentElement.dataset.theme;

// document.documentElement.addEventListener('load', () => {
//     var theme = localStorage.getItem('data_theme');
//     switch (theme) {
//         case 'light':
//             setDarkTheme();
//             break;
//         case 'dark':
//             setLightTheme();
//             break;
//     }
// });

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