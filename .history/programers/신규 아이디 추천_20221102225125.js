function solution(new_id) {
    new_id = new_id.toLowerCase();

    const regex = /[^\-|\_|\.|a-z|0-9]/gi;
    new_id = new_id.replaceAll(regex, '');

    new_id = compressWords(new_id, '.');
    new_id = trimTarget(new_id, '.');
    new_id = new_id.replaceAll(/\s/g, 'a');

    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
        if (new_id[14] === '.') {
            new_id = new_id.slice(0, 14);
        }
    } else if (new_id.length === 0) {
        new_id = 'aaa';
    } else if (new_id.length <= 2) {
        const lastChar = new_id[new_id.length - 1];
        while (new_id.length <= 2) {
            new_id += lastChar;
        }
    }

    return new_id;
}

function compressWords(words, target) {
    let compressedWord = '';

    for (let i = 0; i < words.length; i++) {
        if (!(words[i] === words[i + 1] && target)) {
            compressedWord += words[i];
        }
    }

    return compressedWord;
}

function trimTarget(str, target) {
    const regex = new RegExp(`^\\${target}|\\${target}$`, 'g');
    return str.replaceAll(regex, '');
}

solution('.a 1.');

const other = new_id => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '');

    let result = id.padEnd(3, id[id.length - 1]);
    return result;
};

// 입력값 〉	"...!@BaT#*..y.abcdefghijklm"
// 기댓값 〉	"bat.y.abcdefghi"
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 2
// 입력값 〉	"z-+.^."
// 기댓값 〉	"z--"
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 3
// 입력값 〉	"=.="
// 기댓값 〉	"aaa"
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 4
// 입력값 〉	"123_.def"
// 기댓값 〉	"123_.def"
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 5
// 입력값 〉	"abcdefghijklmn.p"
// 기댓값 〉	"abcdefghijklmn"
