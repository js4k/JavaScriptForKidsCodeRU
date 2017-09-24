var boringAnimals = ["Мартышка", "Кот", "Fish", "Lizard"];
boringAnimals.join();
// "Мартышка,Кот,Fish,Lizard"

var boringAnimals = ["Мартышка", "Кот", "Fish", "Lizard"];
boringAnimals.join(" - ");
// "Мартышка - Кот - Fish - Lizard"
boringAnimals.join("*");
// "Мартышка*Кот*Fish*Lizard"
boringAnimals.join(" sees ");
// "Мартышка sees Кот sees Fish sees Lizard"

var myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
myNames.join(" ");
// "Nicholas Andrew Maxwell Morgan"

myNames[0] + " " + myNames[1] + " " + myNames[2] + " " + myNames[3];
// "Nicholas Andrew Maxwell Morgan"
