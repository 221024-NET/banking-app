// Theme switcher
const themeBtn = document.querySelector('#theme-btn');
let theme = document.documentElement.dataset.theme;

const setDarkTheme = () => {
    theme = 'dark';
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark') // update local storage
}
const setLightTheme = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light')
}

themeBtn.addEventListener('click', () => {
    switch (theme) {
        case 'light':
            setDarkTheme();
            break;
        case 'dark':
            setLightTheme();
            break;
    }
});


// TODO: finish dark mode
// ? <img src="images/theme-sun.svg" alt="color theme">
// TODO: Add page redirect to buttons