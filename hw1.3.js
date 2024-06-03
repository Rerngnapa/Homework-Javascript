debugger;
const draw = (x)=>{
    let ans = ''
    for (let index = 0; index < x; index++) {
        for (let index = 1; index < x+1; index++) {
            ans += index
        }
        ans += '\n'
    }

    console.log(ans)
}
draw(2)
draw(3)
draw(4)