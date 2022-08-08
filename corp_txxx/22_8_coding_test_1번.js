function safelyGet(object, path) {
  if (!path) return undefined;
  let found = true;
  path.split('.').forEach(function (v) {
    if (object[v]) {
      object = object[v];
    } else {
      found = false;
      return;
    }
  });
  return found ? object : undefined;
}

function solution(input, path) {
  const result = safelyGet(JSON.parse(input), path);

  if (result === undefined) {
    return 'undefined';
  }

  return JSON.stringify(result);
}

/**
const object1 = {
  repository: undefined,
};

const object2 = {
  repository: {
    readme: undefined,
  },
};

const object3 = {
  repository: {
    readme: {
      extension: 'md',
      content: '금융을 쉽고 간편하게',
    }
  }
};

safelyGet(object2, 'repository.readme.extension')  // -> undefined
safelyGet(object2, 'repository.readme')            // -> undefined
safelyGet(object1, 'repository')                   // -> { readme: undefined }
*/
