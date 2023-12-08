function math() {
  // Переменная для хранения массива чисел Фибоначчи
  let fibNumberArray = [];
  // Переменная для хранения массива простых чисел
  let num = [];

  // Функция для вычесления числа Фибоначчи
  function fib(n) {
    // Первые два значения по умолчанию равны 1
    let a = 1;
    let b = 1;
    // Проходимся циклом нужное количество раз
    for (let i = 3; i <= n; i++) {
      // Получим переменную с как сумму двух предыдущих значений
      let c = a + b;
      //  Перезаписываем переменные a и b
      a = b;
      b = c;
    }
    // После вычесления нужного значения возвращаем его
    return b;
  }

  // Функция для вычесления N-го числа Фибоначчи
  function fibNumber(n) {
    // Прохожится циклом по всем числам от 1 до n
    for (let i = 1; i <= n; i++) {
      // Добавляем все числа Фибоначчи в массив
      fibNumberArray.push(fib(i));
    }
    // Возвращаем нужное число Фибоначчи
    return fibNumberArray[n - 1];
  }

  // Функция для вычесления всех чисел в ряду Фибоначчи до числа N
  function fibNumberAll(n) {
    // Прохожится циклом по всем числам от 1 до n
    for (let i = 1; i <= n; i++) {
      // Добавляем все числа Фибоначчи в массив
      fibNumberArray.push(fib(i));
    }
    // Возвращаем все числа Фибоначчи
    return fibNumberArray;
  }

  // Функция для проверки числа(является ли число простым)
  function isPrime(num) {
    // Прохолится циклом по всем числам от 2 до num
    for (let i = 2; i < num; i++) {
      // Возвразает false если число делится без остатка
      if (num % i === 0) return false;
    }
    return num !== 1;
  }

  // Функция для вычесления N-го просто числа
  function printPrime(max) {
    // Проходится циклом столько max-1 раз
    for (let i = 2; num.length < max; i++) {
      // Проверяет простое ли число
      if (isPrime(i)) {
        // Добавляет простое число в массив
        num.push(i);
      }
    }
    // Возвращает n простое число
    return num[max - 1];
  }

  // Функция для вычесления всех простых чисел до числа N
  function printPrimeAll(max) {
    // Проходится циклом столько max-1 раз
    for (let i = 2; i <= max; i++) {
      // Проверяет простое ли число
      if (isPrime(i)) {
        // Добавляет простое число в массив
        num.push(i);
      }
    }
    // Возвращает массив простых чисел до числа n
    return num;
  }
  // Возращает функции
  return { fibNumber, fibNumberAll, printPrime, printPrimeAll };
}

const mathX = math();

console.log(mathX.fibNumber(7));
console.log(mathX.fibNumberAll(7));
console.log(mathX.printPrime(3));
console.log(mathX.printPrimeAll(3));
