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

function btnViewMealD1(args){
  applicationSettingsModule.setString("EFL-day","Day1");
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./mealplan-dayview/mealplan-page")
}
function btnViewMealD2(args){
  applicationSettingsModule.setString("EFL-day","Day2");
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./mealplan-dayview/mealplan-page")
}
function btnViewMealD3(args){
  applicationSettingsModule.setString("EFL-day","Day3");
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./mealplan-dayview/mealplan-page")
}
function btnViewMealD4(args){
  applicationSettingsModule.setString("EFL-day","Day4");
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./mealplan-dayview/mealplan-page")
}
function btnViewMealD5(args){
  applicationSettingsModule.setString("EFL-day","Day5");
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./mealplan-dayview/mealplan-page")
}
function btnViewMealD6(args){
  applicationSettingsModule.setString("EFL-day","Day6");
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./mealplan-dayview/mealplan-page")
}
function btnViewMealD7(args){
  applicationSettingsModule.setString("EFL-day","Day7");
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
exports.btnViewMealD1 = btnViewMealD1;
exports.btnViewMealD2 = btnViewMealD2;
exports.btnViewMealD3 = btnViewMealD3;
exports.btnViewMealD4 = btnViewMealD4;
exports.btnViewMealD5 = btnViewMealD5;
exports.btnViewMealD6 = btnViewMealD6;
exports.btnViewMealD7 = btnViewMealD7;
exports.btnPrint = btnPrint;
exports.btnLogin = btnLogin;
exports.send = send;
exports.btnShop = btnShop;
