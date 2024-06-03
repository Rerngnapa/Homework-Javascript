debugger;
const draw = (x)=>{
    let ans = ''
    let y = x
    for (let i = 1; i <= x; x--) {
        for (let j = 1; j < y+1; j++) {
            ans += x
        }
        ans += '\n'
    }

    console.log(ans)
}
draw(2)
draw(3)
draw(4)