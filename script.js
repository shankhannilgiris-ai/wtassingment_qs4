/**
 * Academic Grade Calculator Script
 * Demonstrates: Variables, Data Types, Literals, Operators, Selection & Iteration Statements, Functions.
 */

// User-Defined Function to calculate total, percentage, grade and pass/fail status
function calculateGrade() {
    // 1. Array storing input element IDs (Demonstrating iteration over data structures)
    const subjectIds = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];
    const marks = [];
    let totalMarks = 0;
    let hasFailedSubject = false;

    // 2. Iteration Statement (for loop) to validate and collect input values
    for (let i = 0; i < subjectIds.length; i++) {
        const inputElement = document.getElementById(subjectIds[i]);
        const val = parseFloat(inputElement.value);

        // Validation check using Selection Statement (if condition)
        if (isNaN(val) || val < 0 || val > 100) {
            alert(`Please enter a valid mark between 0 and 100 for Subject ${i + 1}.`);
            inputElement.focus();
            return;
        }

        marks.push(val);
        totalMarks += val; // Addition Operator

        // Passing criteria per subject: Minimum 40 marks required to pass individual subject
        if (val < 40) {
            hasFailedSubject = true;
        }
    }

    // 3. Mathematical Operator: Calculate Average Percentage
    const averagePercentage = totalMarks / subjectIds.length;

    // 4. Selection Statement: Determine Grade using nested if-else condition
    let letterGrade = '';
    
    if (hasFailedSubject) {
        letterGrade = 'F';
    } else if (averagePercentage >= 90) {
        letterGrade = 'S (Outstanding)';
    } else if (averagePercentage >= 80) {
        letterGrade = 'A (Excellent)';
    } else if (averagePercentage >= 70) {
        letterGrade = 'B (Very Good)';
    } else if (averagePercentage >= 60) {
        letterGrade = 'C (Good)';
    } else if (averagePercentage >= 50) {
        letterGrade = 'D (Satisfactory)';
    } else {
        letterGrade = 'F (Fail)';
    }

    // 5. Result Status Evaluation
    const isPassed = !hasFailedSubject && averagePercentage >= 50;
    const resultStatusText = isPassed ? 'PASSED' : 'FAILED';

    // 6. Update UI DOM Elements
    document.getElementById('totalMarks').textContent = `${totalMarks} / 500`;
    document.getElementById('avgPercentage').textContent = `${averagePercentage.toFixed(2)}%`;
    document.getElementById('letterGrade').textContent = letterGrade;
    
    const statusElem = document.getElementById('passStatus');
    statusElem.textContent = resultStatusText;
    statusElem.className = isPassed ? 'val status-pass' : 'val status-fail';

    // Make Result Container Visible
    document.getElementById('resultDisplay').classList.remove('hidden');
}

// User-Defined Function to reset form and hide output display
function resetCalculator() {
    const subjectIds = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];
    for (let i = 0; i < subjectIds.length; i++) {
        document.getElementById(subjectIds[i]).value = '';
    }
    document.getElementById('resultDisplay').classList.add('hidden');
}
