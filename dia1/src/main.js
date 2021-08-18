import './style.css'

const view = document.querySelector('[data-js="app"]');
const link = document.querySelector('[data-js="link"]');

view.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;


link.addEventListener('click', (ev) => {
  ev.preventDefault();

  view.classList.toggle('is-active');
});
