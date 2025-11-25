const BASE_URL = "http://localhost:3008/users";

const msgEl = document.getElementById("message");
const btn = document.getElementById("registerBtn");

btn.addEventListener("click", async () => {
    msgEl.textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        msgEl.style.color = "red";
        msgEl.textContent = "Please fill all fields.";
        return;
    }

    try {
        // 1️⃣ CHECK DUPLICATE EMAIL
        const checkRes = await axios.get(`${BASE_URL}?email=${email}`);

        if (checkRes.data.length > 0) {
            msgEl.style.color = "red";
            msgEl.textContent = "Email already registered.";
            return;
        }

        // 2️⃣ POST NEW USER
        const newUser = { name, email };

        await axios.post(BASE_URL, newUser);

        msgEl.style.color = "green";
        msgEl.textContent = "Registration successful!";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";

    } catch (err) {
        msgEl.style.color = "red";
        msgEl.textContent = "Error occurred. Try again.";
        console.error(err);
    }
});
