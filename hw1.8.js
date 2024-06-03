debugger;
const draw = (x)=>{
    let ans = ''
    let i = 0
    for (let index = 0; index < x; index++) {
        
            ans += i
            i += 2
        
        ans += '\n'
    }

    console.log(ans)
}
draw(2)
draw(3)
draw(4)
