// получаем содердимое template
const userTemplate = document.querySelector('#user').content;
// контейнер куда вставлять новые элементы
const usersOnline = document.querySelector('.users-online');

// клонируем содержимое тега template
const userElement = userTemplate.querySelector('.user').cloneNode(true);

// наполняем содержимым
userElement.querySelector('.user__avatar').src =
  'https://images.radio.com/aiu-media/Dog%20Mayor%20Thumb.jpg';
userElement.querySelector('.user__name').textContent = 'Дюк Корморант';

// отображаем на странице
usersOnline.append(userElement);
