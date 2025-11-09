const table = document.getElementById("table");

const questionList = [];
const buttonHTML = `<button id="escape-button"></button>`

function tableRows(table, rowCount, columnCount) {
    for (let i = 1; i <= rowCount; i++) {
        const tr = document.createElement("tr");
        for (let j = 1; j <= columnCount; j++) {
            const td = document.createElement("td");
            td.innerText = "jeejee"
            td.id = `${i}` + `${j}`;
            td.classList.add("big");
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function escapingButton(element) {
    element.innerHTML = "";
    
}

const tableMaker = () => {}

tableRows(table, 4, 4);