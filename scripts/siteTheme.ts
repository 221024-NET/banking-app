// * Uses <body data-theme> to toggle [data-theme] CSS styles
const themeBtn: HTMLButtonElement | null = document.querySelector('#theme-btn');
let currentTheme: string;

const loadPref = () =>
{
    let theme = localStorage.getItem('themePref');
    if (theme !== null)
    {
        currentTheme = theme;
        setTheme(currentTheme);
    } else
    {
        currentTheme = 'light';
        setTheme(currentTheme);
    }
};

const setTheme = (theme) =>
{
    let pressed = theme === 'dark' ? 'true' : 'false';
    themeBtn?.setAttribute('aria-pressed', pressed);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('themePref', theme);
};

let toggleTheme = () =>
{
    document.documentElement.getAttribute('data-theme') === 'dark'
        ? setTheme('light')
        : setTheme('dark');
};

themeBtn?.addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', loadPref);