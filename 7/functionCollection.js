const functionCollection = [
  () => console.log(1),
  () => console.log(2),
  () => console.log(3),
  () => console.log(4),
  () => console.log(3),
  () => console.log(2),
  () => console.log(1)
];

function getFuntions(array) {
  // Проходим циклом по массиву
  for (let i = 0; i < array.length; i++) {
    // Вызываем каждую функцию массива друг за другом
    array[i]();
  }
}

getFuntions(functionCollection);
