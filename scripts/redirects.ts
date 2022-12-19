const loginBtn: HTMLButtonElement | null = document.querySelector('#login-btn');
const signupBtn: HTMLButtonElement | null = document.querySelector('#signup-btn');
const faqBtn: HTMLButtonElement | null = document.querySelector('#faq-btn');

const loginUrl: string = 'login.html';
const signupUrl: string = 'signup.html';
// const faqUrl: string = 'faq.html';

const goTo = (url: string) => window.location.replace(url);

loginBtn?.addEventListener('click', () => goTo(loginUrl));
signupBtn?.addEventListener('click', () => goTo(signupUrl));
// faqBtn?.addEventListener('click', () => goTo(faqUrl));
