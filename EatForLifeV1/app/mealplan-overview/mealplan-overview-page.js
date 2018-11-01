const MealplanOverviewViewModel = require("./mealplan-overview-view-model");

var frameModule = require("ui/frame");

var mealplanViewModel = new MealplanOverviewViewModel();

function pageLoaded(args) {

  var page = args.object;


  page.bindingContext = mealplanViewModel;
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