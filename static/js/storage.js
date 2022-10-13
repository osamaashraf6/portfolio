const name = document.querySelector('.form__control > input#name');
const email = document.querySelector('.form__control > input#email');
const textarea = document.querySelector('.form__control > textarea');
const form = document.querySelector('form');
const emailerror = document.querySelector('#emailerror');
// ========================================================================
form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    emailerror.style.opacity = '1';
  } else {
    const data = {
      name: name.value,
      email: email.value,
      textarea: textarea.value,
    };
    localStorage.setItem('data', JSON.stringify(data));
  }
});
const x = JSON.parse(localStorage.getItem('data'));
name.value = x.name;
email.value = x.email;
textarea.value = x.textarea;
// =========================================================================
