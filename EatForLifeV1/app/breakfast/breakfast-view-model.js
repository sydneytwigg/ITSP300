var observableModule = require("data/observable");
const Observable = require("tns-core-modules/data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
var applicationSettingsModule = require("application-settings");
const topmost = require("tns-core-modules/ui/frame").topmost;
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;

function BreakfastViewModel(db) {
    var viewModel = new Observable();

    viewModel.listPicker1 = new ObservableArray(15);
    viewModel.listPicker2 = new ObservableArray(15);
    viewModel.listPicker3 = new ObservableArray(15);
    viewModel.itemList = new ObservableArray(3);



    var listID = applicationSettingsModule.getString("EFL-LISTID");
    //db.all("SELECT count(Description) FROM item").then(rows => {


    db.all("SELECT Description FROM item ORDER BY Description").then(rows => {

        var counter = 0;
        rows.forEach((w) => {

            var string = w[0];
            viewModel.listPicker1.setItem(counter, string);
            viewModel.listPicker2.setItem(counter, string);
            viewModel.listPicker3.setItem(counter, string);

            //alert(string);

            counter = counter + 1;

        });

        // }, error =>{
        //   alert("ITEM SELECT ERROR"+error);
        //});
    }, error => {
        alert("ITEM COUNT ERROR" + error);
    });
    viewModel.set("selectedListPickerIndex", 0);
    viewModel.set("selectedListPickerIndex2", 0);
    viewModel.set("selectedListPickerIndex3", 0);



    viewModel.saveChanges = function () {

        var index1 = viewModel.get("selectedListPickerIndex");
        var index2 = viewModel.get("selectedListPickerIndex2");
        var index3 = viewModel.get("selectedListPickerIndex3");

        var pick1 = viewModel.listPicker1.getItem(index1);
        var pick2 = viewModel.listPicker2.getItem(index2);
        var pick3 = viewModel.listPicker3.getItem(index3);
        
        if (pick1 != pick2 && pick2 != pick3 && pick3 != pick1) {
            db.all("SELECT idItem from item WHERE Description = ? OR Description = ? OR Description = ?", [pick1, pick2, pick3]).then(rows => {
            
                var counter2 = 0;
                rows.forEach((x) => {
                            viewModel.itemList.setItem(counter2, x[0]);

                            counter2 = counter2 + 1;
                });

                var item1 = viewModel.itemList.getItem(0);
                var item2 = viewModel.itemList.getItem(1);
                var item3 = viewModel.itemList.getItem(2);


                db.execSQL("UPDATE list SET idItem1 = ?, idItem2 = ?, idItem3 = ? WHERE idList = ?", [item1, item2, item3, listID]).then(id => {

                    alert("Update Successful");
                    topmost().navigate({ moduleName: "./mealplan-dayview/mealplan-page" });

                }, error => {
                    alert("SAVE ERROR" + error);
                });

            }, error => {
                alert("SELECT ERROR" + error);
            });
        } else {
            alert("You may not consume multiple items of the same type in the same time period");
        }
}



    return viewModel;
}

module.exports = BreakfastViewModel;
