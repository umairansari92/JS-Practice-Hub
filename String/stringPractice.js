// let myString = "Hello! my name is Umair Ahmed Ansari and I am a passionate Web and Chatbot developer."
// console.log("myString:=> ", myString)

// // 1️⃣ length 👉 String ki length nikalne ke liye:

// console.log("myString Lenth: =>", myString.length)

// //  2️⃣ charAt 👉 Specific position ka character:
// console.log("Char At: =>", myString.charAt(8))

// //  3️⃣ toUpperCase / toLowerCase

// let upperCase = myString.toUpperCase()
// console.log("upperCase String: =>", upperCase)

// let lowerCase = myString.toLowerCase()
// console.log("lowerCase String: =>", lowerCase)

// // 4️⃣ trim 👉 Extra spaces hata do
// console.log("Trimmed String: =>", myString.trim())

// //  5️⃣ includes 👉 Check kare substring hai ya nahi:
// console.log("Includes: 'Ansari' =>", myString.includes("Ansari"))

// //  6️⃣ indexOf / lastIndexOf

// console.log("indexOf: 'Ansari'=>", myString.indexOf("Ansari"))
// console.log("lastIndexOf: 'Ansari' =>", myString.lastIndexOf("Ansari"))

// // 7️⃣ startsWith / endsWith
// console.log("startsWith: 'Hello!' =>", myString.trim().startsWith("Hello!"))
// console.log("endsWith: 'developer.' =>", myString.trim().endsWith("developer."))

// // 8️⃣ slice / substring
// console.log("Sliced String: =>", myString.slice(0, 5))
// console.log("Sub String: =>", myString.substring(7, 9))

// // 9️⃣ replace / replaceAll
// console.log("Replace: =>", myString.replace("Hello", "Hi"))
// console.log("Replace Alll =>", myString.replaceAll("I am", "I'm"))

// // 🔟 split
// console.log("Split: =>", myString.split(" "))

// // Capitalized String

// let capitalizedString = myString.split(" ").map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(" ")
// console.log("capitalizedString: =>", capitalizedString)