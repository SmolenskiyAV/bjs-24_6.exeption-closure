function parseCount(inputOfUser) {

    let parsResult = Number.parseInt(inputOfUser, 10); //преобразование аргумента в десятичное число
if (Number.isNaN(parsResult)) throw new Error('Невалидное значение'); // если результат преобразования не является числом

return parsResult; // возврат результата преобразования аргумента
};

function validateCount (inputOfUser2) {

    let parsResult2;
    try {
    parsResult2 = parseCount(inputOfUser2); //парсим аргумент
    }
    catch(err){
       return err; // возврат ошибки из функции
    }
    return parsResult2; // возврат результата преобразования аргумента
};

class Triangle {

    
    constructor(a, b, c) { // ввод и обработка параметров, сторон треугольника
        this.a = a;
        this.b = b;
        this.c = c;
    
    if (((this.a + this.b) < this.c ) || ((this.a + this.c) < b) || ((this.b + this.c) < a))

    throw new Error('Треугольник с такими сторонами не существует'); // условие невозможности создать треугольник
    }
    
    getPerimeter() {return this.a + this.b + this.c} //возврат периметра треугольника

    getArea() {
       let p = this.getPerimeter() / 2; //полупериметр треугольника
       let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); //формула Герона

       return Number((s).toFixed(3)); // возврат площади треугольника, обрезка до третьего знака, преобразование в число
    }
    
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c); //проверка создания объекта Треугольник
    }
    catch(err) { // вывод ошибки, в случ неудачной попытки создания объекта Треугольник
        return {
            getArea() {
            return "Ошибка! Треугольник не существует";
            }, 
            getPerimeter() {
            return "Ошибка! Треугольник не существует";
            }
        }
    }
};
