let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];


//Q1
// var result = studentRecords.map((value)=>{
//     return value.name.toUpperCase()
// })
// console.log(result)

//Q2
// var result = studentRecords.filter((value)=>{    
//     return value.marks>50
// })
// console.log(result)

//Q3
// var result = studentRecords.filter((value)=>{    
//     return value.marks>50 && value.id>120
// })
// console.log(result)

//Q4
// var result = studentRecords.reduce((val1,val2)=>{
//     return val1+val2.marks
// },0)

// console.log(result)

//Q5
// var result = studentRecords.filter((value)=>value.marks>50).map((value)=>value.name)
// console.log(result)

//Q6
// var result = studentRecords.filter((val)=>val.id>120).reduce((val1,val2)=>val1+val2.marks,0)
// console.log(result)

//Q7
// var result = studentRecords.map((value)=>{
//     if(value.marks<50){
//         value.marks += 15
//         return value.marks
//     }else{
//         return value.marks
//     }
// }).filter((val)=>val>50).reduce((val1,val2)=>val1+val2,0)
// console.log(result)

//Q8.
// var obj1 = {name:"Ram",class:8,roll_no:102}
// var obj2 = {name:"Shyam",class:10,roll_no:100}
// var obj3 = {name:"Radha",class:9,roll_no:140}
// var obj4 = {name:"Rahul",class:10,roll_no:160}
// var obj5 = {name:"Praveen",class:8,roll_no:122}
// var obj6 = {name:"Jitendra",class:6,roll_no:150}

// studentRecords.push(obj1)
// studentRecords.push(obj2)
// studentRecords.push(obj3)
// studentRecords.push(obj4)
// studentRecords.push(obj5)
// studentRecords.push(obj6)

// console.log(studentRecords)

