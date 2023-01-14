function phoneNumCutter(arr) {
    // 여기에 코드를 작성하세요
    let sum;
    let last = [];
    let count = 0;

    for (let i = 0; i <= arr.length; i++) {
        sum = [...arr[i]];
        sum[3] = '*';
        sum[4] = '*';
        sum[5] = '*';
        sum[6] = '*';
        last.push(sum.join(''));
        sum = '';
        count++;
    }
    return last;
}
