const Observable = require("tns-core-modules/data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;
var applicationSettingsModule = require("application-settings");
const fromObjectRecursive = require("tns-core-modules/data/observable").fromObjectRecursive;

var dialogs = require("tns-core-modules/ui/dialogs");
var Sqlite = require("nativescript-sqlite");

function ProfileViewModel(db) {
    var viewModel = new Observable();
       
    var email = applicationSettingsModule.getString("EFL-user");



    db.get("SELECT * FROM client WHERE Email = ?",[email]).then(rows => {
            viewModel.set("name",rows[10]);
            viewModel.set("surname", rows[11]);
            viewModel.set("phoneNum",rows[12]);

        }, error => {
            alert("SELECT ERROR", error);
        });

       

    return viewModel;
}

module.exports = ProfileViewModel;
