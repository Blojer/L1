//Функция возвращающая другую функцию
function createFunc() {
  // Объявдяем пересенную y которая будет доступна во внутренней функции
  let y = 9;

  // Создаем внутреннюю функцию
  function innerFunc(x) {
    return x ** 2 + y;
  }
  // Возвращаем внутренюю функцию
  return innerFunc;
}

const func = createFunc();
console.log(func(2));
