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

    const inputs = row.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            calculateRow(row);
        });
    });
}

window.onload = () => {
    addNewRow(); // Add an initial row when the page loads
}

function calculateRow(row) {
    const cats = row.querySelectorAll(".cat");
    const exam = row.querySelector(".exam");
    const unitWeight = row.querySelector(".unit-weight");

    let total = 0;

    // Sum CATs
    cats.forEach(cat => {
        total += Number(cat.value) || 0;
    });

    // Add exam
    total += Number(exam.value) || 0;

    // Display Unit Total
    row.querySelector(".unit-total").textContent = total;

    // Calculate Weighted Score
    const weight = Number(unitWeight.value) || 0;
    const weightedScore = total * weight;

    row.querySelector(".weighted-score").textContent = weightedScore;
}
