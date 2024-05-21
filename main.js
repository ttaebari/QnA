// Fetching the car names from the car.txt file on the server
fetch('main.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.trim().split('\n'); // Assuming the car names are tab-separated
        const table = document.getElementById('mt');

        // Generating table rows for each car name
        lines.forEach(line => {
            const numbers = line.split(' ');  // 공백을 기준으로 문자열 분리
            let today = parseInt(numbers[0]);
            let yesterday = parseInt(numbers[1]);
            const row = table.insertRow();
            //row.className = 'dynamic-row'; // 동적 행에 클래스 추가
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            cell1.textContent = "삼성전자";
            cell2.textContent = today;
            cell3.textContent = yesterday;
            cell4.textContent = today - yesterday;
            cell5.innerHTML = '<a onclick = "showDetails()" style = "cursor: pointer;">자세히보기</a>';
            cell6.innerHTML = '<a onclick = "showRecords()" style = "cursor: pointer;">점수기록 보기</a>';
            if (today > yesterday) {
                row.classList.add('high-score');
            } else if (today === yesterday) {
                row.classList.add('same-score');
            } else {
                row.classList.add('low-score');
            }
        });
    });

fetch('main.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.trim().split('\n'); // Assuming the car names are tab-separated
        const table = document.getElementById('e-mt');

        // Generating table rows for each car name
        lines.forEach(line => {
            const numbers = line.split(' ');  // 공백을 기준으로 문자열 분리
            let today = parseInt(numbers[0]);
            let yesterday = parseInt(numbers[1]);
            const row = table.insertRow();
            //row.className = 'dynamic-row'; // 동적 행에 클래스 추가
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            cell1.textContent = "Samsung Electronics";
            cell2.textContent = today;
            cell3.textContent = yesterday
            cell4.textContent = today - yesterday
            cell5.innerHTML = '<a onclick = "e_showDetails()" style = "cursor: pointer;">Click Details</a>';
            cell6.innerHTML = '<a onclick = "e_showRecords()" style = "cursor: pointer;">Click Records</a>';
            if (today > yesterday) {
                row.classList.add('high-score');
            } else if (today === yesterday) {
                row.classList.add('same-score');
            } else {
                row.classList.add('low-score');
            }
        });
    });

fetch('detail.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.trim().split('\n'); // Assuming the car names are tab-separated
        const table = document.getElementById('dt');

        // Generating table rows for each car name
        lines.forEach((line, index) => {
            const numbers = line.split(' ');  // 공백을 기준으로 문자열 분리
            let today = parseInt(numbers[0]);
            let yesterday = parseInt(numbers[1]);
            const row = table.insertRow();
            //row.className = 'dynamic-row'; // 동적 행에 클래스 추가
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            cell1.textContent = index + 1;
            cell2.textContent = "재료 수급";
            cell3.textContent = today;
            cell4.textContent = yesterday;
            cell5.textContent = today - yesterday;
            if (today > yesterday) {
                row.classList.add('high-score');
            } else if (today === yesterday) {
                row.classList.add('same-score');
            } else {
                row.classList.add('low-score');
            }
        });
    });

fetch('detail.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.trim().split('\n'); // Assuming the car names are tab-separated
        const table = document.getElementById('e-dt');

        // Generating table rows for each car name
        lines.forEach((line, index) => {
            const numbers = line.split(' ');  // 공백을 기준으로 문자열 분리
            let today = parseInt(numbers[0]);
            let yesterday = parseInt(numbers[1]);
            const row = table.insertRow();
            //row.className = 'dynamic-row'; // 동적 행에 클래스 추가
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            cell1.textContent = index + 1;
            cell2.textContent = "industry";
            cell3.textContent = today
            cell4.textContent = yesterday
            cell5.textContent = today - yesterday
            if (today > yesterday) {
                row.classList.add('high-score');
            } else if (today === yesterday) {
                row.classList.add('same-score');
            } else {
                row.classList.add('low-score');
            }
        });
    });


