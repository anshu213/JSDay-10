console.log("Hello World!");


let student ={
    Name: 'Anshuman',
    Age: 20,
    Gender: "Male"
}
console.log(student.Name);
console.log(student.Age);
console.log(student.Gender);

// spread Operator in string..................

let str ="Anshuman";
console.log(...str);

// spread Operator in string.......................

let obj ={
     Name : "Anshuman",
     Age : "20",
}
let obj1 = {
    Gender : "Male",
}
let person ={
    ...obj,
    ...obj1,
    iq: 1,
}
console.log(person);
