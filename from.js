// Snake Matrix Generator Logic
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('matrixForm');
    const tableDiv = document.getElementById('table');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const rows = parseInt(document.getElementById('row').value, 10);
        const cols = parseInt(document.getElementById('column').value, 10);
        if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
            tableDiv.innerHTML = '<p style="color:red">Please enter valid positive integers.</p>';
            return;
        }
        const matrix = generateSnakeMatrix(rows, cols);
        tableDiv.innerHTML = matrixToHTML(matrix);
    });
});

function generateSnakeMatrix(rows, cols) {
    let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
    let num = 1;
    for (let i = 0; i < rows; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = num++;
            }
        } else {
            for (let j = cols - 1; j >= 0; j--) {
                matrix[i][j] = num++;
            }
        }
    }
    return matrix;
}

function matrixToHTML(matrix) {
    let html = '<table class="snake-matrix">';
    for (let row of matrix) {
        html += '<tr>';
        for (let cell of row) {
            html += `<td>${cell}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';
    return html;
}
