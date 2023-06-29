function ajax(delay) {
  return (
    new Promise() <
    string >
    ((resolve, reject) => {
      if (delay > 1000) {
        setTimeout(() => {
          reject('실패');
        }, delay);
      } else {
        setTimeout(() => {
          resolve('성공');
        }, delay);
      }
    })
  );
}
const result = ajax(1000);

async function test() {
  let temp = await result;
  console.log('비동기', temp, typeof temp);
}
test();
console.log(
  result.then(data => {
    console.log(data);
  }),
);
