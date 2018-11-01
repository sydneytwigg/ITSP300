var HomeViewModel = require("./home-items-view-model");
var Sqlite = require("nativescript-sqlite");

function onNavigatingTo(args) {
    var page = args.object;
    
    var db_name = "eatforlife.sqlite";

  if (!Sqlite.exists(db_name)) {
    Sqlite.copyDatabase(db_name);
  }
    new Sqlite(db_name).then(db => {
        page.bindingContext = HomeViewModel(db);
    });
}

function onItemTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

    page.frame.navigate({
        moduleName: "home/home-item-detail/home-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
