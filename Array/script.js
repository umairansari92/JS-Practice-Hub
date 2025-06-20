// let studentArray = ["Ali", "Zeeshan", "Anaya", "Ali", "Ayesha", "Abdul Raheem", "Ali"];
// let subjects = ["Islamiat", "Math", "SST", "English", "Urdu", "Sindhi", "Science"];
// let marks = [65, 55, 58, 88, 68, 48, 73]

// Array update by index
// studentArray[4] = "Shahid"
// console.log(studentArray)

// Array update by index
// studentArray[2] = "Nimal"
// console.log(studentArray)

// Array push method — last mein element add karta hai
// studentArray.push("Aslam")
// console.log(studentArray)

// Array unshift method — start mein element add karta hai
// studentArray.unshift("Bareerah")
// console.log(studentArray)

// Array pop method — last element remove karta hai
// studentArray.pop()
// console.log(studentArray)

// Array shift method — first element remove karta hai
// studentArray.shift()
// console.log(studentArray)

// Array splice method — element remove/add karta hai specific index pe
// studentArray.splice(2, 1, "Nimal")
// console.log("Spliced array:", studentArray)

// Array slice method — naya array banata hai selected portion ka
// studentArray.slice(1, 3)
// console.log("Sliced array:", studentArray)
// console.log("Sliced array:", studentArray.slice(1, 3))

// Array join method — array elements ko ek string mein jodta hai
// let joinedArray = studentArray.join(" , ")
// console.log("Joined Array:", joinedArray)

// Array sort method — elements ko sort karta hai (string wise default)
// studentArray.sort()
// console.log("Sorted array:", studentArray)

// Array includes method — check karta hai kya element array mein hai
// let includesArray = studentArray.includes("Ali")
// console.log("Includes array:", includesArray)

// Array concat method — array ko doosron ke sath jodta hai
// let cocatedArray = studentArray.concat("Saleem", "Hina")
// console.log("cocatedArray", cocatedArray)

// let concatArray=studentArray.concat(subjects)
// console.log("cocatedArray", concatArray)

// Array reverse method — elements ko ulta kar deta hai
// studentArray.reverse()
// console.log("Reversed array:", studentArray)

// Array indexOf method — pehli position batata hai element ki
// let indexOfArray=studentArray.indexOf("Zeeshan")
// console.log("indexOfArray", indexOfArray)

// Array lastIndexOf method — last position batata hai element ki
// let lastIndexOfArray=studentArray.lastIndexOf("Ali")
// console.log("lastIndexOfArray", lastIndexOfArray)

// Array forEach method — har element pe ek function chalaata hai
// studentArray.forEach((studentName, index, array) => {
//   if (studentName==="Ali"){
//     console.log(`Printed Ali: student ${index}: ${studentName}`);
//   }
//   else{
//     console.log(`forEachArray: student ${index}: ${studentName}`);
//   }
// })


// Array map method — naya array banata hai har element ko modify karke
// let toUpperCasedArray = studentArray.map(studentName => studentName.toUpperCase())
// console.log("toUpperCasedArray", toUpperCasedArray)

// Array reduce method — array ko ek hi value mein reduce karta hai (sum ya combine)
// let studentsMarks=marks.reduce((a,b)=>a+b)
// console.log("studentsMarks", studentsMarks)

// let studentsName = studentArray.reduce((a, b) => `${a} , ${b}`)
// console.log("studentsName", studentsName)

// Array filter method — condition ke basis pe naya array banata hai
// let passingMarks = marks.filter(marks => marks >= 60)
// console.log("Passing Marks:", passingMarks)

// let failedStudents = marks.filter(marks => marks < 60)
// console.log("failedStudents", failedStudents)

// Array find method — pehla matching element return karta hai
// let firstFail = marks.find(marks => marks < 60)
// console.log("firstFail", firstFail)

// console.log("Original array:", studentArray)
// console.log("Marks Array: ", marks)































// let subjects = ["Islamiat", "Math", "SST", "English", "Urdu", "Sindhi", "Science"];
// let students = [
//     { ID: "0014", Name: "Ayesha", Marks: [65, 55, 58, 88, 68, 48, 73] },
//     {
//         ID: "0014", Name: "Ayesha", Marks: [65, 55, 58, 88, 68, 48, 73]
//     },
//     { ID: "0015", Name: "Saniya", Marks: [65, 55, 58, 88, 68, 48, 73] },
//     { ID: "0016", Name: "Abdul Raheem", Marks: [65, 55, 58, 88, 68, 48, 73] },
//     { ID: "0017", Name: "Rimsha", Marks: [65, 55, 58, 88, 68, 48, 73] },
//     { ID: "0018", Name: "Raza", Marks: [65, 55, 58, 88, 68, 48, 73] },
// ];

