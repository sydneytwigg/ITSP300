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

function LoginValidate(args) {
    var validator = require("email-validator");
    var emailVal = loginViewModel.get("email");
    var password = loginViewModel.get("password");

    // var password = this.get("password");
    if (validator.validate(emailVal) == true) {
        if (password != null) {          
            //db user email and password insert here
            const button = args.object;
            const page = button.page;
            page.frame.navigate("./home/home-items-page");
        } else {
            alert("Enter password");
        }
    } else {
        alert("Enter valid email address");
    }
}

function forgotPassword() {   
    alert("yay");
}

exports.LoginValidate = LoginValidate;
exports.Register = Register;
exports.forgotPassword = forgotPassword;
exports.pageLoaded = pageLoaded;