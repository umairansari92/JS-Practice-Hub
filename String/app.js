let myString = "Hello! my name is Umair Ahmed Ansari and I am a passionate Web and Chatbot developer."
console.log("myString:=> ", myString)

// 1️⃣ length 👉 String ki length nikalne ke liye:

console.log("myString Lenth: =>", myString.length)

//  2️⃣ charAt 👉 Specific position ka character:
console.log("Char At: =>", myString.charAt(8))

//  3️⃣ toUpperCase / toLowerCase

let upperCase = myString.toUpperCase()
console.log("upperCase String: =>", upperCase)

let lowerCase = myString.toLowerCase()
console.log("lowerCase String: =>", lowerCase)

// 4️⃣ trim 👉 Extra spaces hata do
console.log("Trimmed String: =>", myString.trim())

//  5️⃣ includes 👉 Check kare substring hai ya nahi:
console.log("Includes: =>", myString.includes("Ansari"))

//  6️⃣ indexOf / lastIndexOf

console.log("indexOf: =>", myString.indexOf("Ansari"))
console.log("lastIndexOf: =>", myString.lastIndexOf("Ansari"))

// 7️⃣ startsWith / endsWith
console.log("startsWith: =>",myString.trim().startsWith("Hello!"))
console.log("endsWith: =>",myString.trim().endsWith("developer."))