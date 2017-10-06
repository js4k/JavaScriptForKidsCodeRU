var speak = function () {
  console.log(this.sound + "! Меня зовут " + this.name + "!");
};

var cat = {
  sound: "Мяу",
  name: "Варежка",
  speak: speak
};

cat.speak();
// Мяу! Меня зовут Варежка!

var pig = {
  sound: "Хрю",
  name: "Чарли",
  speak: speak
};

var horse = {
  sound: "И-го-го",
  name: "Мэри",
  speak: speak
};

pig.speak();
// Хрю! Меня зовут Чарли!

horse.speak();
// И-го-го! Меня зовут Мэри!
