// 1. **Моделирование Задержки Выполнения**:
// Напишите функцию, которая принимает число в качестве входных данных и
// возвращает промис, который разрешается после указанного количества миллисекунд.
// Используйте эту функцию, чтобы создать задержку в 2 секунды, а затем
// зарегистрировать сообщение в консоли после разрешения промиса.

// function wait(time) {
//   let yoxlanis = true;
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (yoxlanis) {
//         resolve("Funksiya ugurla isleyir.");
//       } else {
//         reject("Error!!!");
//       }
//     }, time * 1000);
//   });
//   return promise;
// }
// wait(7)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ------------------------------------------------------------------------------------

// 2. **Цепочка Промисов**:
// Создайте две функции, `firstTask` и `secondTask`, каждая из которых возвращает
// промис, разрешающийся строковым сообщением. Свяжите эти промисы так, чтобы
// вторая задача выполнялась только после разрешения первой. Наконец,
// зарегистрируйте объединенный результат в консоли.

// function firstTask() {
//   let yoxlanis = true;
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (yoxlanis) {
//         resolve("First task ugurla isleyir.");
//       } else {
//         reject("First task Error!!!");
//       }
//     }, 2400);
//   });
//   return promise;
// }

// function secondTask() {
//   let yoxlanis = true;
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (yoxlanis) {
//         resolve("Second task ugurla isleyir.");
//       } else {
//         reject("Second task Error!!!");
//       }
//     }, 3400);
//   });
//   return promise;
// }

// firstTask()
//   .then((message) => {
//     console.log(message);
//     return secondTask();
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// -------------------------------------------------------------------------------------------

//   3. **Использование Promise.all()**:
//   Создайте три отдельные функции, каждая из которых возвращает промис, который
//   разрешается строковым сообщением после указанной задержки. Используйте
//   `Promise.all()` для выполнения всех трех функций параллельно и зарегистрируйте
//   массив разрешенных сообщений после разрешения всех промисов.

// function promise1() {
//   let yoxlanis = true;
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (yoxlanis) {
//         resolve("Promise 1 ugurla isleyir.");
//       } else {
//         reject("Promise 1 Error!!!");
//       }
//     }, 1700);
//   });
//   return promise;
// }

// function promise2() {
//   let yoxlanis = true;
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (yoxlanis) {
//         resolve("Promise 2 ugurla isleyir.");
//       } else {
//         reject("Promise 2 Error!!!");
//       }
//     }, 2000);
//   });
//   return promise;
// }
// function promise3() {
//   let yoxlanis = true;
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (yoxlanis) {
//         resolve("Promise 3 ugurla isleyir.");
//       } else {
//         reject("Promise 3 Error!!!");
//       }
//     }, 3500);
//   });
//   return promise;
// }
// Promise.all([promise1(), promise2(), promise3()])
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// -------------------------------------------------------------------------------------

//   4. **Сценарий с Promise.race()**:
//   Напишите две функции, `fastTask` и `slowTask`, каждая из которых возвращает
//   промис, который разрешается строковым сообщением после различных временных
//   задержек (один быстрый, другой медленный). Используйте `Promise.race()` для
//   выполнения обеих функций и зарегистрируйте результат промиса, который
//   разрешается первым.

// function fastTask() {
//   let yoxlanis = true;
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (yoxlanis) {
//         resolve("Fast task ugurla isleyir.");
//       } else {
//         reject("Fast task Error!!!");
//       }
//     }, 2000);
//   });
//   return promise;
// }
// function slowTask() {
//   let yoxlanis = true;
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (yoxlanis) {
//         resolve("Slow task ugurla isleyir.");
//       } else {
//         reject(" Slow task Error!!!");
//       }
//     }, 5555);
//   });
//   return promise;
// }

// Promise.race([fastTask(), slowTask()])
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
