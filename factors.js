const factors = (number) => {
    let msg = ''
    for (let i = 0; i < number; i++) {
        if(number % i == 0){
            if(i == 3){
                msg+='Pling'
            }
            else if(i == 5){
                msg+='Plang'
            }
            else if(i == 7){
                msg+='Plong'
            }else{
                msg += ''
            }

        
    }}
    if(msg == '') return number
    return msg
}
