var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
boringAnimals.join();
// "Мартышка,Кот,Рыба,Ящерица"

var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
boringAnimals.join(" - ");
// "Мартышка - Кот - Рыба - Ящерица"
boringAnimals.join("*");
// "Мартышка*Кот*Рыба*Ящерица"
boringAnimals.join(" sees ");
// "Мартышка sees Кот sees Рыба sees Ящерица"

var myNames = ["Николас", "Эндрю", "Максвелл", "Морган"];
myNames.join(" ");
// "Николас Эндрю Максвелл Морган"

myNames[0] + " " + myNames[1] + " " + myNames[2] + " " + myNames[3];
// "Николас Эндрю Максвелл Морган"
