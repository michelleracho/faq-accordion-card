const faqItem = document.querySelectorAll('.faq__item');
const faqAnswer = document.querySelectorAll('.faq__answer');

function toggleActive(target) {
  let question = target.querySelector('.faq__question');
  let answer = target.querySelector('.faq__answer');
  let showBtn = target.querySelector('.show-btn');

  question.classList.toggle('faq__question--active');
  answer.classList.toggle('faq__answer--active');
  showBtn.classList.toggle('show-btn--active');

  answer.classList.contains('faq__answer--active')
    ? (answer.style.maxHeight = `${answer.scrollHeight}px`)
    : (answer.style.maxHeight = 0);
}

// toggle faq answer
faqItem.forEach(item => {
  item.addEventListener('click', () => toggleActive(item));
});

// prevent toggleActive event on answer click
faqAnswer.forEach(answer => {
  answer.addEventListener('click', e => e.stopPropagation());
});
