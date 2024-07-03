import '../src/style.css';
import pageLoad from './pageLoad';
import createMenuPage from './menu';
import createContactPage from './contact';

pageLoad();

const homePage = document.querySelector('#home');
const menuPage = document.querySelector('#menu');
const contactPage = document.querySelector('#contact');

homePage.addEventListener('click', () => {
    pageLoad();
});
menuPage.addEventListener('click', () => {
    createMenuPage();
});
contactPage.addEventListener('click', () => {
    createContactPage();
});