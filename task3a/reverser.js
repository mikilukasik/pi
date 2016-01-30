var reverser=function(str){
    var charsToReverse=[]
    var charsToKeep=[]
    var len=str.length
    
    var result=''
    
    var i=0
    
    while(i<len){
        if(i % 2 == 0){
            charsToReverse.push(str[i])
        }else{
            charsToKeep.push(str[i])
        }
        
        i++
        
    }
    
    i=0
    
    while(i<len){
        var tempChar
        if(i % 2 == 0){
            tempChar=charsToReverse.pop()
            if(tempChar)result=result.concat(tempChar)
        }else{
            tempChar=charsToKeep.shift()
            if(tempChar)result=result.concat(tempChar)
        }
        
        i++
       
    }
    
    return result
    
}