const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.menu a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const name = new FormData(event.currentTarget).get('name');
  document.querySelector('#form-message').textContent = `Thanks, ${name}! We'll call you shortly.`;
  event.currentTarget.reset();
});
