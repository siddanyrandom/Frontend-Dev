const API_URL = "http://localhost:3004/employees";
const tableBody = document.getElementById("employeeTable");
const errorBox = document.getElementById("error");

function loadEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const employees = JSON.parse(xhr.responseText);
            renderEmployees(employees);
        } else {
            showError("Failed to load employees.");
        }
    };

    xhr.onerror = function () {
        showError("Network error while loading employees.");
    };

    xhr.send();
}

function renderEmployees(employees) {
    tableBody.innerHTML = "";

    employees.forEach(emp => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${emp.name}</td>
            <td class="status">${emp.status}</td>
            <td>
                <button class="${emp.status === 'active' ? 'active-btn' : 'inactive-btn'}"
                        onclick="toggleStatus(${emp.id}, this)">
                    ${emp.status === 'active' ? 'Deactivate' : 'Activate'}
                </button>
            </td>
        `;

        tableBody.appendChild(tr);
    });
}

function toggleStatus(id, button) {
    const row = button.closest("tr");
    const statusCell = row.querySelector(".status");

    const oldStatus = statusCell.textContent;
    const newStatus = oldStatus === "active" ? "inactive" : "active";

    statusCell.textContent = newStatus;
    button.textContent = newStatus === "active" ? "Deactivate" : "Activate";
    button.className = newStatus === "active" ? "active-btn" : "inactive-btn";

    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", `${API_URL}/${id}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status !== 200) {
            revertUI();
        }
    };

    xhr.onerror = function () {
        revertUI();
    };

    xhr.send(JSON.stringify({ status: newStatus }));

    function revertUI() {
        statusCell.textContent = oldStatus;
        button.textContent = oldStatus === "active" ? "Deactivate" : "Activate";
        button.className = oldStatus === "active" ? "active-btn" : "inactive-btn";
        showError("Error updating status. Try again.");
    }
}

function showError(msg) {
    errorBox.textContent = msg;
    setTimeout(() => errorBox.textContent = "", 3000);
}

loadEmployees();
