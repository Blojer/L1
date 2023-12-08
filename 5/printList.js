const list = [
  { name: 'Ford', models: 'Fiesta, Focus, Mustang' },
  { name: 'BMW', models: '320, X3, X5' },
  { name: 'Fiat', models: '500, Panda' }
];

// Функция принимает JSON
function arrayToList(array) {
  // Создаем переменную для списка
  let list = null;
  // Проходимся циклом по всему JSON
  for (let i = array.length - 1; i >= 0; i--) {
    // Записываем в список новый объект
    list = { value: array[i], rest: list };
  }
  // Возвращаем односвязный список.
  return list;
}

console.log(arrayToList(list));
