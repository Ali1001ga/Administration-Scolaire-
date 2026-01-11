// assets/js/main.js

// Function to render the Students Table
function loadStudents() {
    // 1. Select the table body from HTML
    const tableBody = document.getElementById("students-table-body");

    // 2. Clear the table first (so we don't duplicate rows if we reload)
    tableBody.innerHTML = "";

    // 3. Loop through the "students" data (from data.js)
    students.forEach((student) => {
        
        // Create a new table row <tr>
        const row = document.createElement("tr");

        // Inject the HTML content for the row
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>
                <button class="btn btn-sm btn-warning">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        `;

        // 4. Append the new row to the table body
        tableBody.appendChild(row);
    });
}

// Function to delete a student (Simulated)
function deleteStudent(id) {
    if(confirm("Are you sure you want to delete this student?")) {
        // Filter the array to remove the item with this ID
        students = students.filter(student => student.id !== id);
        
        // Refresh the table to show the change
        loadStudents(); 
    }
}

// Initialize: Load the table when the script runs
// (Or you can call this inside your showSection function in HTML)
loadStudents();