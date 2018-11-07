var frameModule = require("tns-core-modules/ui/frame");
var ShoppinglistViewModel = require("./shoppinglist-view-model");
var Sqlite = require("nativescript-sqlite");
var applicationSettingsModule = require("application-settings");
const topmost = require("tns-core-modules/ui/frame").topmost;

function pageLoaded(args) {
 var page = args.object;
 var db_name = "eatforlife.sqlite";
  applicationSettingsModule.setString("EFL-login","");
  var login = applicationSettingsModule.getString("EFL-user");
if(login != null){
  if (!Sqlite.exists(db_name)) {
    Sqlite.copyDatabase(db_name);
  }
    new Sqlite(db_name).then(db => {
        page.bindingContext =  ShoppinglistViewModel(db);
    });
}else{
  applicationSettingsModule.setString("EFL-login","./ShoppingList/ShoppingList-page");
  topmost().navigate({ moduleName: "./login/login-page"});
}
}

function onEdit(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./shareshoppinglist/shareshoppinglist-page");
}

function btnPrint(args) {
   // const button = args.object;
    //const page = button.page;
   // page.frame.navigate("./print/print-page")
  alert("downloaded");
}
exports.onEdit = onEdit;
exports.btnPrint = btnPrint;
exports.pageLoaded = pageLoaded;
