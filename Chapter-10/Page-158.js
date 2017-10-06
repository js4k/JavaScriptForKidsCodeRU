var doHomeworkAlarm = function () {
  alert("Эй! Пора делать домашку!");
};

var timeoutId = setTimeout(doHomeworkAlarm, 60000);

clearTimeout(timeoutId);
