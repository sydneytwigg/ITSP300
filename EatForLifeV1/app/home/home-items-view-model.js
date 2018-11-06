var frameModule = require("ui/frame");
var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
var applicationSettingsModule = require("application-settings");

function HomeViewModel(db) {
  var viewModel = new Observable();


    viewModel.categoricalSource = [];

    viewModel.categoricalSourceBMI = [];


    var email = applicationSettingsModule.getString("EFL-user");

  db.get("SELECT distinct client.Name, client.Surname, client.Current_Weight, client.Target_Weight, weight_log.BMI from client INNER JOIN weight_log ON weight_log.idClient = client.idClient WHERE client.Email = ? ",[email]).then(rows => {
            var welcome = "Welcome, " + rows[0];
            viewModel.set("disName", welcome);
            viewModel.set("currWeight", rows[1]);
           
           var value = (parseFloat(rows[4])/parseFloat(rows[3]))*100;
           var value2 = Math.floor(value)
           viewModel.set("progressValue",value2);
           var value3 = parseFloat(rows[4]);
           var value4 = Math.floor(value3);
            viewModel.set("bmi", String(value4));
        }, error => {
            alert("SELECT ERROR", error);
        });

  var clientID = applicationSettingsModule.getString("EFL-ID");
db.all("SELECT Date, Weight FROM weight_log WHERE idClient = ? GROUP BY Date LIMIT 10",[clientID]).then(rows => {

      rows.forEach((w) => {
        var value5 = parseFloat(w[1]);
        var value6 = Math.floor(value5);
        var value7 = w[0];
            viewModel.categoricalSource.push({ 
                  Date: value7, 
                 Weight: value6
                });

            });
        }, error => {
              alert("SELECT ERROR", error);
         });


db.all("SELECT Date, BMI FROM weight_log WHERE idClient = ? GROUP BY Date LIMIT 10",[clientID]).then(rows => {

      rows.forEach((w) => {
        var value5 = parseFloat(w[1]);
        var value6 = Math.floor(value5);
        var value7 = w[0];
            viewModel.categoricalSourceBMI.push({ 
                  Date: value7, 
                 Weight: value6
                });

            });
        }, error => {
              alert("SELECT ERROR", error);
         });

  return viewModel;
}

module.exports = HomeViewModel;
