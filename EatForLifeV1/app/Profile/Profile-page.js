var frameModule = require("ui/frame");
var ProfileViewModel = require("./Profile-view-model");



var Sqlite = require("nativescript-sqlite");

function pageLoaded(args) {
  var page = args.object;
  var db_name = "eatforlife.sqlite";

  if (!Sqlite.exists(db_name)) {
    Sqlite.copyDatabase(db_name);
  }
    new Sqlite(db_name).then(db => {
        page.bindingContext = ProfileViewModel(db);
    });
	}

function bmiButton(args){
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./demo-bmi/demo-bmi-page");
}
function onEdit(args) {
   
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./editprofile/editprofile-page");
}
exports.onEdit = onEdit;
exports.pageLoaded = pageLoaded;
exports.bmiButton = bmiButton;
