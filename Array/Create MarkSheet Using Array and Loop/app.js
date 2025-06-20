let subjects = ["Islamiat", "Math", "SST", "English", "Urdu", "Sindhi", "Science"];
let students = [];

const subjectInputs = document.getElementById("subjectInputs")
console.log(subjectInputs.innerHTML)
subjects.forEach(sub => {
  subjectInputs.innerHTML += `<label>${sub}:</label>
        <input type="number" id="mark_${sub}" placeholder="0" />`
})


const marksTable = document.querySelector("#marksTable thead tr")
console.log(marksTable.innerHTML)
subjects.forEach(sub => {
  marksTable.innerHTML += `<th>${sub}</th>`
})



function addStudent() {
  const studentName = document.getElementById("studentName").value
  console.log(studentName)
  if (!studentName) {
    alert("Please enter student's name first")
    return;
  }

  let marks = [];
  let valid = true

  subjects.forEach(sub => {
    const studentMarks = +document.getElementById(`mark_${sub}`).value.trim()
    if (isNaN(studentMarks) || studentMarks < 0 || studentMarks > 100) {
    valid = false;
  }
    // console.log(studentMarks)
    marks.push(studentMarks || 0)
  })

  if (!valid) {
    alert("Please enter valid marks for all subjects '0 - 100'");
    return;
  }

  students.push({ Name: studentName, Marks: marks })
  updateTable();
  document.getElementById("studentName").value = "";

  subjects.forEach(sub => {
    document.getElementById(`mark_${sub}`).value = "";
  });


}




function updateTable() {
  const tbody = document.querySelector("#marksTable tbody");
  tbody.innerHTML = "";

  students.forEach(student => {
    let row = `<td>${student.Name}</td>`;
    student.Marks.forEach(mark => {
      row += `<td>${mark}</td>`;
    });
    row += `</tr>`;
    tbody.innerHTML += row;
  });
}




