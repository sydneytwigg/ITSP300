var frameModule = require("tns-core-modules/ui/frame");
var ShoppingListViewModel = require("./ShoppingList-view-model");


function onNavigatingTo(args) {
    var  page = args.object;
	
    page.bindingContext = new ShoppingListViewModel();
}
exports.onItemTap = function (args) {
  const view = args.view;
  const context = view.bindingContext;

 alert(context.Name+" " + context.Amount);
}
exports.onNavigatingTo = onNavigatingTo;
