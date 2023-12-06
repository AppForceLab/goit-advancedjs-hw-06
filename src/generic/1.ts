/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T>() {
  return new Promise<T>((resolve) => {
    resolve(["Text", 50] as T);
  });
}

// Використання generics при виклику функції
getPromise<[string, number]>().then((data) => {
  console.log(data);
});

export {};
