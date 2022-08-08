function solution(ids, days) {
  const id = new Map();
  const answer = [];

  for (let i = 0; i < ids.length; i++) {
    const val = id.get(ids[i]);

    if (val) {
      id.set(ids[i], [...val, days[i]]);
    } else {
      id.set(ids[i], [days[i]]);
    }
  }

  [...id.keys()].forEach(v => {
    const checkday = id.get(v);
    const set = new Set(checkday);
    if ([...set].length >= 3) answer.push(v);
  });

  return answer;
}

const ids1 = [3, 1, 2, 2, 3, 3, 1, 1, 3];
const days1 = ['월', '월', '화', '화', '목', '수', '수', '일', '일'];

const ids2 = [1, 1, 1];
const days2 = ['월', '월', '수'];

solution(ids2, days2);
