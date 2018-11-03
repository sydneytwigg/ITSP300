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
 var name = registerViewModel.get("name");
     var surname = registerViewModel.get("surname");
    var emailVal = registerViewModel.get("email");
     var phone = registerViewModel.get("phone");
    var password = registerViewModel.get("password");
     var height = registerViewModel.get("height");
     var weight = registerViewModel.get("weight");
    var answer = registerViewModel.get("answer");
    var goal = registerViewModel.get("goal");


  
        if (password != null && answer != null && name!=null&& surname!=null&&phone!=null&& height!=null&& weight!=null&&goal!=null) {
                       if (validator.validate(emailVal) == true) {    
                alert("Registered");
                //db user email and password insert here
                const button = args.object;
                const page = button.page;
                page.frame.navigate("./login/login-page")              
                            
        } else {
            alert("Enter valid email address");
          
        }
    } else {
          alert("Please complete all fields");
    }
}

exports.RegisterValidate = RegisterValidate;
exports.pageLoaded = pageLoaded;


