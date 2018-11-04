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


function onEdit(args) {
    //console.log("Edit item tapped.");
    //var btn = args.object;
    //btn.bindingContext.set("isEditing", true);
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./meals/meals-page");
}
exports.onEdit = onEdit;

exports.change = change;
exports.onNavigatingTo = onNavigatingTo;
