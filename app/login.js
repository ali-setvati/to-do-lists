const loginForm = document.getElementById("loginForm")
const logformBtn = document.getElementById("logformBtn")

const url = "https://localhost:3000/api/login"

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    document.cookie = `${cname}=${cvalue}; expires=${d.toUTCString()}; path=/`;
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(loginForm.elements["email"].value);
    console.log(loginForm.elements["password"].value);
    const { email, password } = e.target
    const option = {
        method: "POST",
        body: JSON.stringify({
            user: {
                email: loginForm.elements["email"].value,
                password: loginForm.elements["password"].value
            }
        })
    }
    fetch(url, option)
        .then((res) => res.json())
        .then((data) => {
            if (data.status !== 201) {
                // *code*
                return
            }
            const token = data.token;
            setCookie("jwttoken", token, 30)
            alert("you are set")
        }
        )
})