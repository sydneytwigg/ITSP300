var frameModule = require("tns-core-modules/ui/frame");
var LoginViewModel = require("./login-page-view-model");
var Sqlite = require("nativescript-sqlite");

function pageLoaded(args) {

    var page = args.object;
    var db_name = "eatforlife.sqlite";

  if (!Sqlite.exists(db_name)) {
    Sqlite.copyDatabase(db_name);
  }
    new Sqlite(db_name).then(db => {
        page.bindingContext = LoginViewModel(db);
    });
}

function Register(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./register/register-page");
}

function forgotPassword(args) {
    //alert("yay");
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./resetpassword/resetpassword-page");
}
function admin(args) {
    //alert("yay");
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./admin/clients/clients-page");
}

exports.admin = admin;
exports.Register = Register;
exports.forgotPassword = forgotPassword;
exports.pageLoaded = pageLoaded;
