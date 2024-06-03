debugger;
const draw = (x)=>{
    let ans = ''
    for (let i = 1; i < x+1; i++) {
        for (let j = 1; j < x+1; j++) {
            ans += i
        }
        ans += '\n'
    }

    console.log(ans)
}
draw(2)
draw(3)
draw(4)