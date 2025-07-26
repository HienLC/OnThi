const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const classInput = document.getElementById("class");
const table = document.getElementById("studentList");

let student = [];

form.onsubmit = e => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const cls = classInput.value.trim();

    if (name && age && cls) {
        student.push({name, age, cls});
        nameInput.value = ageInput.value = classInput.value = "";
        render();
    };
}

function render(){
    table.innerHTML = "";
    student.forEach(({name, age, cls}, i) => {
        const tr = document.createElement("tr");

        [name, age, cls].forEach(text => {
            const td = document.createElement("td");

            td.textContent = text;
            tr.appendChild(td);
        });

        const actionTd = document.createElement("td");
        tr.appendChild(actionTd);
        table.appendChild(tr);
    });
}