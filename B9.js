let a = 5;
let b = "5";
console.log(a==b);  console.log(a===b);
console.log(a!=b);  console.log(a!==b);
/* == : loose equal, kiểm tra giá trị có bằng nhau không, nếu kiểu dữ liệu ko giống nhau, 1 trong 2 kiểu sẽ ngầm biến thành kiểu còn lại, ở ví dụ "a==b"
 trên "5" đã ngầm biến thành kiểu dữ liệu number => true */
// === : strict equal, do kiểu dữ liệu không đúng nên "a===b" => false
// Tương tự nên a!=b ngầm đổi kiểu dữ liệu => false và a!==b => true