const exclude = ',';

function solution(text, keyword) {
  let html = '';
  let copy = text.split(', ');
  const result = [];

  let pos = 0;
  const space = keyword.length;

  //먼저 없앤 버전에서 indexOf 시작위치 기록
  //숫자만 추출해서 , 만들기

  for (let i = 0; i < copy.length; i++) {
    let text = copy[i].split(',').join('');
    pos = text.indexOf(keyword);

    //숫자만 추출
    let origin = text.split('');
    let numbers = [];
    for (let i = 0; i < origin.length; i++) {
      if (origin[i] !== ' ') {
        //공백이 아닌 경우
        const el = origin[i] * 1; // 숫자로 변경
        if (!isNaN(el)) {
          numbers.push(el);
        }
      }
    }
    const insert = (numbers.join('') * 1).toLocaleString('ko-KR');
    const is = insert.includes(keyword); // 있는 경우는 쉽게 만들지만 없는 경우는
    if (!is) {
      const semiPos = insert.indexOf(',');
      let temp = keyword.split('');
      temp.splice(semiPos, 0, ',');
      const newKeyword = temp.join('');
      let answer = copy[i].split('');
      answer.splice(pos, space + 1, `<mark>${newKeyword}</mark>`);
      result.push(answer.join(''));
    } else {
      let answer = copy[i].split('');
      answer.splice(pos + 1, space, `<mark>${keyword}</mark>`);
      result.push(answer.join(''));
    }
  }
  html = result.join(', ');
  return html;
}

console.log(solution('커피 3,500원, 샌드위치 2,350원', '350'));
