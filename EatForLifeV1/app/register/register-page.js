var frameModule = require("tns-core-modules/ui/frame");
var RegisterViewModel = require("./register-view-model");
var Observable = require("data/observable").Observable;

var Sqlite = require("nativescript-sqlite");

var registerViewModel = new RegisterViewModel();

function pageLoaded(args) {

  var page = args.object;  
    page.bindingContext = registerViewModel;
} 

function RegisterValidate() {
    var email = registerViewModel.get("email");
    var password = registerViewModel.get("password");
    var confirmPassword = registerViewModel.get("ConfirmPassword password");

    //insert the values into db

    // var password = this.get("password");
    if (email == "a" && password == "1" && email == confirmPassword) {
                    alert("Done");
          
           } else {
        alert("enter detail");
            }
}

exports.RegisterValidate = RegisterValidate;

exports.pageLoaded = pageLoaded;


