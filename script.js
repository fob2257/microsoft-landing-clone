document
  .querySelector('.footer-inner li:last-child')
  .append(` ${new Date().getFullYear()}`);

document
  .querySelector('.menu-btn')
  .addEventListener('click', () =>
    document.querySelector('.main-menu').classList.toggle('show')
  );
