var RegisterViewModel = require("./register-view-model");
var Sqlite = require("nativescript-sqlite");


function pageLoaded(args) {

    var page = args.object;

    var db_name = "eatforlife.sqlite";

  if (!Sqlite.exists(db_name)) {
    Sqlite.copyDatabase(db_name);
  }
    new Sqlite(db_name).then(db => {
        page.bindingContext = RegisterViewModel(db);
    });
}


exports.pageLoaded = pageLoaded;
