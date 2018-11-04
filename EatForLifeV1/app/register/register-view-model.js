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

    if (validator.validate(emailVal) == true) {
        if (password != null) {
            if (answer != null) {
                
            /*
                db.execSQL("INSERT INTO client (Email, Password, Answer) VALUES (?, ?, ?)",[emailVal, password, answer]).then(id => {
                alert("Account Created!");

                // Transition back to login

                }, error => {
                alert("INSERT ERROR", error);
            });
            */

            //This is just to check that there is a db connection on the page
            db.get("SELECT * FROM client").then(rows => {
                alert("Account Created!");
                topmost().goBack();

            }, error => {
                alert("SELECT ERROR", error);
            });

            } else {
                alert("Please provide an answer for the question");
            }
        } else {
            alert("Enter password");
        }
    } else {
        alert("Enter valid email address");
    }
 }
    return viewModel;
}

module.exports = RegisterViewModel;

