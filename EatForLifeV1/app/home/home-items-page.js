var HomeViewModel = require("./home-items-view-model");
var Sqlite = require("nativescript-sqlite");
var applicationSettingsModule = require("application-settings");
const topmost = require("tns-core-modules/ui/frame").topmost;

function onNavigatingTo(args) {
    var page = args.object;

    var db_name = "eatforlife.sqlite";

  applicationSettingsModule.setString("EFL-login","");
  var login = applicationSettingsModule.getString("EFL-user");
if(login != null){
  if (!Sqlite.exists(db_name)) {
    Sqlite.copyDatabase(db_name);
  }
    new Sqlite(db_name).then(db => {
        page.bindingContext =  HomeViewModel(db);
    });
}else{
  applicationSettingsModule.setString("EFL-login","./home/home-items-page");
  topmost().navigate({ moduleName: "./login/login-page"});
}
}

function goBack() {
    alert("y");
}
exports.goBack = goBack;
exports.onNavigatingTo = onNavigatingTo;
