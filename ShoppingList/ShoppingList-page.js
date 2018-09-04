const ShoppingListViewModel = require("./ShoppingList-view-model");

var shoppingListViewModel = new ShoppingListViewModel();
var frameModule = require("ui/frame");

function pageLoaded(args){
  var page = args.object;
  page.bindingContext = shoppingListViewModel;
}


exports.pageLoaded = pageLoaded;
