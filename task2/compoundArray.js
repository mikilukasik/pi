var compoundArray=function(intArray1,intArray2){
    var result=[]
    
    var l1=intArray1.length
    var l2=intArray2.length
    if(l1<l2)l1=l2
    var i=0
    
    while(i<l1){
        if(intArray1[i])result.push(intArray1[i])
        if(intArray2[i])result.push(intArray2[i])
        i++
    }
    
    return result
}