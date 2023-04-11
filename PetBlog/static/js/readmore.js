const description = document.querySelector('.post1__description');
const readMoreButton = document.querySelector('.read-more-button');

readMoreButton.addEventListener('click', function() {
  description.classList.toggle('expanded');
});
