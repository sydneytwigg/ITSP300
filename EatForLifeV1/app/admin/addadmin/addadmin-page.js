var frameModule = require("tns-core-modules/ui/frame");
var AddadminViewModel = require("./addadmin-view-model");

var addadminViewModel = new AddadminViewModel();

function pageLoaded(args) {
 
  var page = args.object;

  page.bindingContext = addadminViewModel;
}
function onAdd(){
alert("Admin added");
}
exports.pageLoaded = pageLoaded;
exports.onAdd=onAdd;
