
debugger;
const draw = (x) => {
    let ans = ''
    let num = x
    const list = []
    for (let i = 0; i < x-1; i++) {
        let o = []
        for (let j = 0; j < x; j++) {
            if(num-1 > j){
                o.push("-") 
            }
            else{
                o.push("*") 
            }  
        }
        for (let j = 0; j < x-1; j++) {
            if (i <= j ) {
                o.push("-")
               
            } else {
                o.push("*")
            }
        }
        list.push(o)
        num--
    }
    num = x-1
    for (let i = 0; i < x; i++) {
        o = []
        for (let j = 0; j < x; j++) {
            if (i <= j ) {
                o.push("*")
               
            } else {
                
                o.push("-")
            }
        }
        for (let j = 0; j < x-1; j++) {
           
            if(num > j){
                o.push("*")
            }
            else{
                o.push("-")
            }    
        }
        list.push(o)
        num--
        
    }
    console.log(list)
    
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