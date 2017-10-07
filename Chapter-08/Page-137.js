var fifthLetter = function (name) {
  if (name.length < 5) {
    return;
  }

  return "Пятая буква вашего имени: " + name[4] + ".";
};

fifthLetter("Николай");
// "Пятая буква вашего имени: о."

fifthLetter("Ник");
// undefined
