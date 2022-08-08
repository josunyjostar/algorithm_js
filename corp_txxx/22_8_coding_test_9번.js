function getStylesOf(element, styles) {
  //element 키값이랑 styles 키값 일치 여부만 처리하면댐
  //
  console.log(element);
  let id = {};
  let className = {};
  let elements = {};

  const keys = Object.keys(styles);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i][0] === '#') {
      id = {
        ...id,
        ...styles[keys[i]],
      };
    } else if (keys[i][0] === '.') {
      className = {
        ...className,
        ...styles[keys[i]],
      };
    } else {
      elements = {
        ...elements,
        ...styles[keys[i]],
      };
    }
  }

  return {
    ...elements,
    ...className,
    ...id,
  };
}

/* solution 함수는 수정하지 마세요. */
function solution(_element, _styles) {
  const element = JSON.parse(_element);
  const styles = JSON.parse(_styles);

  const result = getStylesOf(element, styles);

  return result;
}
const meta1 = `{
  "elementType": "p",
  "className": "text underline",
  "id": "paragraph"
}`;

const css1 = `{
  "#paragraph": {
    "color": "red"
  },
  ".text": {
    "color": "grey",
    "font-size": "20px",
    "text-decoration": "none"
  },
  ".underline": {
    "text-decoration" : "underline"
  },
  "p": {
    "color":"blue",
    "font-size":"16px",
    "line-height":"24px"
  }
}`;

const meta2 = `{
  "elementType": "p",
  "className": "text",
  "id": "id"
}`;

const css2 = `{
  ".text": {
    "color": "grey",
    "font-size": "20px"
  }
}`;

const meta3 = `{
  "elementType": "p",
  "className": "text",
  "id": "id"
}`;

const css3 = `{
  "#non-existent-id": {
    "color": "blue"
  }
}`;

//id class element 순으로 적용됨

//1번 답은
// {
//   color: 'red',
//   'font-size': '20px',
//   'line-height': '24px',
//   'text-decoration': 'underline'
// }

//2번 답은
// { color: 'grey', 'font-size': '20px' }

//3번 답은
// {}

console.log(solution(meta1, css1));
console.log(solution(meta2, css2));
console.log(solution(meta3, css3));
