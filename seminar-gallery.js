const seminarDialog = document.querySelector('.seminar-dialog');
const seminarImage = seminarDialog.querySelector('.seminar-dialog-body img');
const seminarCaption = seminarDialog.querySelector('#seminar-dialog-caption');
const seminarClose = seminarDialog.querySelector('.seminar-close');

document.querySelectorAll('[data-seminar-image]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (typeof seminarDialog.showModal !== 'function') return;
    event.preventDefault();
    seminarCaption.textContent = link.dataset.caption;
    seminarImage.alt = link.dataset.caption;
    seminarImage.src = link.href;
    seminarDialog.showModal();
    seminarClose.focus();
  });
});
seminarClose.addEventListener('click', () => seminarDialog.close());
seminarDialog.addEventListener('click', event => {
  const bounds = seminarDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    seminarDialog.close();
  }
});
