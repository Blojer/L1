// Создаем класс фигура с методами для расчета площади и периметра

class Shape {
  // Методы класса

  // Вызывается метод constructor(), в нём мы можем инициализировать объект
  constructor(size) {
    this.size = size;
  }

  // Создаем метод для вычисления площади
  getArea() {
    throw new Error("Метод 'getArea()' должен быть переопределен в подклассах");
  }
  // Создаем метод для вычисления периметра

  getPerimeter() {
    throw new Error("Метод 'getPerimeter()' должен быть переопределен в подклассах");
  }
}

// Создаем класс Rectangle, который наследуется от Shape
class Rectangle extends Shape {
  constructor(size, width, height) {
    // Вызываем родительский конструктор
    super(size);
    this.width = width;
    this.height = height;
  }
  // Переопределяем метод getArea()
  getArea() {
    const area = this.width * this.height;
    return `Площадь прямоугольника со сторонами ${this.size} равна ${area}`;
  }

  // Переопределяем метод getPerimeter()
  getPerimeter() {
    const perimeter = (this.width + this.height) * 2;
    return `Периметр прямоугольника со сторонами ${this.size} равен ${perimeter}`;
  }
}

// Создаем класс Circle, который наследуется от Shape
class Circle extends Shape {
  constructor(size, radius) {
    // Вызываем родительский конструктор
    super(size);
    this.radius = radius;
  }

  // Переопределяем метод getArea()
  getArea() {
    const area = Math.PI * this.radius ** 2;
    return `Площадь круга с радиусом ${this.size} равна ${area}`;
  }

  // Переопределяем метод getPerimeter()
  getPerimeter() {
    const perimeter = 2 * Math.PI * this.radius;
    return `Периметр круга с радиусом ${this.size} равен ${perimeter}`;
  }
}

// Создаем класс Triangle, который наследуется от Shape
class Triangle extends Shape {
  constructor(size, sideA, sideB, sideC) {
    // Вызываем родительский конструктор
    super(size);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  // Переопределяем метод getArea()
  getArea() {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    console.log(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    const area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    return `Площадь трегольника со сторонами ${this.size} равна ${area}`;
  }

  // Переопределяем метод getPerimeter()
  getPerimeter() {
    const perimeter = this.sideA + this.sideB + this.sideC;
    return `Периметр трегольника со сторонами ${this.size} равен ${perimeter}`;
  }
}

const triangle = new Triangle('5, 10, и 14', 5, 10, 14);
const rectangle = new Rectangle('5 и 10', 5, 10);
const circle = new Circle('5', 5);

console.log(triangle.getArea());
console.log(triangle.getPerimeter());

console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());

console.log(circle.getArea());
console.log(circle.getPerimeter());
