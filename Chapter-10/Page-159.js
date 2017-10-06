var counter = 1;

var printMessage = function () {
  console.log("Ты смотришь в консоль уже " + counter + " сек");
  counter++;
};

var intervalId = setInterval(printMessage, 1000);
// Ты смотришь в консоль уже 1 сек
// Ты смотришь в консоль уже 2 сек
// Ты смотришь в консоль уже 3 сек
// Ты смотришь в консоль уже 4 сек
// Ты смотришь в консоль уже 5 сек
// Ты смотришь в консоль уже 6 сек
clearInterval(intervalId);
