const mobileMenu = document.querySelector('.mobile-nav');
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => { mobileMenu.open = false; });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu.open) {
    mobileMenu.open = false;
    mobileMenu.querySelector('summary').focus();
  }
});

const copyButton = document.querySelector('#copy-inquiry');
const template = document.querySelector('#inquiry-template');
const copyStatus = document.querySelector('#copy-status');

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(template.value.trim());
    copyStatus.textContent = 'コピーしました。フォームの相談欄に貼り付けてお使いください。';
    template.hidden = true;
  } catch {
    template.hidden = false;
    template.focus();
    template.select();
    copyStatus.textContent = '下のひな形を選択しました。コピーしてお使いください。';
  }
});
