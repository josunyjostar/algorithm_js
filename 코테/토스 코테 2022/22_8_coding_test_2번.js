const serialize = function (obj) {
  var str = [];
  for (const p in obj)
    if (obj[p] !== null) {
      if (Array.isArray(obj[p])) {
        for (let i = 0; i < obj[p].length; i++) {
          str.push(p + '=' + obj[p][i]);
        }
      } else {
        str.push(p + '=' + obj[p]);
      }
    }

  const answer = '?' + str.join('&');
  return answer;
};

let test3 = `{"foo":false,"bar":[1,2,3],"baz":null,"foobar":3333}`;
let obj = JSON.parse(test3);
serialize(obj);
