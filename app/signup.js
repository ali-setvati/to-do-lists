const signupForm = document.getElementById("myform")
const formBtn = document.getElementById("formBtn")

const url = "https://localhost:3000/api/signup"

signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(signupForm.elements["username"].value);
    console.log(signupForm.elements["phone"].value);
    console.log(signupForm.elements["email"].value);
    console.log(signupForm.elements["password"].value);
    console.log(signupForm.elements["confirmpass"].value);


    const { username, phone, email, password, confirmpass } = e.target
    const option = {
        method: "POST",
        body: JSON.stringify({
            user: {
                username: signupForm.elements["username"].value,
                phone: signupForm.elements["phone"].value,
                email: signupForm.elements["email"].value,
                password: signupForm.elements["password"].value,
                // confirmpass: signupForm.elements["confirmpass"].value
            }

        })
    }
    // console.log(user);
    fetch(url, option)
        .then((res) => res.json())
        .then((data) => {
            if (data.status !== 201) {
                // *code*
                return
            }
            const token = data.token;
            alert("you are registered")
            window.location.replace(window.location.href.replace("/signup.html", "/login.html"))
        }
        )
})