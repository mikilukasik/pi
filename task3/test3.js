var succeeded=0
var failed=0

var resetCounter=function(){
    succeeded=0
    failed=0
}

var test=function(str,expected){
    
    var reversed=reverser(str)
    if(reversed===expected){
        console.log('   OK --->        reverser("'+str+'") === "'+expected+'"')
        succeeded++
    }else{
       
        console.log('   ERROR --->     reverser("'+str+'") !== "'+expected+'"')
        console.log('               reverser function returned "'+reversed+'"')
        failed++
    }
}


console.log('-------- STARTING TESTS: --------\n\n')

test('test','sett')
test('','')
test('a','a')
test('ab','ab')
test('abc','cba')

console.log('\nRESULT --->    succeeded:',succeeded,'failed:',failed,'\n\n-------- END OF TESTS --------\n\n\n')
