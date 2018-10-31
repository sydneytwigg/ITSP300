var ShoppingListViewModel = require("./ShoppingList-view-model");
var frameModule = require("tns-core-modules/ui/frame");
const tabViewModule = require("tns-core-modules/ui/tab-view");

var shoppingListViewModel = new ShoppingListViewModel();

exports.pageLoaded = function (args) {
  const page = args.object;
  page.bindingContext = homeViewModel;
}

exports.onItemTap = function (args) {
  const view = args.view;
  const context = view.bindingContext;

  console.log("You tapped: ", context.text);
}
