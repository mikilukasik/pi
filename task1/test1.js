var succeeded=0
var failed=0

var resetCounter=function(){
    succeeded=0
    failed=0
}

var test=function(s1,s2,expected){
    
    
    var mixed=mix(s1,s2)
    if(mixed===expected){
        console.log('   OK --->        mix("'+s1+'","'+s2+'") === "'+expected+'"')
        succeeded++
    }else{
       
        console.log('   ERROR --->     mix("'+s1+'","'+s2+'") !== "'+expected+'"')
        console.log('               mix function returned "'+mixed+'"')
       
        failed++
    }
}

    
console.log('-------- STARTING TESTS --------\n\n')


test("A aaaa bb c","& aaa bbb c d","1:aaaa/2:bbb")

test("my&friend&Paul has heavy hats! &","my friend John has many many friends &","2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss")

test("mmmmm m nnnnn y&friend&Paul has heavy hats! &","my frie n d Joh n has ma n y ma n y frie n ds n&","1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss")

test("Are the kids at home? aaaaa fffff","Yes they are here! aaaaa fffff","=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh")


console.log('\nRESULT --->    succeeded:',succeeded,'failed:',failed,'\n\n-------- END OF TESTS --------\n\n\n')
