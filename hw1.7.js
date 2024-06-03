debugger;
const draw = (x)=>{
    let ans = ''
    let i = x*x
    for (let index = 0; index < x; index++) {
        for (let index = 1; index < x+1; index++) {
            ans += i
            i--
        }
        ans += '\n'
    }

    console.log(ans)
}
draw(2)
draw(3)
draw(4)