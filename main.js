const overlay = document.getElementById('overlay');
const close = document.getElementById('close-menu');
const open = document.getElementById('open-menu');

open.addEventListener('click', function() {
  overlay.classList.remove('remove-menu');
  overlay.classList.toggle('show-menu');
});

close.addEventListener('click', function() {
  overlay.classList.remove('show-menu');
  overlay.classList.add('remove-menu');
});
