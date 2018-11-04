var frameModule = require("ui/frame");
var MealsViewModel = require("./meals-view-model");

var mealsViewModel = new MealsViewModel();

function pageLoaded(args) {
  
  var page = args.object;

  page.bindingContext = mealsViewModel;
}

function onItemTap(args) { 
  page.frame.navigate({
    myBackBut: "Meals"
  });
}
function breakfast(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./breakfast/breakfast-page")
   
}
function amsnack(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./amsnack/amsnack-page")
  
}
function lunch(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./lunch/lunch-page")
   
}
function pmsnack(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./pmsnack/pmsnack-page")
  
}
function dinner(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./dinner/dinner-page")
  
}
exports.breakfast = breakfast;
exports.amsnack = amsnack;
exports.lunch = lunch;
exports.pmsnack =pmsnack;
exports.dinner = dinner;
exports.pageLoaded = pageLoaded; 