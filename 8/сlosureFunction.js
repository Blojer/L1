const functionCollection = [() => 'Приветики', () => 'пистолетики', () => 1, () => 2, () => 3];

function closureFunction(array) {
  return () => {
    // Создаем переменную для результатов выполнения функции
    let res = [];
    // Проходимся по циклом по массиву и выполняем все функции
    for (let i = 0; i < array.length; i++) {
      // Записываем результат выполнеия функции в переменную
      let functionRes = array[i]();
      // Добавляем резудьтат в массив
      res.push(functionRes);
    }
    // Возращаем результирующий массив
    return res;
  };
}

// Присваиваем константе результат выполнеия функции
const closure = closureFunction(functionCollection);

console.log(closure());
