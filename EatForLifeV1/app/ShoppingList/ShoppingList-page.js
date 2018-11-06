var frameModule = require("tns-core-modules/ui/frame");
var ShoppinglistViewModel = require("./shoppinglist-view-model");

var shoppinglistViewModel = new ShoppinglistViewModel();

function pageLoaded(args) {

  var page = args.object;

    page.bindingContext = shoppinglistViewModel;
}
function onEdit(args) {
    //console.log("Edit item tapped.");
    //var btn = args.object;
    //btn.bindingContext.set("isEditing", true);
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./shareshoppinglist/shareshoppinglist-page");
}
exports.onEdit = onEdit;
function d() {
    alert("downloaded");
}
exports.d = d;
exports.pageLoaded = pageLoaded;
