var frameModule = require("ui/frame");
var LunchViewModel= require("./lunch-view-model");
var Sqlite = require("nativescript-sqlite");

function pageLoaded(args) {

    var page = args.object;

    var db_name = "eatforlife.sqlite";

    if (!Sqlite.exists(db_name)) {
        Sqlite.copyDatabase(db_name);
    }
    new Sqlite(db_name).then(db => {
        page.bindingContext = LunchViewModel(db);
    });
}

exports.pageLoaded = pageLoaded;
