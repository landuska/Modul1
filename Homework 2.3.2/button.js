
class Button {
    constructor (width, height, type, color) {
        this.width = width;
        this.height = height;
        this.type = type;
        this.color = color;
    };
    onClick() {
        console.log(`width: ${this.width}, height: ${this.height}, type: ${this.type}, color: ${this.color}`)
    };
};

let buttonObjekt = new Button (5, 2, "Button", "green");
buttonObjekt.onClick();
