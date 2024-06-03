debugger;
const draw = (x)=>{
    let ans = ''
    let num = x
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if(num > j){
                ans += "*"
            }
            else{
                ans += "-"
            }    
        }
        num--
        ans += "\n"
    }
    console.log(ans)
}
draw(2)
draw(3)
draw(4)