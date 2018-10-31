var frameModule = require("tns-core-modules/ui/frame");
var LoginViewModel = require("./login-page-view-model");

var loginViewModel = new LoginViewModel();

function pageLoaded(args) {

    var page = args.object;
    page.bindingContext = loginViewModel;
}
function Register(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./register/register-page");
}

function LoginValidate() {
    var email = loginViewModel.get("email");
    var password = loginViewModel.get("password");

    //insert the values into db

    // var password = this.get("password");
    if (email == "a" && password == "1") {
        alert("Login");
    } else {
        alert("Login failed");
    }

}

function forgotPassword() {
   
    alert("yay");
}

exports.LoginValidate = LoginValidate;
exports.Register = Register;
exports.forgotPassword = forgotPassword;
exports.pageLoaded = pageLoaded;