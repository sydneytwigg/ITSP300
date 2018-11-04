var frameModule = require("tns-core-modules/ui/frame");
var ClientsViewModel = require("./clients-view-model");

var clientsViewModel = new ClientsViewModel();

function pageLoaded(args) {  
  var page = args.object;
  page.bindingContext = clientsViewModel;
}

function onEdit(args) {
    //console.log("Edit item tapped.");
    //var btn = args.object;
    //btn.bindingContext.set("isEditing", true);
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./admin/addadmin/addadmin-page")
}
exports.onEdit = onEdit;
exports.pageLoaded = pageLoaded;
