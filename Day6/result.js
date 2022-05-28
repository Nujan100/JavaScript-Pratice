function process(id, name, standard, section, sub1, sub2, sub3, sub4) {

    // var total = calcTotal(sub1, sub2, sub3, sub4);
    var total = calculateTotal(sub1, sub2, sub3, sub4);
    // var average = calcAverage(total, 4);
    var average = calculateAverage(total, 4);
    // var result = calcResult(sub1, sub2, sub3, sub4);
    var result = calculateResult(sub1, sub2, sub3, sub4);
    // var grade = calcGrade(average, result);
    var grade = calculateGrade(average, result);

    // if (marksstatus == "Pass") {
    //     if (average >= 90) {
    //         grade = "A+";
    //     } else if (average >= 80) {
    //         grade = "A";
    //     } else if (average >= 70) {
    //         grade = "B";
    //     } else if (average >= 60) {
    //         grade = "C";
    //     } else {
    //         grade = "F";
    //     }
    // }


    // if ((sub1 >= pm) && (sub2 >= pm) && (sub3 >= pm) && (sub4 >= pm)) {
    //     marksstatus = "Pass";
    // }
    // else {
    //     marksstatus = "Fail";
    // }


    var student = {
        stud_id: id,
        stud_name: name,
        stn: standard,
        stud_section: section,
        stud_sub1: sub1,
        stud_sub2: sub2,
        stud_sub3: sub3,
        stud_sub4: sub4,
        stud_total: total,
        stud_average: average,
        stud_grade: grade,
        stud_status: marksstatus,
    }
    return student;
}

/*
function calcTotal(sub1, sub2, sub3, sub4) {
    return sub1+sub2+sub3+sub4;
}
*/

// ! Expression Function
var calculateTotal = function (sub1, sub2, sub3, sub4) {
    return sub1 + sub2 + sub3 + sub4;
}

// !Arrow Function
var calculateTotalV2 = (sub1, sub2, sub3, sub4) => {
    return sub1 + sub2 + sub3 + sub4;
}

/*
function calcAverage(total, subjects) {
    return total/subjects;
}
*/

// ! Expression Function
var calculateAverage = function calcAverage(total, subjects) {
    return total / subjects;
}
// !Arrow Function
var calculateAverageV2 = (total, subjects) => (total / subjects);

/*
function calcResult(sub1, sub2, sub3, sub4) {
    const pm = 40;
    var result = "Fail";
    if ((sub1 >= pm) && (sub2 >= pm) && (sub3 >= pm) && (sub4 >= pm)) {
        result = "Pass";
    }
    console.log(result);
    return result
}
*/
// ! Expression Function
var calculateResult = function calcResult(sub1, sub2, sub3, sub4) {
    const pm = 40;
    var result = "Fail";
    if ((sub1 >= pm) && (sub2 >= pm) && (sub3 >= pm) && (sub4 >= pm)) {
        result = "Pass";
    }
    console.log(result);
    return result
}

/*
function calcGrade(total, result) {
    var grade = "";
    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else {
        grade = "Fail";
    }
    return grade;
}
*/

// ! Expression Function
var calculateGrade = function calcGrade(total, result) {
    var grade = "";
    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else {
        grade = "Fail";
    }
    return grade;
}

