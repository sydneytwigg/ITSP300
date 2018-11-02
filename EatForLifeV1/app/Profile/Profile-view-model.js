const Observable = require("tns-core-modules/data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;

const fromObjectRecursive = require("tns-core-modules/data/observable").fromObjectRecursive;

var dialogs = require("tns-core-modules/ui/dialogs");
var Sqlite = require("nativescript-sqlite");

function ProfileViewModel(db) {
    var viewModel = new Observable();
       
    db.get("SELECT * FROM client").then(rows => {
            viewModel.set("name",rows[10]);
            viewModel.set("surname", rows[11]);

        }, error => {
            alert("SELECT ERROR", error);
        });

       

    return viewModel;
}

module.exports = ProfileViewModel;
