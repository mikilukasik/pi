var mix=function(s1,s2){
    
    var getLetterIndex=function(letter,storeArray){
        
        var i=storeArray.length
        while(i--){
            
            if(storeArray[i].letter===letter)return i
            
        }
        
        return -1
        
    }
    
    var addLetter=function(letter,storeArray,sIndex){
        
        var letterIndex = getLetterIndex(letter,storeArray)
        
        if (letterIndex<0){
            letterIndex=storeArray.push({
                letter:letter,
                count:1,
                sIndex:sIndex
            })
        } else {
            storeArray[letterIndex].count++
        }
        
    }
    
    var stringToCountedArray=function(str,sIndex){
        var res=[]
        var i=str.length
        while(i--){
            addLetter(str[i],res,sIndex)
        }
        return res
    }
    
    var lowercaseOnly=function(str){
        
        var res=''
        
        var i = str.length;
        while (i--) {
            if(/[a-z]/.test(str[i])) res=res.concat(str[i])
        }
        
        return res
        
    }
    
    var clearSingulars=function(countedArray){
        var res=[]
        
        var i=countedArray.length
        
        while(i--){
            if(countedArray[i].count>1)res.push(countedArray[i])
        }
        
        return res
        
    }
    
    var combinedArraySorter=function(a,b){
        if(a.count>b.count){
            return -1
        }else{
            if(a.count<b.count){
                return 1
            }else{
                if(a.letter>b.letter){
                    return 1
                }else{
                   
                    return -1
                    
                } 
            }
            
        }
    }
    
    var filteredArraySorter=function(a,b){
        
        if(a.count>b.count){
            return -1
        }else{
            if(a.count<b.count){
                return 1
            }else{
                
                if(a.sIndex.charCodeAt(0)>b.sIndex.charCodeAt(0)){
                    return 1
                }else{
                    if(a.sIndex+a.letter<b.sIndex+b.letter){
                        return -1
                    }else{
                        return 1
                    }
                }
                
            }
            
        }
        
    }
    
    var filterDuplicates=function(combinedArray){
        var res=[]
        var letters=[]
        var len=combinedArray.length
        for(var i=0;i<len;i++){
            var existingIndex=letters.indexOf(combinedArray[i].letter)
            
            if(existingIndex<0){
                letters.push(combinedArray[i].letter)
                res.push(combinedArray[i])
            }else{
                if(res[existingIndex].count===combinedArray[i].count){
                    res[existingIndex].sIndex='='
                }
            }
        }
        return res
    }
    
    var toResultString=function(filteredArray){
        
        var res=''
        var len=filteredArray.length
        for(var i=0;i<len;i++){
            res=res.concat('/',filteredArray[i].sIndex,':',filteredArray[i].letter.repeat(filteredArray[i].count))
        }
        
        return res.substr(1,res.length-1)
    }
      
    var s1Array=clearSingulars(stringToCountedArray(lowercaseOnly(s1),'1'))
    var s2Array=clearSingulars(stringToCountedArray(lowercaseOnly(s2),'2'))
    
    var combinedArray=s1Array.concat(s2Array)
    
    combinedArray.sort(combinedArraySorter)
    
    var filteredArray=filterDuplicates(combinedArray)
    
    filteredArray.sort(filteredArraySorter)
    
    var res=toResultString(filteredArray)
    
    return res
}