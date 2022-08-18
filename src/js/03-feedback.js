import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onInputCheange, 500));

let formData = {};

populateInput();

function onSubmit(evt) {
  evt.preventDefault();
  if (evt.target[0].value !== '' && evt.target[1].value !== '') {
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
    formData = {};
  }
}

function onInputCheange(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateInput() {
  const savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    const savedMessagePars = JSON.parse(savedMessage);

    if (savedMessagePars['email'] !== undefined) {
      refs.input.value = savedMessagePars['email'];
    } else {
      refs.input.value = '';
    }

    if (savedMessagePars['message'] !== undefined) {
      refs.textarea.value = savedMessagePars['message'];
    } else {
      refs.textarea.value = '';
    }
  }
}
