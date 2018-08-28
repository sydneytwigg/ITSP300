const observableModule = require("data/observable");

function LoginPageViewModel() {
    const viewModel = observableModule.fromObject({
        email: "youremail@gmail.com",
        password: "Password1",
        confirmPassword: "",

        signIn: function () {
            const email = this.email;
            const password = this.password;
            topmost.navigate("./home/home-items-page");
            if (this.email.trim() === "" || this.password.trim() === "") {
                alert("Please provide both an email address and password.");
                return;
            }

            /* ***********************************************************
            * Call your custom signin logic using the email and password data.
            *************************************************************/
        }
    });

    return viewModel;
}

module.exports = LoginPageViewModel;
