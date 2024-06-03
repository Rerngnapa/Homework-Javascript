debugger;




const draw = (x)=>{
    let ans = ''
    let num = x
    let sum = 1
    for (let i = 0; i < x-1; i++) {
        for (let j = 0; j < x; j++) {
            if(num-1 > j){
                ans += "-"
            }
            else{
                ans += sum 
                sum++
            }  
        }
        for (let j = 0; j < x-1; j++) {
            if (i <= j ) {
                ans += "-"
               
            } else {
                ans += sum 
                sum++
            }
        }
        ans += "\n"
        num--
    }
    num = x-1
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if (i <= j ) {
                ans += sum 
                sum++
               
            } else {
                
                ans += "-"
            }
        }
        for (let j = 0; j < x-1; j++) {
           
            if(num > j){
                ans += sum 
                sum++
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