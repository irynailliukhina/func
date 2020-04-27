//1/Написать функцию, которая принимает 2 числа и возвращает -1,
//если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

// function compare(a, b) {
//     if (a < b) {
//         console.log('-1');
//     } else if (a > b) {
//         console.log(1);
//     } else {
//         console.log(0);
//     }
// }
// compare(6, 3);

//2.Написать функцию, которая вычисляет факториал переданного ей числа.
//?????
// function factorial(a) {
//     if (a === 0 || a === 1) {
//         return 1;
//     } else {
//         return a * factorial(a - 1)
//     }
// }
// console.log(factorial(3))

//3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

// function num(a, b, c) {
//     let concNum = `${a}${b}${c}`;
//     console.log(Number(concNum));
// }
// num(1, 3, 5)

//4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
//Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function p(a, b) {
//     if (b) {
//         console.log((a + b) * 2);
//     } else {
//         console.log(a * 4);
//     }
// }

// p(1, 3);
// p(5);

//5.Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
//Совершенное число – это число, равное сумме всех своих собственных делителей.

// function isPerfect(a) {
//     let sum = 0;
//     for (let i = 1; i < a; i++) {
//         if (!(a % i)) {
//             sum += i;
//             if (sum === a) {
//                 console.log("Is perfect")
//             } else {
//                 console.log('Isn`t perfect')
//             }
//         }
//     }
// }

// isPerfect(5);
// isPerfect(6);

//6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и 
//выводит только те числа из диапазона, которые являются совершенными. 
//Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

// function isPerfect(a) {
//     let sum = 0;
//     for (let i = 1; i < a; i++) {
//         if (!(a % i)) {
//             sum += i;
//             return sum === a;
//         }
//     }
// }
// function perfectIn(x, y) {
//     for (let i = x; i <= y; i++) {
//         if (isPerfect(i)) {
//             console.log(i)
//             continue
//         }

//     }
// }
// perfectIn(5, 1900)

//7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
//Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// function timeFormat(hour, min, sec) {
//     let h,
//         m,
//         s;
//     if (hour > 23 || hour < 0) {
//         return console.error("wrong");
//     } else if (hour === 0) {
//         h = `00`;
//     } else if (hour < 10) {
//         h = `0${hour}`;
//     } else {
//         h = hour;
//     };

//     if (min > 59 || min < 0) {
//         return console.error("wrong");
//     } else if (min === 0) {
//         m = `00`;
//     } else if (min < 10) {
//         m = `0${min}`;
//     } else {
//         m = min;
//     };

//     if (sec > 59 || sec < 0) {
//         return console.error("wrong");
//     } else if (sec === 0) {
//         s = `00`;
//     } else if (sec < 10) {
//         s = `0${sec}`;
//     } else {
//         s = sec;
//     };

//     return console.log(`${h}:${m}:${s}`);

// }

// timeFormat(2, 8, 11)


//8.Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

// function toSec(hour, min, sec) {
//     let h,
//         m,
//         s;
//     if (hour > 23 || hour < 0) {
//         return console.error("wrong");
//     } else {
//         h = hour * 3600;
//     };

//     if (min > 59 || min < 0) {
//         return console.error("wrong");
//     } else {
//         m = min * 60;
//     };

//     if (sec > 59 || sec < 0) {
//         return console.error("wrong");
//     } else {
//         s = sec;
//     };
//     return console.log(`${h + m + s} sec`);
// }
// toSec(22, 2, 80)

//9.Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

// function secToFormat(sec) {
//     let h = Math.floor(sec / 3600);
//     let m = Math.floor((sec % 3600) / 60);
//     let s = (sec % 3600) % 60;
//     return console.log(`${h}:${m}:${s}`);
// }

// secToFormat(13600)

//10.Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, 
//и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: 
//сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

// function toSec(hour, min, sec) {
//     let h,
//         m,
//         s;
//     if (hour > 23 || hour < 0) {
//         return console.error("wrong");
//     } else {
//         h = hour * 3600;
//     };

//     if (min > 59 || min < 0) {
//         return console.error("wrong");
//     } else {
//         m = min * 60;
//     };

//     if (sec > 59 || sec < 0) {
//         return console.error("wrong");
//     } else {
//         s = sec;
//     };
//     return h + m + s;
// }

// function secToFormat(sec) {
//     let h = Math.floor(sec / 3600);
//     let m = Math.floor((sec % 3600) / 60);
//     let s = (sec % 3600) % 60;
//     return console.log(`${h}:${m}:${s}`);
// }

// function difference(hour1, min1, sec1, hour2, min2, sec2) {
//     let x = toSec(hour1, min1, sec1);
//     let y = toSec(hour2, min2, sec2);
//     if (x > y) {
//         return secToFormat(x - y);
//     } else {
//         return secToFormat(y - x)
//     };
// }

// difference(22, 33, 44, 12, 34, 0)