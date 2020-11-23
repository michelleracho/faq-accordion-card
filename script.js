const faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach(item => {
  item.addEventListener('click', () => toggleActive(item));
});

// toggle faq answer
function toggleActive(target) {
  let question = target.querySelector('.faq__question');
  let answer = target.querySelector('.faq__answer');
  let showBtn = target.querySelector('.show-btn');

  question.classList.toggle('faq__question--active');
  answer.classList.toggle('faq__answer--active');
  showBtn.classList.toggle('show-btn--active');
}
