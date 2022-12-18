const loginBtn = document.querySelector('#login-btn');
const signupBtn = document.querySelector('#signup-btn');
const faqBtn = document.querySelector('#faq-btn');
const loginUrl = 'login.html';
const signupUrl = 'signup.html';
// const faqUrl = 'faq.html';

const goTo = (url) => window.location.replace(url);

loginBtn.addEventListener('click', () => goTo(loginUrl));
signupBtn.addEventListener('click', () => goTo(signupUrl));
// faqBtn.addEventListener('click', () => goTo(faqUrl));
