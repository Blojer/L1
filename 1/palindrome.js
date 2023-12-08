function checkPalindrome(data) {
  // Приводим входные данные к строкову виду, переводим данные к одному регистру и убираем лишние символы при помози регулярного выражения.
  data = data
    .toString()
    .toLowerCase()
    .replace(/\s|[,.!?"/-]/g, '');
  // Разбиваем получившуюся строку на массив, меняем порядок элементов на обратный, создаем строку из получивщегося массива и сравниваем с изначальной строкой.
  return data.split('').reverse().join('') === data;
}

console.log(checkPalindrome(12521));
console.log(checkPalindrome('аргентина манит негра'));
console.log(checkPalindrome('дуд'));
console.log(checkPalindrome('Hello world!'));
console.log(checkPalindrome('Аргентина манит негра'));
