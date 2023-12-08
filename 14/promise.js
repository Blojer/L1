// Записываем ссылку на изображение в конмтанту
const imageURL =
  'https://fikiwiki.com/uploads/posts/2022-02/1644981595_3-fikiwiki-com-p-krasivie-kartinki-sakura-3.jpg';

// Создаем функцию для получения информации о изобрадении
function getImageInfo(url) {
  // Возвращаем новый промис
  return new Promise((res, rej) => {
    // Создаем изображение
    const img = new Image();
    // Присваеваем изображению src (равен нашей передаваемой ссылке)
    img.src = url;
    // Если изображение загрузилось успещно
    img.addEventListener('load', () => {
      res({
        width: img.width,
        height: img.height
      });
    });
    // Если при загрузке изображения произошла ошибка
    img.addEventListener('error', () => rej(new Error('Ошибка при загрузке изображения')));
  });
}

// Вызываем функцию и передаем наш url
getImageInfo(imageURL)
  // Если функция выполнена успешно
  .then(data => {
    alert(`width: ${data.width}, height: ${data.height}`);
  })
  // Если произошла ошибка
  .catch(err => alert(err));
