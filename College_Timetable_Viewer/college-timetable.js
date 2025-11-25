const BASE = "http://localhost:3007/timetable";
const daySelect = document.getElementById("daySelect");
const container = document.getElementById("timetableContainer");
const loading = document.getElementById("loading");
const noClassMsg = document.getElementById("noClassMsg");

daySelect.addEventListener("change", () => {
    const selectedDay = daySelect.value;
    
    container.innerHTML = "";
    noClassMsg.textContent = "";

    if (!selectedDay) return;

    loading.style.display = "block";

    fetch(`${BASE}?day=${selectedDay}`)
        .then(res => res.json())
        .then(data => {
            loading.style.display = "none";

            if (data.length === 0) {
                noClassMsg.textContent = "No classes today.";
                return;
            }

            data.forEach(item => {
                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
                    <div class="subject">${item.subject}</div>
                    <div class="faculty">Faculty: ${item.faculty}</div>
                    <div class="time">Time: ${item.time}</div>
                `;

                container.appendChild(card);
            });
        })
        .catch(() => {
            loading.style.display = "none";
            noClassMsg.textContent = "Failed to load timetable.";
        });
});
