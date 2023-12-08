const data = {
  trailingComma: 'es5',
  tabWidth: 4,
  semi: false,
  singleQuote: true
};

const customJsonToString = json => {
  // Создаем строку с открываюзей скобкой
  let string = '{';
  // Перебираем циклом ключи в json
  for (let key in json) {
    // Проверяем содержит ли объект указанное свойство
    if (json.hasOwnProperty(key)) {
      // Проверяем тип ключа
      if (typeof json[key] == 'boolean' || typeof json[key] == 'number') {
        // Если булевое или число, то у ключа нет кавычек
        string += `"${key}":${json[key]},`;
      } else {
        // Во всех остальных случаях
        string += `"${key}":"${json[key]}",`;
      }
    }
  }
  // Удаляем последнюю запятую
  string = string.slice(0, -1);
  // Добавляем закрываюзую скобку
  string += '}';
  // Возвразаем строку
  return string;
};

console.log(customJsonToString(data));

console.log(JSON.stringify(data));
