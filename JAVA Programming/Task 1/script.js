document.addEventListener('DOMContentLoaded', () => {
    const gradeInput = document.getElementById('grade-input');
    const addGradeButton = document.getElementById('add-grade');
    const calculateButton = document.getElementById('calculate');
    const averageDisplay = document.getElementById('average');
    const highestDisplay = document.getElementById('highest');
    const lowestDisplay = document.getElementById('lowest');

    const grades = [];

    addGradeButton.addEventListener('click', () => {
        const grade = parseFloat(gradeInput.value);
        if (!isNaN(grade) && grade >= 0) {
            grades.push(grade);
            gradeInput.value = '';
            gradeInput.focus();
        } else {
            alert('Please enter a valid grade.');
        }
    });

    calculateButton.addEventListener('click', () => {
        if (grades.length === 0) {
            alert('No grades available to calculate.');
            return;
        }

        const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        const highest = Math.max(...grades);
        const lowest = Math.min(...grades);

        averageDisplay.textContent = average.toFixed(2);
        highestDisplay.textContent = highest;
        lowestDisplay.textContent = lowest;
    });
});