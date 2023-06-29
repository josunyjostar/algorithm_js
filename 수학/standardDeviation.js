//표준편차 구하는 함수 (모집단)
function standardDeviaion(...args) {
  //
  const N = args.length | 1;
  if (N < 2) {
    console.log('변량이 2개 이상이여야 합니다.');
    return;
  }

  const mean = (args.reduce((acc, v) => acc + v, 0) / N).toFixed(2);
  const dispersion =
    args.reduce((acc, v) => {
      const deviation = (v - mean) ** 2;
      return acc + deviation;
    }, 0) / N;

  const stdDeviation = Math.sqrt(dispersion).toFixed(2);
  console.log(mean, stdDeviation);

  return answer;
}
standardDeviaion(2, 3, 4, 5, 6);
