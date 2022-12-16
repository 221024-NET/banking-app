// * Uses <body data-theme> to toggle [data-theme] CSS styles
const themeBtn = document.querySelector('#theme-btn') as HTMLButtonElement;
const themeIcon = document.querySelector('#theme-icon') as HTMLImageElement;
const icons = document.querySelectorAll(
  '.icon img'
) as NodeListOf<HTMLImageElement>;
let currentTheme: string;

const loadPref = () => {
  let theme = localStorage.getItem('themePref');
  if (theme !== null) {
    currentTheme = theme;
    setTheme(currentTheme);
  } else {
    currentTheme = 'light';
    setTheme(currentTheme);
  }
};

const setTheme = (theme: string) => {
  let pressed = theme === 'dark' ? 'true' : 'false';
  themeBtn.setAttribute('aria-pressed', pressed);
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('themePref', theme);
  icons.forEach((icon) => {
    theme == 'dark'
      ? (icon.src = 'images/arrow-white.svg')
      : (icon.src = 'images/arrow.svg');
  });
};

let toggleTheme = () => {
  document.documentElement.getAttribute('data-theme') === 'dark'
    ? setTheme('light')
    : setTheme('dark');
};

themeBtn.addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', loadPref);
