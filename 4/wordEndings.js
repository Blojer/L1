// Функция принимает число и массив с 3 словами.
function wordEnding(number, wordsArr) {
  // Делаем значение абсолютным и находим остаток от деления на 100
  n = Math.abs(number) % 100;
  // Находим остаток от деления на 10
  const n1 = n % 10;
  // Если остаток от деления больше 10, но меньше 20
  if (n > 10 && n < 20) {
    return `${number} ${wordsArr[2]}`;
  }
  // Если остаток от деления больше 1, но меньше 5
  if (n1 > 1 && n1 < 5) {
    return `${number} ${wordsArr[1]}`;
  }
  // Если остаток от деления равен 1
  if (n1 === 1) {
    return `${number} ${wordsArr[0]}`;
  }
  // Все иныен случаи
  return `${number} ${wordsArr[2]}`;
}

// module.exports = { wordEnding };

console.log(wordEnding(23, ['сообщение', 'сообщения', 'сообщений']));
console.log(wordEnding(112, ['сообщение', 'сообщения', 'сообщений']));
console.log(wordEnding(1, ['сообщение', 'сообщения', 'сообщений']));

console.log(wordEnding(1024, ['пользователь', 'пользователя', 'пользователей']));
console.log(wordEnding(1026, ['пользователь', 'пользователя', 'пользователей']));
console.log(wordEnding(121, ['пользователь', 'пользователя', 'пользователей']));
