function parse(route, path) {
  let result = {
    matches: true,
  };
  route = route.split('/');
  path = path.split('/');
  route.shift();
  path.shift();

  for (let i = 0; i < route.length; i += 2) {
    if (route[i] === path[i]) {
      const key = route[i + 1].replaceAll(/[\[\]]/g, '');
      result['params'] = {
        ...result['params'],
        [key]: path[i + 1],
      };
    } else {
      result.matches = false;
    }
  }
  return result;
}

function solution(route, path) {
  var result = parse(route, path);
  return JSON.stringify(result);
}

const route1 = '/service/[id]';
const path1 = '/service/3';

const route2 = '/service/[serviceId]/deployment/[deploymentId]';
const path2 = '/service/1/deployment/8';

const route3 = '/service/[id]';
const path3 = '/about';

console.log(solution(route1, path1));
console.log(solution(route2, path2));
console.log(solution(route3, path3));
