debugger;
const draw = (x)=>{
    let ans = ''
   
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if (i <= j ) {
                ans += "*"
               
            } else {
                
                ans += "-"
            }
        }
        ans += "\n"
    }
    
    console.log(ans)
}
draw(2)
draw(3)
draw(4)