// let searchStudent = prompt("Enter Stedent's Name")
// let student = students.find(stuObj => stuObj.Name === searchStudent)
// if (student) {
//     console.log(`Marks for Student ${student.Name}`)
//     for (i = 0; i< subjects.length; i++) {
//         console.log(`${subjects[i]}: ${student.Marks[i]} marks`)
//     }
// } else {
//     console.log(`${searchStudent} not found in student list.`);
// }


// let subjects = ["Islamiat", "Math", "SST", "English", "Urdu", "Sindhi", "Science"];

// let students = [
//   { ID: "0014", Name: "Ayesha", Marks: [65, 55, 58, 88, 68, 48, 73] },
//   { ID: "0015", Name: "Saniya", Marks: [70, 60, 75, 80, 77, 67, 83] },
//   { ID: "0016", Name: "Abdul Raheem", Marks: [85, 78, 82, 90, 88, 80, 86] },
//   { ID: "0017", Name: "Rimsha", Marks: [55, 50, 58, 60, 65, 52, 57] },
//   { ID: "0018", Name: "Raza", Marks: [72, 68, 74, 78, 70, 69, 75] }
// ];

// function showStudentsByNames(namesArray) {
//   let matchedStudents = students.filter(s => namesArray.includes(s.Name));

//   if (matchedStudents.length === 0) {
//     console.log("No matching students found.");
//   } else {
//     matchedStudents.forEach(student => {
//       console.log(`Marks for ${student.Name}`);
//       for (let i = 0; i < subjects.length; i++) {
//         console.log(`${subjects[i]}: ${student.Marks[i]} marks`);
//       }
//       console.log('--------------------------');
//     });
//   }
// }

// // 🔹 Get names from user (comma separated)
// let input = prompt("Enter student names separated by commas (e.g. Ayesha,Raza,Abdul Raheem)");
// let namesToSearch = input.split(",").map(name => name.trim());

// // Call the function
// showStudentsByNames(namesToSearch);








// let subjects = ["Islamiat", "Math", "SST", "English", "Urdu", "Sindhi", "Science"];

// let students = [
//     { ID: "0014", Name: "Ayesha", Marks: [65, 55, 58, 88, 68, 48, 73] },
//     { ID: "0015", Name: "Saniya", Marks: [70, 60, 75, 80, 77, 67, 83] },
//     { ID: "0016", Name: "Abdul Raheem", Marks: [85, 78, 82, 90, 88, 80, 86] },
//     { ID: "0017", Name: "Rimsha", Marks: [55, 50, 58, 60, 65, 52, 57] },
//     { ID: "0018", Name: "Raza", Marks: [72, 68, 74, 78, 70, 69, 75] }
// ];


// function showStudentsByNames(namesArray) {
//     let matchedStudents = students.filter(s => namesArray.includes(s.Name))
//     console.log("matchedStudents", matchedStudents)
//     if (matchedStudents.length === 0) {
//     console.log("No matching students found.");
//   } else {
//     matchedStudents.forEach(student => {
//       console.log(`Marks for ${student.Name}`);
//       for (let i = 0; i < subjects.length; i++) {
//         console.log(`${subjects[i]}: ${student.Marks[i]} marks`);
//       }
//       console.log('--------------------------');
//     });
//   }
// }

// let student = showStudentsByNames("Ayesha", "Saniya")
// console.log(student)






// let students = [
//   { name: "Ali", marks: [85, 78, 92, 88, 76] },
//   { name: "Sara", marks: [65, 70, 60, 72, 68] },
//   { name: "Ahmed", marks: [90, 88, 95, 93, 91] },
//   // Add more students here...
// ];

// for (let i = 0; i < students.length; i++) {
//   let student = students[i];
//   console.log(i, student)
//   // let totalMarks = student.marks.reduce((a, b) => a + b, 0);
//   let totalMarks = student.marks.reduce((a, b) => a + b, 0)
//   console.log(totalMarks)
//   let data = document.getElementById("tableHead")
//   data.innerHTML += (`${student.name.toUpperCase()}: Total Marks = ${totalMarks}<br>`)
// }




