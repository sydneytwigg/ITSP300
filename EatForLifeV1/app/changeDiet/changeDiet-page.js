var frameModule = require("tns-core-modules/ui/frame");
var ChangeDietViewModel = require("./changeDiet-view-model");

var changeDietViewModel = new ChangeDietViewModel();

function pageLoaded(args) {
 
  var page = args.object;

  page.bindingContext = changeDietViewModel;
}

function SaveChanges(args) {
    
    alert("Saved");
}
exports.SaveChanges = SaveChanges;
exports.pageLoaded = pageLoaded;
