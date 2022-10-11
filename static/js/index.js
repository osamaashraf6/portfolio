// All required elements
const burger = document.querySelector(
  '.header__container__parhead__nav__ul__responsive',
);
const iwq = document.querySelector('.iwq');

burger.addEventListener('click', () => {
  if (burger.classList.contains('change')) {
    burger.classList.remove('change');
  } else {
    burger.classList.add('change');
  }

  if (iwq.classList.contains('show')) {
    iwq.classList.remove('show');
  } else {
    iwq.classList.add('show');
  }

  // iwq.style.display = "flex";
});
