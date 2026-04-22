const addRowBtn = document.getElementById("addRow");
const tableBody = document.getElementById("tableBody");

//Adding click event listener to the "Add Row" button
addRowBtn.addEventListener("click", () => {
    addNewRow();
});

//Function to add a new row to the table
function addNewRow() {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><input type="text" placeholder="Unit Name"></td>
        <td><input type="number" class="cat"></td>
        <td><input type="number" class="cat"></td>
        <td><input type="number" class="cat"></td>
        <td><input type="number" class="exam"</td>
        <td class="unit-total">0</td>
        <td><input type="number" class="unit-weight"></td>
        <td class="weighted-score">0</td>
    `;
    tableBody.appendChild(row);
}

window.onload = () => {
    addNewRow(); // Add an initial row when the page loads
}