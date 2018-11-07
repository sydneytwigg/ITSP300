var frameModule = require("tns-core-modules/ui/frame");
var AddadminViewModel = require("./addadmin-view-model");

var addadminViewModel = new AddadminViewModel();

function pageLoaded(args) {
 
  var page = args.object;

  page.bindingContext = addadminViewModel;
}

exports.pageLoaded = pageLoaded;
