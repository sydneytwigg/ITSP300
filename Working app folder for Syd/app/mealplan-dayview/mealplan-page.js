const MealplanViewModel = require("./mealplan-view-model");


function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new MealplanViewModel();
}
function change(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./changeDiet/changeDiet-page");
   
}
function defaultDiet(args) {
    alert("Done");
}
exports.defaultDiet = defaultDiet;
exports.change = change;
exports.onNavigatingTo = onNavigatingTo;
