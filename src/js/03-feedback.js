const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onSubmit);
refs.input.addEventListener('input', onInputCheange);

function onSubmit(evt) {
  evt.preventDefault();
}

function onInputCheange(evt) {
  console.log(evt.target.value);
}
