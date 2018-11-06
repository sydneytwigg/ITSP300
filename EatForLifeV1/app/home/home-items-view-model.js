var frameModule = require("ui/frame");
var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");

function HomeViewModel(db) {
  var viewModel = new Observable();


    viewModel.categoricalSource = [
      { Date: "12/03/2018", Weight: 96 },
      { Date: "18/05/2018", Weight: 90 },
      { Date: "20/06/2018", Weight: 89 },
      { Date: "01/08/2018", Weight: 87 },
      { Date: "28/09/2018", Weight: 86 }
    ];

    viewModel.progressValue = 30;

  db.get("SELECT * FROM client").then(rows => {
            var welcome = "Welcome, "+ rows[10];
            viewModel.set("disName", welcome);
            viewModel.set("name",rows[10]);
            viewModel.set("currWeight", rows[11]);
            viewModel.set("lostWeight",rows[12]);
            viewModel.set("bmi",rows[13]);
        }, error => {
            alert("SELECT ERROR", error);
        });

  return viewModel;
}

module.exports = HomeViewModel;
