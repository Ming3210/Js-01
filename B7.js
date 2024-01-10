let width = +prompt("Chiều dài")
let height = +prompt("Chiều rộng")
let R = Math.sqrt((width**2 + height**2))/2 
let Pi = 3.14;
let S = Pi*R*2
let P = Pi*R
console.log("Chu vi hinh tron:", P,"Dien tich hinh tron :", S)
let P2 = (width+height)*2
let S2= width*height
console.log("Chu vi, Dien tich hcn :",P2,S2)