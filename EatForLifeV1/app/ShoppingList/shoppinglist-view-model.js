var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
var applicationSettingsModule = require("application-settings");

function ShoppinglistViewModel(db) {
   var viewModel = new Observable();

  viewModel.items = [];

    var mealPlan = applicationSettingsModule.getString("EFL-mealPlan");

    db.get("SELECT idMPDays FROM client_meal_plan WHERE idMealPlan = ?",[mealPlan]).then(rows => {
            
            db.get("SELECT * FROM meal_plan_days WHERE idMPDays = ?",[rows[0]]).then(rows => {

    var numDay1 = rows[1];
    var numDay2 = rows[2];
    var numDay3 = rows[3];
    var numDay4 = rows[4];
    var numDay5 = rows[5];
    var numDay6 = rows[6];
    var numDay7 = rows[7];

db.execSQL("delete from itemList").then(id => {
    db.execSQL("INSERT INTO itemList (idItem) VALUES ((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? )),((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? )),((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? )),((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? )),((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? )),((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? )), ((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? ))",[numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay2, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay3, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay4, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay5, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay6, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7, numDay7]).then(id => {

        db.all("SELECT Description, SUM(Grams) FROM item INNER JOIN itemList ON itemList.idItem = item.idItem GROUP BY Description",[]).then(rows => {


            rows.forEach((w) => {
            viewModel.items.push({ 
                  name: w[0], 
                 measurment: w[1]
                });

            });

            }, error => {
            alert("BIG SELECT ERROR "+ error);
        });
          }, error => {
            alert("BIG EXEC4 ERROR "+ error);
        });


        }, error => {
            alert("delete EXEC2 ERROR "+ error);
        });
      }, error => {
            alert("DAY SELECT ERROR"+ error);
        });


        }, error => {
            alert("CLIENT MEAL SELECT ERROR" + error);
        });

   return viewModel;
}
module.exports = ShoppinglistViewModel;
 