fetch('record.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.trim().split('\n'); // Assuming the car names are tab-separated
        const table = document.getElementById('rt');

        // Generating table rows for each car name
        lines.forEach((line, index) => {
            const numbers = line.split(' ');  // 공백을 기준으로 문자열 분리
            let today = parseInt(numbers[0]);
            let today_7 = parseInt(numbers[1]);
            let today_14 = parseInt(numbers[2]);
            let today_21 = parseInt(numbers[3]);
            const row = table.insertRow();
            row.className = 'dynamic-row'; // 동적 행에 클래스 추가
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            cell1.textContent = index;
            if (index === 0) {
                cell2.textContent = "총합";
            }
            else {
                cell2.textContent = "재료 수급";
            }
            cell3.textContent = today;
            cell4.textContent = today_7;
            cell5.textContent = today_14;
            cell6.textContent = today_21;
            // Prepare a canvas element for the chart
            const canvas = document.createElement('canvas');
            canvas.id = 'chart' + index;
            cell7.appendChild(canvas);

            // Create a chart
            const ctx = canvas.getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["오늘", "7일전", "14일전", "21일전"],
                    datasets: [{
                        data: [today, today_7, today_14, today_21],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false // 이 옵션을 false로 설정하여 범례를 숨김
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });
    });

fetch('record.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.trim().split('\n'); // Assuming the car names are tab-separated
        const table = document.getElementById('e-rt');

        // Generating table rows for each car name
        lines.forEach((line, index) => {
            const numbers = line.split(' ');  // 공백을 기준으로 문자열 분리
            let today = parseInt(numbers[0]);
            let today_7 = parseInt(numbers[1]);
            let today_14 = parseInt(numbers[2]);
            let today_21 = parseInt(numbers[3]);
            const row = table.insertRow();
            row.className = 'dynamic-row'; // 동적 행에 클래스 추가
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            cell1.textContent = index;
            if (index === 0) {
                cell2.textContent = "Total";
            }
            else {
                cell2.textContent = "industry";
            }
            cell3.textContent = today;
            cell4.textContent = today_7;
            cell5.textContent = today_14;
            cell6.textContent = today_21;
            const canvas = document.createElement('canvas');
            canvas.id = 'chart' + index;
            cell7.appendChild(canvas);

            // Create a chart
            const ctx = canvas.getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Today", "7 Days", "14 Days", "21 Days"],
                    datasets: [{
                        data: [today, today_7, today_14, today_21],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false // 이 옵션을 false로 설정하여 범례를 숨김
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });
    });


function showDetails() {
    const table1 = document.getElementById('detailTable');
    table1.style.display = "table";
    const table2 = document.getElementById('mainTable');
    table2.style.display = "none";
    const table3 = document.getElementById('recordTable');
    table3.style.display = "none";
}

function showOriginal() {
    const table1 = document.getElementById('detailTable');
    table1.style.display = "none";
    const table2 = document.getElementById('mainTable');
    table2.style.display = "table";
    const table3 = document.getElementById('recordTable');
    table3.style.display = "none";
}

function showRecords() {
    const table1 = document.getElementById('detailTable');
    table1.style.display = "none";
    const table2 = document.getElementById('mainTable');
    table2.style.display = "none";
    const table3 = document.getElementById('recordTable');
    table3.style.display = "table";
}


function e_showDetails() {
    const table1 = document.getElementById('e-detailTable');
    table1.style.display = "table";
    const table2 = document.getElementById('e-mainTable');
    table2.style.display = "none";
    const table3 = document.getElementById('e-recordTable');
    table3.style.display = "none";
}

function e_showOriginal() {
    const table1 = document.getElementById('e-detailTable');
    table1.style.display = "none";
    const table2 = document.getElementById('e-mainTable');
    table2.style.display = "table";
    const table3 = document.getElementById('e-recordTable');
    table3.style.display = "none";

}

function e_showRecords() {
    const table1 = document.getElementById('e-detailTable');
    table1.style.display = "none";
    const table2 = document.getElementById('e-mainTable');
    table2.style.display = "none";
    const table3 = document.getElementById('e-recordTable');
    table3.style.display = "table";
}

function translate_eng() {
    const table1 = document.querySelector('.scroll-container');
    table1.style.display = "none";
    const table2 = document.querySelector('.e-scroll-container');
    table2.style.display = "flex";
}

function translate_kor() {
    const table1 = document.querySelector('.scroll-container');
    table1.style.display = "flex";
    const table2 = document.querySelector('.e-scroll-container');
    table2.style.display = "none";
}

function go(url) {
    window.open(url, '_blank');
}