const users = [
  { name: 'John', age: 25 },
  { name: 'Michael', age: 26 },
  { name: 'Robert', age: 37 },
  { name: 'Charlie', age: 35 },
  { name: 'Thomas', age: 25 }
];

// Принимает массив объектов
function objectSort(array) {
  // Применяем метод сортировка массива
  return array.sort((a, b) => {
    // Если возраст a больше возраста b
    if (a.age > b.age) return 1;
    // Если возраст a и b равны, то сортируем по имени
    if (a.age === b.age) {
      // Если имя a больше имени b
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    }
    return -1;
  });
}

console.log(objectSort(users));
