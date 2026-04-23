GradeUni

A simple and practical university grade calculator built with HTML, CSS, and JavaScript.
It allows students to input continuous assessment tests (CATs), exams, and unit weights to calculate mean grade, GPA, and classification based on the Kenyan grading system.

---

🚀 Features

- Add unlimited units dynamically
- Input CAT scores and exam marks per unit
- Automatic unit total calculation
- Weighted score calculation using unit credits
- Real-time summary updates
- Mean grade calculation
- Kenyan grading system (A–E)
- GPA conversion
- Classification (First Class, Second Upper, etc.)
- Live date and time display
- Export results as a PDF (transcript-style)
- Responsive layout for different screen sizes

---

🧠 How It Works

For each unit:

- Total Score = Sum of CATs + Exam
- Weighted Score = Total Score × Unit Weight

Overall:

- Total Weighted Score = Sum of all weighted scores
- Total Unit Weights = Sum of all unit weights
- Mean Grade = Total Weighted Score ÷ Total Unit Weights

---

📊 Grading System (Kenyan)

Marks| Grade| GPA
70 – 100| A| 4.0
60 – 69| B| 3.0
50 – 59| C| 2.0
40 – 49| D| 1.0
Below 40| E| 0.0

---

🏆 Classification

- First Class → GPA ≥ 3.7
- Second Class Upper → GPA ≥ 3.0
- Second Class Lower → GPA ≥ 2.0
- Pass → GPA ≥ 1.0
- Fail → GPA < 1.0

---

🛠️ Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)
- jsPDF (for PDF export)

---

📱 Responsiveness

- Flexible layout using CSS
- Inputs adapt to screen size
- Table supports horizontal scrolling on smaller devices
- Optimized for mobile, tablet, and desktop

---

📥 How to Use

1. Enter student details (name, university, course)
2. Click Add Unit to insert a new row
3. Enter CAT scores and exam marks
4. Enter unit weight (credits)
5. View automatic calculations:
   - Unit totals
   - Weighted scores
   - Mean grade
   - GPA and classification
6. Click Download PDF to export results

---

📂 Project Structure

gradeuni/
│
├── index.html
├── style.css
└── script.js

---

⚠️ Notes

- Input validation prevents negative values and invalid scores
- Table may scroll horizontally on smaller screens due to data density
- Grading system is based on a general Kenyan university standard (may vary slightly by institution)

---

🎯 Future Improvements

- Custom grading systems per university
- User-defined CAT structures per unit
- Local storage (save results)
- Improved PDF formatting (full transcript layout)
- Better mobile UX (card-based layout)

---

📌 Author

Built as a personal hackathon project to practice real-world problem solving, JavaScript logic, and UI structuring.

---

💡 License

Free to use and modify for learning purposes.