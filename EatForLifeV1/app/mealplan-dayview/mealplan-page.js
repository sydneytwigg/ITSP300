const MealplanViewModel = require("./mealplan-view-model");
var Sqlite = require("nativescript-sqlite");

function onNavigatingTo(args) {
    var page = args.object;
    var db_name = "eatforlife.sqlite";

  if (!Sqlite.exists(db_name)) {
    Sqlite.copyDatabase(db_name);
  }
    new Sqlite(db_name).then(db => {
        page.bindingContext = MealplanViewModel(db);
    });
}
function change(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./changeDiet/changeDiet-page");
   
}
function changeItem(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./meals/meals-page");
}
exports.changeItem = changeItem;
exports.change = change;
exports.onNavigatingTo = onNavigatingTo;
