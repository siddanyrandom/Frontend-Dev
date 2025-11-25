const API_URL = "http://localhost:3005/tasks";

const $taskList = $("#taskList");
const $filter = $("#filterSelect");
const $loading = $("#loading");
const $error = $("#error");

function escapeHtml(str) {
    return $("<div>").text(str).html();
}

function buildUrl(filterVal) {
    if (!filterVal) return API_URL;

    if (filterVal === "completed") {
        return `${API_URL}?completed=true`;
    }

    return `${API_URL}?priority=${filterVal}`;
}

function loadTasks() {
    const filterVal = $filter.val();
    const url = buildUrl(filterVal);

    $loading.show();
    $error.text("");
    $taskList.empty();

    $.ajax({
        url: url,
        method: "GET",
        success: function (tasks) {
            $loading.hide();

            if (!tasks.length) {
                $taskList.html("<p>No tasks found</p>");
                return;
            }

            tasks.forEach(task => {
                const checked = task.completed ? "checked" : "";

                const priorityClass = `priority ${task.priority}`;

                const item = `
                    <li class="task-item" data-id="${task.id}">
                        <div>
                            <input type="checkbox" class="completeBox" ${checked}>
                            <strong>${escapeHtml(task.title)}</strong>
                        </div>
                        <span class="${priorityClass}">${task.priority}</span>
                    </li>
                `;

                $taskList.append(item);
            });

            attachCheckboxEvents();
        },
        error: function () {
            $loading.hide();
            $error.text("Error loading tasks");
        }
    });
}

function attachCheckboxEvents() {
    $(".completeBox").on("change", function () {
        const li = $(this).closest(".task-item");
        const id = li.data("id");
        const newState = $(this).is(":checked");

        $.ajax({
            url: `${API_URL}/${id}`,
            method: "PATCH",
            contentType: "application/json",
            data: JSON.stringify({ completed: newState }),
            error: () => {
                $(this).prop("checked", !newState);
                $error.text("Failed to update task");
            }
        });
    });
}

$filter.on("change", loadTasks);

$(document).ready(loadTasks);
