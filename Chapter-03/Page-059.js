var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
furryAndScalyAnimals;
// ["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Годзилла"]
furryAnimals;
// ["Альпака", "Кольцехвостый лемур", "Йети"]
scalyAnimals;
// ["Удав", "Годзилла"]

var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var featheredAnimals = ["Ара", "Додо"];
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
allAnimals;
// ["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Годзилла", "Ара", "Додо"]
