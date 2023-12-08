// Выполняем код внутри блока try
try {
  // Циклом добавляем в localStorage по 102kB до переполнения
  for (i = 100; i <= 10000; i += 10) {
    localStorage.setItem('test', new Array(i * 1024).join('a'));
  }
  // При переполнении перебрасывает в блок catch
} catch (e) {
  // Удаляем из localStorage test
  localStorage.removeItem('test');
  // Выводим примерное значение
  console.log(`Максимальный объем данных, который можно записать в localStorage: ${i}kB`);
}
