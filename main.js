// Fetching the car names from the car.txt file on the server
fetch('main.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.trim().split('\n'); // Assuming the car names are tab-separated
        const table = document.getElementById('mt');

        // Generating table rows for each car name
        lines.forEach(line => {
            const numbers = line.split(' ');  // 공백을 기준으로 문자열 분리
            let today = parseInt(numbers[0]) ;
            let yesterday = parseInt(numbers[1]) ;
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            cell1.textContent = "삼성전자";
            cell2.textContent = today;
            cell3.textContent = yesterday ;
            cell4.textContent = today - yesterday;
            cell5.innerHTML = '<a onclick = "showDetails()">자세히보기</a>';
            cell6.innerHTML = '<a onclick = "showRecords()">점수기록 보기</a>';
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
            let today = parseInt(numbers[0]) ;
            let yesterday = parseInt(numbers[1]) ;
            const row = table.insertRow();
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
            cell5.innerHTML = '<a onclick = "e_showDetails()">Click Details</a>';
            cell6.innerHTML = '<a onclick = "e_showRecords()">Click Records</a>';
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
            let today = parseInt(numbers[0]) ;
            let yesterday = parseInt(numbers[1]) ;
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            cell1.textContent = index+1;
            cell2.textContent = "재료 수급";
            cell3.textContent = today ;
            cell4.textContent = yesterday ;
            cell5.textContent = today - yesterday ;
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
            let today = parseInt(numbers[0]) ;
            let yesterday = parseInt(numbers[1]) ;
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            cell1.textContent = index+1;
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
            let today = parseInt(numbers[0]) ;
            let today_7 = parseInt(numbers[1]) ;
            let today_14 = parseInt(numbers[2]) ;
            let today_21 = parseInt(numbers[3]) ;
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            cell1.textContent = index+1;
            cell2.textContent = "재료 수급";
            cell3.textContent = today ;
            cell4.textContent = today_7 ;
            cell5.textContent = today_14 ;
            cell6.textContent = today_21 ;
        });
    });

fetch('record.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.trim().split('\n'); // Assuming the car names are tab-separated
        const table = document.getElementById('e-rt');

        // Generating table rows for each car name
        lines.forEach((line, index) => {
            const number = line.split(' ');  // 공백을 기준으로 문자열 분리
            let today = parseInt(number[0]) ;
            let today_7 = parseInt(number[1]) ;
            let today_14 = parseInt(number[2]) ;
            let today_21 = parseInt(number[3]) ;
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            cell1.textContent = index+1;
            cell2.textContent = "industry";
            cell3.textContent = today ;
            cell4.textContent = today_7 ;
            cell5.textContent = today_14 ;
            cell6.textContent = today_21 ;
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

function showRecords(){
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

function e_showRecords(){
    const table1 = document.getElementById('e-detailTable');
    table1.style.display = "none";
    const table2 = document.getElementById('e-mainTable');
    table2.style.display = "none";
    const table3 = document.getElementById('e-recordTable');
    table3.style.display = "table";
}

function translate_eng(){
    const table1 = document.querySelector('.scroll-container');
    table1.style.display = "none";
    const table2 = document.querySelector('.e-scroll-container');
    table2.style.display = "flex";
}

function translate_kor(){
    const table1 = document.querySelector('.scroll-container');
    table1.style.display = "flex";
    const table2 = document.querySelector('.e-scroll-container');
    table2.style.display = "none";
}