const seminarDialog = document.querySelector('.seminar-dialog');
const seminarImage = seminarDialog.querySelector('.seminar-dialog-body img');
const seminarCaption = seminarDialog.querySelector('#seminar-dialog-caption');
const seminarClose = seminarDialog.querySelector('.seminar-close');

function revealLinkedEvidence() {
  if (!location.hash) return;
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (!target) return;
  let parent = target.parentElement;
  while (parent) {
    if (parent.tagName === 'DETAILS') parent.open = true;
    parent = parent.parentElement;
  }
  requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
}
window.addEventListener('hashchange', revealLinkedEvidence);
revealLinkedEvidence();

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
