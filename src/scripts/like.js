const likeButtons = document.querySelectorAll('.card__like-button');
const iconButtons = document.querySelectorAll('.card__icon-button');

function toggleLike(index) {
  const heart = document.querySelectorAll('.like-icon')[index];
  const button = document.querySelectorAll('.card__like-button')[index];
  const buttonText = button.querySelector('.button__text');

  heart.classList.toggle('is-liked');

  if (heart.classList.contains('is-liked')) {
    buttonText.textContent = 'Unlike';
    // Add a small scale animation via JS if needed, but CSS handles it
  } else {
    buttonText.textContent = 'Like';
  }
}

iconButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => toggleLike(index));
});

likeButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => toggleLike(index));
});
