debugger;
const draw = (x)=>{
    let ans = ''
    for (let index = 0; index < x; index++) {
        ans += '*'
    }
    console.log(ans)
}
draw(2)
draw(3)
draw(4)