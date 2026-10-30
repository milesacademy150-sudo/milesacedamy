const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.menu a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const enquiryForm = document.querySelector('#enquiry-form');
enquiryForm?.addEventListener('submit', async event => {
  event.preventDefault();
  const message = document.querySelector('#form-message');
  const submitButton = enquiryForm.querySelector('button[type="submit"]');
  const name = new FormData(enquiryForm).get('name');

  submitButton.disabled = true;
  message.textContent = 'Sending your enquiry...';

  const formData = Object.fromEntries(new FormData(enquiryForm).entries());
  formData._subject = 'New Miles Academy website enquiry';
  formData._template = 'table';
  formData._url = window.location.href.split('?')[0].split('#')[0];

  try {
    const response = await fetch('https://formsubmit.co/ajax/milesacademy150@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();

    if (!response.ok || result.success !== 'true' && result.success !== true) {
      throw new Error(result.message || 'Unable to send your enquiry.');
    }

    message.textContent = `Thank you, ${name}! Your enquiry has been sent. We will contact you soon.`;
    enquiryForm.reset();
  } catch (error) {
    message.textContent = `Enquiry not sent: ${error.message || 'Please try again or call +91 74792 29025.'}`;
  } finally {
    submitButton.disabled = false;
  }
});
