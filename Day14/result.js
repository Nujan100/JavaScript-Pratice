const PM =40;
var process1 = function (sid, sub1, sub2, sub3) {
    var total = parseInt(sub1)+Number(sub2)+Number(sub3);
    var avg = total/3;
    var result = 'fail';
    if(sub1>=PM && sub2>=PM && sub3>=PM){
        result = 'pass';
    }
    obj1 = {
        total: total,
        avg: avg,
        result: result
    };
    return obj1;
}


var process2 = function (obj1) {
    var total = obj1.sub1+obj1.sub2+obj1.sub3;
    var avg = total/3;
    var result = 'fail';
    if(obj1.sub1>=PM && obj1.sub2>=PM && obj1.sub3>=PM){
        result = 'pass';
    }
    obj1.add("total", total);
    obj1.add("average", avg);
    obj1.add("result", result);
    console.log(obj1);
    obj1.total = total;
    obj1.avg = avg;
    obj1.result = result;
    return obj1;
}
