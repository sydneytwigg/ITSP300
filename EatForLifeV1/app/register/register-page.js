var frameModule = require("tns-core-modules/ui/frame");
var RegisterViewModel = require("./register-view-model");
var Observable = require("data/observable").Observable;

var Sqlite = require("nativescript-sqlite");

var registerViewModel = new RegisterViewModel();

function pageLoaded(args) {

    var page = args.object;
    page.bindingContext = registerViewModel;
}

function RegisterValidate(args) {
    var validator = require("email-validator");

    var emailVal = registerViewModel.get("email");
    var password = registerViewModel.get("password");
    var confirmPassword = registerViewModel.get("ConfirmPassword password");

    if (validator.validate(emailVal) == true) {
        if (password != null) {
            alert("Registered");
            //db user email and password insert here
            const button = args.object;
            const page = button.page;
            page.frame.navigate("./login/login-page")
        } else {
            alert("Enter password");
        }
    } else {
        alert("Enter valid email address");
    }
}

exports.RegisterValidate = RegisterValidate;
exports.pageLoaded = pageLoaded;


