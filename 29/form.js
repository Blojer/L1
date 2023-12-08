const form = document.querySelector('.form');
const name = form.querySelector('.form__input_type_name');
const surname = form.querySelector('.form__input_type_surname');
const email = form.querySelector('.form__input_type_email');

function handleFormSubmit(e) {
  // Отменяем стандартное поведение формы
  e.preventDefault();

  // Получаем значения полей формы
  const nameValue = name.value;
  const surnameValue = surname.value;
  const emailValue = email.value;

  // Проверяем заполнены ли все поля
  if (nameValue === '' || surnameValue === '' || emailValue === '') {
    alert('Пожалуйста, заполните все поля!');
  } else {
    // Выводим значения формы
    alert(`Имя: ${nameValue} Фамилия: ${surnameValue}  Email: ${emailValue}`);
  }
}

// Отслеживаем summit формы
form.addEventListener('submit', handleFormSubmit);
