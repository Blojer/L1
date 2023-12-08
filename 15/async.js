// Функция с setTimeout
function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('2');
    }, 2000);
  });
}

// Асинхронная функция
async function main() {
  // Выводим в консоль 1
  console.log('1');
  // Присваеваем константе результат выполнения функции
  const result = await wait();
  // После того как дожидается выполнения функции выводит результат в консоль
  console.log(result);

  //Выводит в консоль 3
  console.log('3');
  // Возвращает 4
  return '4';
}

main().then(result => {
  // Выводит в консоль 4
  console.log(result);
});
