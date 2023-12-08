// Получить ссылки на элементы container и tetragon
const container = document.getElementById('container');
const tetragon = document.getElementById('tetragon');

// Устанавливаем начальное положение и скорость четырехугольника
let position = 0;
let velocity = 1;

// Определяем функцию для обновления положения четырехугольника
function updatePosition() {
  // Обновляем положение четырехугольника в зависимости от его скорости
  position += velocity;
  tetragon.style.top = position + 'px';

  // Проверяем, попал ли четырехугольник в верхнюю или нижнюю часть контейнера
  const containerHeight = container.clientHeight;
  const tetragonHeight = tetragon.clientHeight;
  if (position <= 0 || position >= containerHeight - tetragonHeight) {
    // Если четырехугольник попал в верхнюю или нижнюю часть, изменяем его скорость на обратную
    velocity = -velocity;
  }

  // Вызываем функцию updatePosition() снова после задержки в 10 миллисекунд
  setTimeout(updatePosition, 10);
}

// Вызываем функцию updatePosition(), чтобы запустить анимацию
updatePosition();
