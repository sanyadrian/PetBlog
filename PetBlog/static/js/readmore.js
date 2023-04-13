const readMoreButtons = document.querySelectorAll('.read-more-button');
const postDetails = document.querySelectorAll('.post1__details');

postDetails.forEach(function(postDetail) {
    const readMoreButton = postDetail.querySelector('.read-more-button');
    const description = postDetail.querySelector('.post1__description');

    readMoreButton.addEventListener('click', function(e) {
        e.preventDefault();
        description.classList.toggle('expanded');
        readMoreButton.textContent = description.classList.contains('expanded') ? 'Read less' : 'Read more';
    });
});

//readMoreButton.addEventListener('click', function(e) {
//  if (e.target.classList.contains('read-more-button')) {
//    e.target.classList.toggle('expanded');
//
//    if (e.target.classList.contains('expanded')) {
//      description.style.height = 'auto';
//      e.target.textContent = 'Read less';
//    } else {
//      description.style.height = '100px';
//      e.target.textContent = 'Read more';
//      e.target.remove('expanded')
//    }
//  }
//});