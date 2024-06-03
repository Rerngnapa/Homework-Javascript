debugger;
const draw = (x)=>{
    let ans = ''
   
    for (let i = 1; i < x+1; i++) {
        for (let j = 0; j < x; j++) {
            if (i <= j ) {
                ans += "-"
               
            } else {
                ans += i
            }  
        }
        ans += "\n"
        
       
        
    }
    
    let num = x
    for (let i = x-1; i > 0; i--) {
        for (let j = 0; j < x; j++) {
           
            if(num-1 > j){
                ans += i
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