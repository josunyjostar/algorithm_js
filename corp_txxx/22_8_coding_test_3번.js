const path = require('path');

function solution(paths) {
  for (let i = 0; i < paths.length; i++) {
    if (paths[i] === '...') {
      let std = i - 3 > 0 ? i - 3 : 0;
      paths.splice(std, 3);
      i = std;
    }
  }

  let myPath = path.normalize(paths.join('/'));
  let answer = '/' + myPath;

  return answer;
}

// /foo/bar/baz/asdf
let test1 = ['/foo', 'bar', '...', '.', 'ab'];
let test2 = ['/ab', 'baz'];
console.log(solution(test2));
