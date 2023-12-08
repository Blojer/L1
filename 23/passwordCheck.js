// Функция для проверки сложности пароля
function passwordCheck(password) {
  // Переменная для подсчета ошибок
  let error = 0;

  // Регулярные выжанения
  const regLowerCase = /[a-zа-я]/;
  const regUpperCase = /[A-ZА-Я]/;
  const regNumbers = /[0-9]/;
  const regSymbols = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;

  // Проверка пароля регулярными выражениями
  const hasLowerCase = password.match(regLowerCase);
  const hasUpperCase = password.match(regUpperCase);
  const hasNumbers = password.match(regNumbers);
  const hasSymbols = password.match(regSymbols);

  // Если пароль меньше 8 символов
  if (password.length < 8) {
    console.log('Пароль должен быть больше 8 символов');
    error++;
  }

  // Если пароль не содердит строчные буквы
  if (!hasLowerCase) {
    console.log('Добавьте строчные буквы');
    error++;
  }

  // Если пароль не содердит заглавные буквы
  if (!hasUpperCase) {
    console.log('Добавьте заглавные буквы');
    error++;
  }

  // Если пароль не содердит числел
  if (!hasNumbers) {
    console.log('Добавьте числа');
    error++;
  }

  // Если пароль не содердит символы
  if (!hasSymbols) {
    console.log('Добавьте символы');
    error++;
  }
  // Выводим сложность пароля в консоль
  console.log(`Сложность пароля ${5 - error}/5`);
}

passwordCheck('ASJDHKJASdsadas314.');
