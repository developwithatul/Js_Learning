//use sweatch and break 
const calculater = (num1,num2,oprator) => { 
    let result ;
    switch (oprator){
        case "+":
            return (num1 +num2)
        
        case "*":
            return num1 * num2
            
        case "-":
            return num1 - num2
            
        case "/":
            if(num2 === 0){
                return "0 is not allowed"
            }else{
                return num1/num2
            }
        default:
            return "on operater found"

    }

};
console.log(  calculater(4 ,27, "+") )
console.log(  calculater(4 ,4, "-") )
console.log(  calculater(4 ,27, "*") )
console.log(  calculater(27, 3, "/") )
