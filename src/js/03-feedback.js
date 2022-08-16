import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onInputCheange, 500));
const formData = {};

populateInput();

function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
}

function onInputCheange(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateInput() {
  const savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    const savedMessagePars = JSON.parse(savedMessage);
    refs.input.value = savedMessagePars['email'];
    refs.textarea.value = savedMessagePars['message'];
  }
}
