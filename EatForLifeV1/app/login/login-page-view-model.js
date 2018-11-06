var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
var validator = require("email-validator");
let getFrameById = require("tns-core-modules/ui/frame").getFrameById;
var LoginPage = require("./login-page");
var applicationSettingsModule = require("application-settings");
const topmost = require("tns-core-modules/ui/frame").topmost;

function LoginViewModel(db) {
    var viewModel = new Observable();

    applicationSettingsModule.getString("EFL-user","");
    applicationSettingsModule.getString("EFL-ID","");
    applicationSettingsModule.getString("EFL-mealPlan","");
    applicationSettingsModule.getString("EFL-overview","");


  viewModel.LoginValidate = function (args) {

    var emailVal = viewModel.get("email");
    var password = viewModel.get("password");


    if (validator.validate(emailVal) == true) {
        if (password != null) {

			db.get("SELECT * FROM client WHERE Email = ? AND Password = ?",[emailVal, password]).then(rows => {
                if (rows != null) {
                    alert("Login Successful");

                    const button = args.object;
                    const page = button.page;
                    applicationSettingsModule.setString("EFL-user",emailVal);
                    applicationSettingsModule.setString("EFL-ID",rows[0]);
              //      applicationSettingsModule.setString("EFL-mealPlan",rows[2]);
                    applicationSettingsModule.setString("EFL-overview",rows[5]);
                    topmost().navigate({ moduleName: applicationSettingsModule.getString("EFL-login")});
                }else{
                    alert("Incorrect Email or Password!");
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
