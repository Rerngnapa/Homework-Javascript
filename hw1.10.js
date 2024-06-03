debugger;
const draw = (x)=>{
    let ans = ''
    let i = 1
    let j = 1
    for (let index = 1; index < x+1; index++) {
        i = index
        for (let index = 1; index < x+1; index++) {
            ans += i
            i += j
        }
        j++
        ans += '\n'
    }

    console.log(ans)
}
draw(2)
draw(3)
draw(4)