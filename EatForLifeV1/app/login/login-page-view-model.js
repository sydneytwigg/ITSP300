var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
var validator = require("email-validator");

function LoginViewModel(db) {
    var viewModel = new Observable();

  viewModel.LoginValidate = function () {

    var emailVal = viewModel.get("email");
    var password = viewModel.get("password");


    if (validator.validate(emailVal) == true) {
        if (password != null) {          
            
			db.get("SELECT * FROM client WHERE Email = ? AND Password = ?",[emailVal, password]).then(rows => {
                if (rows[0] != null) {
                    alert("Logged in");

                    // Navigate to home page
                }

            });

        } else {
            alert("Enter password");
        }
    } else {
        alert("Enter valid email address");
    }
  }


    return viewModel;
}

module.exports = LoginViewModel;
