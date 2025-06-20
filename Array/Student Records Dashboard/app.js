// 🚀 🎯 Challenge: Student Records Dashboard
// 👉 Tumhare paas students ka data hai. Har student ka naam, subject aur marks hain. Tumhe ye kaam karna hai:
// ✅ Step 1: Data

let students = [
    { name: "Ali", subject: "Math", marks: 65 },
    { name: "Zeeshan", subject: "Math", marks: 55 },
    { name: "Anaya", subject: "Math", marks: 58 },
    { name: "Ayesha", subject: "Math", marks: 88 },
    { name: "Abdul Raheem", subject: "Math", marks: 68 },
    { name: "Saleem", subject: "Math", marks: 48 },
    { name: "Hina", subject: "Math", marks: 73 }
];

console.log("Studend Array Maping", students.map(s => s.name))
students.forEach(s => console.log(s.name))


// ✅ Step 2: Kaam
// 👉 1️⃣ Saare students ke naam ek string mein join karo (join + map)
// 👉 2️⃣ Saare students ke total marks nikalo (reduce)
// 👉 3️⃣ Passed students ka naya array banao (filter - passing >= 60)
// 👉 4️⃣ Kya koi student 90 se zyada marks laya? (some)
// 👉 5️⃣ Kya sab students pass hue hain? (every)
// 👉 6️⃣ Pehla student jiska fail marks ho wo find karo (find)
// 👉 7️⃣ Pehle fail student ka index nikaalo (findIndex)
// 👉 8️⃣ Marks ko ascending aur descending sort karo (sort)
// 👉 9️⃣ Names ko reverse order mein print karo (map + reverse)

// 👉 1️⃣ Saare students ke naam ek string mein join karo (join + map)
let numberStrings = students.map(s => s.name).join(" , ")
console.log("numberStrings: ", numberStrings)

// 👉 2️⃣ Saare students ke total marks nikalo (reduce)

let totalMarks = students.reduce((a, b) => a + b.marks, 0)
console.log("totalMarks: ", totalMarks)

// 👉 3️⃣ Passed students ka naya array banao (filter - passing >= 60)
let passedStudents = students.filter(s => s.marks >= 60)
console.log("passedStudents", passedStudents)

// 👉 4️⃣ Kya koi student 90 se zyada marks laya? (some)
let topper = students.some(s => s.marks >= 88)
console.log("topper", topper)

// 👉 5️⃣ Kya sab students pass hue hain? (every)
let allPassed = students.every(s => s.marks >= 60)
console.log("allPassed", allPassed)


// 👉 6️⃣ Pehla student jiska fail marks ho wo find karo (find)
let firstFailedStudent = students.find(s => s.marks < 60)
console.log("firstFailedStudent", firstFailedStudent)

// 👉 7️⃣ Pehle fail student ka index nikaalo (findIndex)
let firstFailedIndex = students.findIndex(s => s.marks < 60)
console.log("firstFailedIndex", firstFailedIndex)

// 👉 8️⃣ Marks ko ascending sort karo (sort)
let sortedArrayAsc = students.sort((a, b) => a.marks - b.marks)
console.log("sortedArrayAsc", sortedArrayAsc)
// 👉 8️⃣ Marks ko descending  sort karo (sort)
let sortedArrayDec = students.sort((a, b) => b.marks - a.marks)
console.log("sortedArrayDec", sortedArrayDec)

// 👉 9️⃣ Names ko reverse order mein print karo (map + reverse)
let reversedArrayName = students.map(s => s.name).reverse()
console.log("reversedArrayName", reversedArrayName)

