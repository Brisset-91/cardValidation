

const validator = {
  
   isValid: (numberCard) => {
    
    let validCard = numberCard.split('').reverse()
    let newValidCard = []
   
      for (let i = 0; i < validCard.length; i++) {
        
        let car = validCard[i]

          if (i%2 != 0) {
            let par = parseInt(car)*2
            
            if (par >=10) {
              
              let sumaMayor = par.toString().split('')
              let final= parseInt(sumaMayor[0]) + parseInt(sumaMayor[1]) 
              
              newValidCard += final
            } else{
              let menorDiez = par
              newValidCard += menorDiez
            }
            
        } else {
            let inpar = parseInt(car)*1
            newValidCard += inpar
        }
        
      }

      console.log(newValidCard)  

   let validCardArray = newValidCard.split('')
   console.log(validCardArray)

    let sum = validCardArray.reduce((a,b)=>{
  
      return parseInt(a) + parseInt(b)

    },[0])

    let valTrue

    sum%10==0? valTrue = true: valTrue = false;
      
    console.log(sum)

    return valTrue;

  },

  
  maskify: (newArray)=>{

    let encryptedCard = newArray.slice(0,-4).replace(/[0-9,a-z]/g,"#")
 
    let lastDigits =  newArray.slice(-4)
   
    let maski = encryptedCard.concat(lastDigits)
  
     return maski
  }
  
};

export default validator;
