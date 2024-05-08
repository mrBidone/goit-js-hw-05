console.log("TASK-2 ========================================");

// Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня. 
// Функція очікує один параметр: days — масив об’єктів.
// Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.У консоль будуть виведені результати її викликів.


function calcAverageCalories(days) {

  const totalSumDays = days.length;
  let sumCalories = 0;
  let result = 0;

  // "Для запобігання ділення на 0 в кінцевому результаті, проводимо перевірку що обʼект не пустий. Якщо обʼєкт не пустий - запускаємо цикл For для подальших розрахунків, в іншому випадку функція завершиться і повернеться значення вказане в змінну result = 0"
  if (totalSumDays > 0) {  
    for (const day of days) {
      sumCalories += day.calories;
    } 
    result = sumCalories / totalSumDays;
  } 

  return result;
 
  }


console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

