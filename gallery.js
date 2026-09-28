const photos = [...document.querySelectorAll('.photo')];
const dialog = document.querySelector('dialog');
const viewer = document.querySelector('#viewer-image');
let current = 0;
function show(index) {
  current = (index + photos.length) % photos.length;
  const photo = photos[current];
  viewer.src = photo.href;
  viewer.alt = photo.querySelector('img').alt;
  document.querySelector('#viewer-title').textContent = photo.dataset.title;
  document.querySelector('#counter').textContent = `${current + 1} / ${photos.length}`;
}
photos.forEach((photo, index) => photo.addEventListener('click', event => {
  event.preventDefault();
  show(index);
  dialog.showModal();
}));
document.querySelector('.close').addEventListener('click', () => dialog.close());
document.querySelector('.previous').addEventListener('click', () => show(current - 1));
document.querySelector('.next').addEventListener('click', () => show(current + 1));
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
});
