
debugger;
const draw = (x) => {
    let num = x
    let ans = ''
    const list = []
    for (let i = 0; i < x; i++) {
        let o = []
        for (let j = 0; j < x; j++) {
            if (i < j ) {
                o.push("-") 
               
            } else {
                o.push("*")
            }
        }
        list.push(o)
        num--

    }
    for (let i = 0; i < list.length; i++) {

        for (let j = 0; j < list.length; j++) {
            ans += list[i][j].toString()
            
        }
        ans += '\n'
        
        
    }
    console.log(ans)



}

draw(2)
draw(3)
draw(4)