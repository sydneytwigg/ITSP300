var frameModule = require("ui/frame");
var ProfileViewModel = require("./Profile-view-model");



var Sqlite = require("nativescript-sqlite");

function pageLoaded(args) {

  var page = args.object;
  var db_name = "eatforlife.db";

	new Sqlite(db_name).then(db => {
		page.bindingContext = ProfileViewModel(db);
	}, error => {
		alert("DATABASE ERROR", error);
	});

}

function bmiButton(args){
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./demo-bmi/demo-bmi-page");
}
exports.pageLoaded = pageLoaded;
exports.bmiButton = bmiButton;
