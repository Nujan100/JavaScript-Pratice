var PM = 40;
var process1 = function(sub1, sub2, sub3){
    var total = Number(sub1)+ Number(sub2)+ Number(sub3);
    console.log(sub1, sub2, sub3);
    var avg = total / 3;
    var result = "FAIL";
    if(sub1 >= PM && sub2 >= PM && sub3 >= PM){
        result = "PASS";
    }
    
    obj1 ={
        total:total,
        avg:avg,
        result:result
    }
    return obj1;
}