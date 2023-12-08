function addElement() {
  // Создаем новый элемент
  const newDiv = document.createElement('div');
  // Добавляем текст элементу
  newDiv.textContent = 'Hello !';
  // Добавляем стили
  newDiv.setAttribute(
    'style',
    'color:red; border: 3px solid #000; width: 100px; height: 100px; border-radius: 50%; margin: 50px auto; display: flex; justify-content: center; align-items: center;'
  );
  // Добавляем на страницу
  document.body.appendChild(newDiv);
}

addElement();
