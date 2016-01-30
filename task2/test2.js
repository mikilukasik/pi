var succeeded=0
var failed=0

var resetCounter=function(){
    succeeded=0
    failed=0
}

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

var test32=function(intArray1,intArray2,expected){
    
    var mixed=compound32Array(new Int32Array(intArray1),new Int32Array(intArray2))
    if(JSON.stringify(mixed)===JSON.stringify(new Int32Array(expected))){
        console.log('   OK --->        compound32Array(['+intArray1+'],['+intArray2+']) === ['+expected+']')
        succeeded++
    }else{
       
        console.log('   ERROR --->     compound32Array(['+intArray1+'],['+intArray2+']) !== ['+expected+']')
        console.log('               compound32Array function returned ['+mixed+']')
        failed++
    }
}

console.log('-------- STARTING TESTS: Normal array --------\n\n')

test([1,2,3,4,5,6],[9,8,7,6],[1,9,2,8,3,7,4,6,5,6])
test([1,2],[9,8,7,6],[1,9,2,8,7,6])
test([1,2,3,4,5,6],[],[1,2,3,4,5,6])
test([],[9,8,7,6],[9,8,7,6])
test([],[],[])

console.log('\nRESULT --->    succeeded:',succeeded,'failed:',failed,'\n\n-------- END OF TESTS --------\n\n\n')

resetCounter()

console.log('-------- STARTING TESTS: int32 typed array --------\n\n')

test32([1,2,3,4,5,6],[9,8,7,6],[1,9,2,8,3,7,4,6,5,6])
test32([1,2],[9,8,7,6],[1,9,2,8,7,6])
test32([1,2,3,4,5,6],[],[1,2,3,4,5,6])
test32([],[9,8,7,6],[9,8,7,6])
test32([],[],[])

console.log('\nRESULT --->    succeeded:',succeeded,'failed:',failed,'\n\n-------- END OF TESTS --------\n\n\n')

