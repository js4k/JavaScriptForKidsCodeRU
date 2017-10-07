var dinosaurs = [
  { name: "Тираннозавр рекс", period: "Верхнемеловой" },
  { name: "Стегозавр", period: "Верхнеюрский" },
  { name: "Платеозавр", period: "Триасовый" }
];

dinosaurs[0];
// { name: "Тираннозавр рекс", period: "Верхнемеловой" }
dinosaurs[0]["name"];
// "Тираннозавр рекс"
dinosaurs[1].period;
// "Верхнеюрский"

var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дейв", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];

friends[1];
// { name: "Дейв", age: 5, luckyNumbers: Array(3) }
// этот неожиданный Array(3) вы увидите в консоли Google Chrome,
// в других же браузерах вы получите более ожидаемый результат
// { name: "Дейв", age: 5, luckyNumbers: [3, 9, 40] }


friends[2].name
// "Кейт"

friends[0].luckyNumbers[1];
// 4
