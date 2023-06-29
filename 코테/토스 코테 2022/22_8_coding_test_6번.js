function solution(pin) {
  let answer = true;
  pin = pin.split('').map(v => +v);

  //같은 숫자 3검사
  const len = [...new Set(pin)].length;
  if (len === 1) return false;

  let cnt = 0;
  for (let i = 0; i < 2; i++) {
    for (let j = i + 1; j < i + 2; j++) {
      const diff1 = pin[i] - pin[j];
      const diff2 = pin[j] - pin[j + 1];
      if ((diff1 === 1 && diff2 === 1) || (diff1 === -1 && diff2 === -1)) {
        cnt++;
      }
    }
  }

  if (cnt >= 1) return false;

  return answer;
}

let pwd1 = '0120'; //f
let pwd2 = '1234'; //f
let pwd3 = '1098'; // t
let pwd4 = '9013'; // t
let pwd5 = '0101'; // t
let pwd6 = '0000'; // f
let pwd7 = '9870'; // f

console.log(solution(pwd1));
console.log(solution(pwd2));
console.log(solution(pwd3));
console.log(solution(pwd4));
console.log(solution(pwd5));
console.log(solution(pwd6));
console.log(solution(pwd7));
