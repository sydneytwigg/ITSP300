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

function btnMail(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./mail-me/mail-me-page")
}
function btnPrint(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./print/print-page")
}


exports.pageLoaded = pageLoaded;
exports.btnViewMeal = btnViewMeal;
exports.btnMail = btnMail;
exports.btnPrint = btnPrint;
