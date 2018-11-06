var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
let getFrameById = require("tns-core-modules/ui/frame").getFrameById;
var validator = require("email-validator");
const topmost = require("tns-core-modules/ui/frame").topmost;

function RegisterViewModel(db) {
    var viewModel = new Observable();


 viewModel.RegisterValidate = function () {

    var emailVal = viewModel.get("email");
    var password = viewModel.get("password");
    var answer = viewModel.get("answer");
     var confirmPassword = viewModel.get("ConfirmPassword password");
     var name = viewModel.get("name");
     var surname = viewModel.get("surname");
     var height= viewModel.get("height");
     var weight = viewModel.get("weight");
     var goal = viewModel.get("goal");
     var phone = viewModel.get("phone");

     if (name != null && surname != null && height != null && weight != null && goal != null && phone != null && password != null && confirmPassword!=null) {
         if (validator.validate(emailVal) == true) {
               
             //    db.execSQL("INSERT INTO client (Email, Password, Answer) VALUES (?, ?, ?)",[emailVal, password, answer]).then(id => {
             //    alert("Account Created!");
 
             //    // Transition back to login
 
             //    }, error => {
             //    alert("INSERT ERROR", error);
             //});
             

                //This is just to check that there is a db connection on the page
                db.get("SELECT * FROM client").then(rows => {
                    alert("Account Created!");
                    topmost().goBack();

                }, error => {
                    alert("SELECT ERROR", error);
                });

         } else {
             alert("Invalide email address");
         }   
     } else {
         alert("Please complete all fields");
     }


 }
    return viewModel;
}

module.exports = RegisterViewModel;

