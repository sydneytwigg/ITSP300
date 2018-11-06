const MealplanOverviewViewModel = require("./mealplan-overview-view-model");
var applicationSettingsModule = require("application-settings");
const topmost = require("tns-core-modules/ui/frame").topmost;

var frameModule = require("ui/frame");

var mealplanViewModel = new MealplanOverviewViewModel();

function pageLoaded(args) {

  var page = args.object;
  applicationSettingsModule.setString("EFL-login","");
  var login = applicationSettingsModule.getString("EFL-user");
if(login != null){
  page.bindingContext = mealplanViewModel;
}else{
  applicationSettingsModule.setString("EFL-login","./mealplan-dayview/mealplan-page");
  topmost().navigate({ moduleName: "./login/login-page"});
}
}

function btnViewMeal(args){
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./mealplan-dayview/mealplan-page")
}

function btnPrint(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./print/print-page")
}

function btnLogin(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./login/login-page")
}
function btnShop(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./ShoppingList/ShoppingList-page")
}

function send(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./send/send-page")

}


exports.pageLoaded = pageLoaded;
exports.btnViewMeal = btnViewMeal;
exports.btnPrint = btnPrint;
exports.btnLogin = btnLogin;
exports.send = send;
exports.btnShop = btnShop;
