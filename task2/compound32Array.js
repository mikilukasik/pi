var compound32Array=function(intArray1,intArray2){
    
    var l1=intArray1.length
    var l2=intArray2.length
    
    var result=new Int32Array(l1+l2)
    
    if(l1<l2)l1=l2
    
    var i=0
    var j=0
    
    while(i<l1){
         
        if(intArray1[i]){
            result[j]=intArray1[i]
            j++
        }
        if(intArray2[i]){
            result[j]=intArray2[i]
            j++
        }
        i++
    }
    
    return result
}