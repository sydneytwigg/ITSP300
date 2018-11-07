var Sqlite = require("nativescript-sqlite");
const Observable = require("tns-core-modules/data/observable").Observable;
var applicationSettingsModule = require("application-settings");

function MealplanViewModel(db) {
    var viewModel = new Observable();
       
    var mealPlan = applicationSettingsModule.getString("EFL-mealPlan");
    var setDay = applicationSettingsModule.getString("EFL-day");

    db.get("SELECT idMPDays FROM client_meal_plan WHERE idMealPlan = ?",[mealPlan]).then(rows => {
    var iDays = rows[0];

if(setDay == "Day1"){
    db.get("SELECT Day1 FROM meal_plan_days WHERE idMPDays = ?",[iDays]).then(columns => {
       var numDay1 = columns[0]
        applicationSettingsModule.setString("EFL-LISTID",numDay1);
        db.execSQL("delete from itemList").then(id => {
            db.execSQL("INSERT INTO itemList (idItem) VALUES ((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? ))",[numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1]).then(id => {

                db.all("SELECT Description, Grams FROM item INNER JOIN itemList ON itemList.idItem = item.idItem",[]).then(rows => {

        var number = 1;
            rows.forEach((w) => {
            var   name = "Item" + String(number);
            var   measure = "Measurement" +String(number);

            viewModel.set(name,w[0]);    viewModel.set(measure,w[1]);

            
            number = number +1;

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
            alert("SELECT DAY ERROR", error);
        });
}else if(setDay == "Day2"){
db.get("SELECT Day2 FROM meal_plan_days WHERE idMPDays = ?",[iDays]).then(columns => {
       var numDay1 = columns[0]
        db.execSQL("delete from itemList").then(id => {
            db.execSQL("INSERT INTO itemList (idItem) VALUES ((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? ))",[numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1]).then(id => {

                db.all("SELECT Description, Grams FROM item INNER JOIN itemList ON itemList.idItem = item.idItem",[]).then(rows => {

        var number = 1;
            rows.forEach((w) => {
            var   name = "Item" + String(number);
            var   measure = "Measurement" +String(number);

            viewModel.set(name,w[0]);    viewModel.set(measure,w[1]);

            
            number = number +1;

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
            alert("SELECT DAY ERROR", error);
        });
}else if(setDay == "Day3"){
db.get("SELECT Day3 FROM meal_plan_days WHERE idMPDays = ?",[iDays]).then(columns => {
       var numDay1 = columns[0]
        db.execSQL("delete from itemList").then(id => {
            db.execSQL("INSERT INTO itemList (idItem) VALUES ((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? ))",[numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1]).then(id => {

                db.all("SELECT Description, Grams FROM item INNER JOIN itemList ON itemList.idItem = item.idItem",[]).then(rows => {

        var number = 1;
            rows.forEach((w) => {
            var   name = "Item" + String(number);
            var   measure = "Measurement" +String(number);

            viewModel.set(name,w[0]);    viewModel.set(measure,w[1]);

            
            number = number +1;

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
            alert("SELECT DAY ERROR", error);
        });
}else if(setDay == "Day4"){
db.get("SELECT Day4 FROM meal_plan_days WHERE idMPDays = ?",[iDays]).then(columns => {
       var numDay1 = columns[0]
        db.execSQL("delete from itemList").then(id => {
            db.execSQL("INSERT INTO itemList (idItem) VALUES ((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? ))",[numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1]).then(id => {

                db.all("SELECT Description, Grams FROM item INNER JOIN itemList ON itemList.idItem = item.idItem",[]).then(rows => {

        var number = 1;
            rows.forEach((w) => {
            var   name = "Item" + String(number);
            var   measure = "Measurement" +String(number);

            viewModel.set(name,w[0]);    viewModel.set(measure,w[1]);

            
            number = number +1;

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
            alert("SELECT DAY ERROR", error);
        });
}else if(setDay == "Day5"){
db.get("SELECT Day5 FROM meal_plan_days WHERE idMPDays = ?",[iDays]).then(columns => {
       var numDay1 = columns[0]
        db.execSQL("delete from itemList").then(id => {
            db.execSQL("INSERT INTO itemList (idItem) VALUES ((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? ))",[numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1]).then(id => {

                db.all("SELECT Description, Grams FROM item INNER JOIN itemList ON itemList.idItem = item.idItem",[]).then(rows => {

        var number = 1;
            rows.forEach((w) => {
            var   name = "Item" + String(number);
            var   measure = "Measurement" +String(number);

            viewModel.set(name,w[0]);    viewModel.set(measure,w[1]);

            
            number = number +1;

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
            alert("SELECT DAY ERROR", error);
        });
}else if(setDay == "Day6"){
db.get("SELECT Day6 FROM meal_plan_days WHERE idMPDays = ?",[iDays]).then(columns => {
       var numDay1 = columns[0]
        db.execSQL("delete from itemList").then(id => {
            db.execSQL("INSERT INTO itemList (idItem) VALUES ((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? ))",[numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1]).then(id => {

                db.all("SELECT Description, Grams FROM item INNER JOIN itemList ON itemList.idItem = item.idItem",[]).then(rows => {

        var number = 1;
            rows.forEach((w) => {
            var   name = "Item" + String(number);
            var   measure = "Measurement" +String(number);

            viewModel.set(name,w[0]);    viewModel.set(measure,w[1]);

            
            number = number +1;

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
            alert("SELECT DAY ERROR", error);
        });
}else if(setDay == "Day7"){
db.get("SELECT Day7 FROM meal_plan_days WHERE idMPDays = ?",[iDays]).then(columns => {
       var numDay1 = columns[0]
        db.execSQL("delete from itemList").then(id => {
            db.execSQL("INSERT INTO itemList (idItem) VALUES ((SELECT idItem1 from list where idList = ? )), ((SELECT idItem2 from list where idList = ? )), ((SELECT idItem3 from list where idList = ? )), ((SELECT idItem4 from list where idList = ? )), ((SELECT idItem5 from list where idList = ? )), ((SELECT idItem6 from list where idList = ? )), ((SELECT idItem7 from list where idList = ? )), ((SELECT idItem8 from list where idList = ? )), ((SELECT idItem9 from list where idList = ? )), ((SELECT idItem10 from list where idList = ? )), ((SELECT idItem11 from list where idList = ? )), ((SELECT idItem12 from list where idList = ? )), ((SELECT idItem13 from list where idList = ? )), ((SELECT idItem14 from list where idList = ? )), ((SELECT idItem15 from list where idList = ? )), ((SELECT idItem16 from list where idList = ? )), ((SELECT idItem17 from list where idList = ? )), ((SELECT idItem18 from list where idList = ? ))",[numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1, numDay1]).then(id => {

                db.all("SELECT Description, Grams FROM item INNER JOIN itemList ON itemList.idItem = item.idItem",[]).then(rows => {

        var number = 1;
            rows.forEach((w) => {
            var   name = "Item" + String(number);
            var   measure = "Measurement" +String(number);

            viewModel.set(name,w[0]);    viewModel.set(measure,w[1]);

            
            number = number +1;

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
            alert("SELECT DAY ERROR", error);
        });
}

        }, error => {
            alert("SELECT PLAN ERROR", error);
        });


    return viewModel;
}

module.exports = MealplanViewModel;
