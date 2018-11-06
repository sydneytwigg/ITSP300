var frameModule = require("tns-core-modules/ui/frame");
var ShoppinglistViewModel = require("./shoppinglist-view-model");
var Sqlite = require("nativescript-sqlite");

function pageLoaded(args) {
 var page = args.object;
 var db_name = "eatforlife.sqlite";

  if (!Sqlite.exists(db_name)) {
    Sqlite.copyDatabase(db_name);
  }
    new Sqlite(db_name).then(db => {
        page.bindingContext = ShoppinglistViewModel(db);
    });
}

function onEdit(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./shareshoppinglist/shareshoppinglist-page");
}
exports.onEdit = onEdit;

exports.pageLoaded = pageLoaded;
