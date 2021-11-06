// async 개념 복습

// const AsyncFunction = () => {
//   return new Promise((resolve, reject) => {
//     const value = "This is AsyncFunction";
//     setTimeout(() => {
//       resolve(value);
//     }, 3000);
//   });
// };

// const AsyncFunction = async () => {
//   const value = "ad";
//   setTimeout(() => {
//     console.log("start AsyncFunction Timeout");
//     console.log(value);
//     return value;
//   }, 3000);
// };

// const testFunction = async () => {
//   console.log("testFunction - 1");
//   const value = await AsyncFunction();

//   //   await new Promise((resolve, reject) => {
//   //     setTimeout(() => {
//   //       console.log(2);
//   //     }, 3000);
//   //   });
//   console.log(value);
//   console.log("testFunction - 2");
// };

// testFunction();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  const apple = "apple";
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
  return apple;
}

async function getBanana() {
  const banana = "banana";
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
  return banana;
}

async function pickAllFruits() {
  const PromiseArray = [getApple(), getBanana()];
  // Promise<String[]>
  return Promise.all(PromiseArray);
}

async function pickFruits() {
  const value = await pickAllFruits();
  return value.join(" + ");
}

pickFruits().then((value) => console.log(value));
