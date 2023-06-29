// 동전교환(냅색 알고리즘)
// 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환
// 해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.
// ▣ 입력설명
// 첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종
// 류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
// 각 동전의 종류는 100원을 넘지 않는다.
// ▣ 출력설명
// 첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다

// 인프런 김태원샘 알고리즘 js 초급 - 다이나믹 4번 동전교환 문제
// 나만의 풀이

function solution(coin, change) {
  const dy = Array.from({length: change + 1}, () => 1000);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= change; j++) {
      const std = dy[j - coin[i]] + 1;
      if (std < dy[j]) {
        dy[j] = std;
      }
    }
    // console.log(dy);
  }
  return dy;
}

const coin = [1, 2, 5];
console.log(solution(coin, 15));
