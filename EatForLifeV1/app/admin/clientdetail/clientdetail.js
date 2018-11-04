var frameModule = require("tns-core-modules/ui/frame");
var ClientdetailViewModel = require("./clientdetail-view-model");

var clientdetailViewModel = new ClientDetailViewModel();

function pageLoaded(args) {
  
  var page = args.object;

  page.bindingContext = clientDetailViewModel;
}

exports.pageLoaded = pageLoaded;
