// Создание класса Button
class Button {
    constructor (width, height, type, color) {
        this.width = width;
        this.height = height;
        this.type = type;
        this.color = color;
    };
    // Создание функции, которая выводит свойства экземлпяра класса
    onClick() {
    let properties = {
        width: this.width,
        height: this.height,
        type: this.type,
        color: this.color
    };
        console.log(properties);
    };
};

// создание функции, которая сравнивает свойства экземпляра с заданными
function testButton(objektProp, propValue) {
    if (objektProp == propValue) {
        console.log("true");
    } else {
        console.log("false")
    };
};

// Создание экземпляра класса Button
let buttonObjekt = new Button (5, 2, "Button", "green");
console.log(buttonObjekt);

// Проверка свойств экземпляра с заданными при помощи вызова функции
testButton(buttonObjekt.width, 5);
testButton(buttonObjekt.height, 2);
testButton(buttonObjekt.type, "Button");
testButton(buttonObjekt.color, "red");