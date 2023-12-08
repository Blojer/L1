function checkPerfectNumber(number) {
  // Создаем переменную для суммирования делителей
  let sum = 0;
  // Проходимся по всем числам от 1 до n циклом
  for (let i = 1; number > i; i++) {
    // Выбираем числа, где остаток от деления равен 0
    if (number % i === 0) {
      // Суммируем все делители числа
      sum += i;
    }
  }
  // Сравниваем исхожное число и сумму делителей
  return number === sum;
}

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(59));
console.log(checkPerfectNumber(496));
