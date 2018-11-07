var observableModule = require("data/observable");
const Observable = require("tns-core-modules/data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
var applicationSettingsModule = require("application-settings");
const topmost = require("tns-core-modules/ui/frame").topmost;

function BreakfastViewModel(db) {
    var viewModel = new Observable();

    viewModel.listPicker1 = [];
    viewModel.listPicker2 = [];
    viewModel.listPicker3 = [];
    viewModel.listPicker4 = [];


    var listID = applicationSettingsModule.getString("EFL-LISTID");

    db.all("SELECT Description FROM item").then(rows => {
        rows.forEach((w) => {
            viewModel.listPicker1.push(w[0]);
            viewModel.listPicker2.push(w[0]);
            viewModel.listPicker3.push(w[0]);

            });

    }, error =>{
        alert("ITEM SELECT ERROR"+error);
    });


    viewModel.set("selectedListPickerIndex",0);
    viewModel.set("selectedListPickerIndex2",0);
    viewModel.set("selectedListPickerIndex3",0);
    viewModel.set("selectedListPickerIndex4",0);



    viewModel.saveChanges = function(){

    var pick1 = viewModel.get("selectedListPickerIndex");
    var pick2 = viewModel.get("selectedListPickerIndex2");
    var pick3 = viewModel.get("selectedListPickerIndex3");

    db.all("SELECT idItem from item WHERE Description = ? OR Description = ? OR Description = ?",[pick1,pick2,pick3]).then(rows => {




    /*    var number = 1;
            rows.forEach((w) => {
             var item = w[1];


            });
*/

        db.execSQL("UPDATE list SET idItem1 = ?, idItem2 = ?, idItem3 = ? WHERE idList = ?",[item1,item2,item3,itemID]).then(id => {

            alert("Update Successful");
            topmost().navigate({ moduleName: "./mealplan-dayview/mealplan-page"});
        
        },error => {
        alert("SELECT ERROR"+error);
    });

    },error => {
        alert("SAVE ERROR"+error);
    });
    }




    return viewModel;
}

module.exports = BreakfastViewModel;
