let A = 3
let B = 5
let C = 4

//if (A + B > C){
//   console.log("Inputs cannot form a triangle")
//} else if (A + C > B){
//    console.log("Inputs cannot form a triangle")
//} else if (B + C > A){
//    console.log("Inputs cannot form a triangle")
//} else {

//}

if(A+B > C && B+C > A && C+A > B){
    console.log("True")
}else{
    console.log("false")
}

if(A+B > C){
    if(B+C > A){
        if(C+A > B){
            console.log("True")
        }
    }
}else{
    console.log("False")
}
