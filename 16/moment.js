// Используем require для импорта библиотеки
const moment = require('moment');

const momentDate = date => {
  // Если дата не передана, возвращаем текущюю фотрматированую дату
  if (date === undefined) {
    return moment().format('Do MMM  YY');
  } else {
    // Если дата была передана, возвращаем форматированную дату
    return moment(date).format('Do MMM  YY');
  }
};

// Экспортируем модуль
module.exports = { momentDate };

// Выводим в консоль текущюю дату
console.log(momentDate());
