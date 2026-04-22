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
        <td><input type="number" class="cat" placeholder="CAT 1"></td>
        <td><input type="number" class="cat" placeholder="CAT 2"></td>
        <td><input type="number" class="cat" placeholder="CAT 3"></td>
        <td><input type="number" class="exam" placeholder="Exam"></td>
        <td class="unit-total">0</td>
        <td><input type="number" class="unit-weight" placeholder="Weight">
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

     // Validate CATs
    cats.forEach(cat => {
        let value = Number(cat.value) || 0;

        if (value < 0) value = 0;
        if (value > 30) value = 30; // TEMP limit (we'll improve later)

        cat.value = value;
        total += value;
    });

    // Validate Exam
    let examValue = Number(exam.value) || 0;

    if (examValue < 0) examValue = 0;
    if (examValue > 70) examValue = 70;

    exam.value = examValue;
    total += examValue;

    // Display Unit Total
    row.querySelector(".unit-total").textContent = total;

    // Calculate Weighted Score
    const weight = Number(unitWeight.value) || 0;
    const weightedScore = total * weight;

    row.querySelector(".weighted-score").textContent = weightedScore;

    calculateSummary(); // Update summary after calculating the row
}

// Function to calculate total weights, total weighted scores, mean grade, and update the display
function calculateSummary() {
    const rows = document.querySelectorAll("#tableBody tr");

    let totalWeights = 0;
    let totalWeightedScore = 0;

    rows.forEach(row => {
        const weight = Number(row.querySelector(".unit-weight").value) || 0;
        const weightedScore = Number(row.querySelector(".weighted-score").textContent) || 0;

        totalWeights += weight;
        totalWeightedScore += weightedScore;
    });

    // Display totals
    document.getElementById("totalUnits").textContent = totalWeights;
    document.getElementById("totalWeighted").textContent = totalWeightedScore;

    // Calculate mean
    let mean = 0;
    if (totalWeights > 0) {
        mean = totalWeightedScore / totalWeights;
    }

    document.getElementById("meanGrade").textContent = mean.toFixed(2);

    // Determine grade and GPA
    const { grade, gpa } = getGrade(mean);
    const classification = getClass(gpa);

    // Display results
    document.getElementById("meanGrade").textContent = mean.toFixed(2);
    document.getElementById("finalGrade").textContent = grade;
    document.getElementById("gpa").textContent = gpa.toFixed(2);
    document.getElementById("classification").textContent = classification;
}

// Function to determine grade and GPA based on mean score
function getGrade(mean) {
    if (mean >= 70) return { grade: "A", gpa: 4.0 };
    if (mean >= 60) return { grade: "B", gpa: 3.0 };
    if (mean >= 50) return { grade: "C", gpa: 2.0 };
    if (mean >= 40) return { grade: "D", gpa: 1.0 };
    return { grade: "E", gpa: 0.0 };
}

// Function to determine class based on GPA
function getClass(gpa) {
    if (gpa >= 3.7) return "First Class";
    if (gpa >= 3.0) return "Second Class Upper";
    if (gpa >= 2.0) return "Second Class Lower";
    if (gpa >= 1.0) return "Pass";
    return "Fail";
}

const downloadBtn = document.getElementById("download");

downloadBtn.addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Title
    doc.text("GradeUni Transcript", 20, 20);

    // Student Info
    const inputs = document.querySelectorAll(".student-info input");
    let y = 30;

    inputs.forEach(input => {
        doc.text(input.value || "-", 20, y);
        y += 10;
    });

    // Table data (simple version)
    const rows = document.querySelectorAll("#tableBody tr");

    y += 10;
    doc.text("Units:", 20, y);
    y += 10;

    rows.forEach((row, index) => {
        const unitName = row.querySelector("input[type='text']").value || "Unit";
        const total = row.querySelector(".unit-total").textContent;
        const weight = row.querySelector(".unit-weight").value || 0;

        doc.text(`${index + 1}. ${unitName} | Total: ${total} | Weight: ${weight}`, 20, y);
        y += 10;
    });

    // Final results
    y += 10;
    doc.text(`Mean: ${document.getElementById("meanGrade").textContent}`, 20, y);
    y += 10;
    doc.text(`Grade: ${document.getElementById("finalGrade").textContent}`, 20, y);
    y += 10;
    doc.text(`GPA: ${document.getElementById("gpa").textContent}`, 20, y);
    y += 10;
    doc.text(`Class: ${document.getElementById("classification").textContent}`, 20, y);

    doc.save("GradeUni_Transcript.pdf");
});