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
    }
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

        const createBtn = (label, handler) => {
            const btn = document.createElement("button");
            btn.textContent = label;
            btn.onclick = handler;
            return btn;
        };

        actionTd.appendChild(createBtn("Sửa", () => {
            const newName = prompt("Tên mới:", name);
            const newAge = prompt("Tuổi mới:", age);
            const newClass = prompt("Lớp mới:", cls);
            if (newName && newAge && newClass) {
                student[i] = {
                name: newName.trim(),
                age: newAge.trim(),
                cls: newClass.trim()
                };
                render();
            }
        }));

        actionTd.appendChild(createBtn("Xoá", () => {
            student.splice(i, 1);
            render();
        }));

        tr.appendChild(actionTd);
        table.appendChild(tr);
    });
}