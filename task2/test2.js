var succeeded=0
var failed=0

var test=function(intArray1,intArray2,expected){
    
    
    var mixed=compoundArray(intArray1,intArray2)
    if(JSON.stringify(mixed)===JSON.stringify(expected)){
        console.log('   OK --->        compoundArray(['+intArray1+'],['+intArray2+']) === ['+expected+']')
        succeeded++
    }else{
       
        console.log('   ERROR --->     compoundArray(['+intArray1+'],['+intArray2+']) !== ['+expected+']')
        console.log('               compoundArray function returned ['+mixed+']')
       
        failed++
    }
}

    
console.log('-------- STARTING TESTS --------\n\n')

test([1,2,3],[6,7,8],[1,6,2,7,3,8])

console.log('\nRESULT --->    succeeded:',succeeded,'failed:',failed,'\n\n-------- END OF TESTS --------\n\n\n')

