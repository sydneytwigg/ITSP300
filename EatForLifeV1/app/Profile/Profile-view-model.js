const Observable = require("tns-core-modules/data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;
var applicationSettingsModule = require("application-settings");
const fromObjectRecursive = require("tns-core-modules/data/observable").fromObjectRecursive;

var dialogs = require("tns-core-modules/ui/dialogs");
var Sqlite = require("nativescript-sqlite");

function ProfileViewModel(db) {
    var viewModel = new Observable();
       
    var email = applicationSettingsModule.getString("EFL-user");

    db.get("SELECT client.Name, client.Surname, client.Email, client.PhoneNum, client.Password, overview.Height, client.Current_Weight, client.Target_Weight from client INNER JOIN overview ON overview.idOverview = client.idOverview WHERE client.Email = ? ",[email]).then(rows => {
            viewModel.set("name",rows[0]);
            viewModel.set("surname", rows[1]);
            viewModel.set("email",rows[2]);
            viewModel.set("phoneNum",rows[3]);
            viewModel.set("pwd",rows[4]);
            viewModel.set("height",rows[5]);
            viewModel.set("weight",rows[6]);
            viewModel.set("goal",rows[7]);

        }, error => {
            alert("SELECT ERROR", error);
        });

    return viewModel;
}

module.exports = ProfileViewModel;
