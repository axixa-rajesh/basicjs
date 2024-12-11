function task(fun, ary) {
    for (let i = 0; i < ary.length; i++){
        ary[i] = fun(ary[i]);
    }
    return ary;
}
let x = [4, 3, 2, 35];
x = task(v => v * 2, x);
console.log(x);
