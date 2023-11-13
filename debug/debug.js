const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger;
    // на данный момент у нас вызвана функция, которой передали переменные 30 и 3, 
    // инициализирована новая пременная bonus,
    // подсчитано значение sum (33)
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger;
    // здесь сравнили значение sum c 50: если больше, то значение переменной bonus присваиваем 50,
    // в ином случае, переменной bonus передаем значение перемнной sum;
    // возвращаем значение переменной bonus
    return bonus;
    };

//    console.log(calculateBonus(30,3)) 

   module.exports = calculateBonus;