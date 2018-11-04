var frameModule = require("ui/frame");
var LunchViewModel= require("./lunch-view-model");

var lunchViewModel = new LunchViewModel();

function pageLoaded(args) {

    var page = args.object;

    page.bindingContext = lunchViewModel;
}
function saveChanges(args) {
    alert("Saved");
}
exports.saveChanges = saveChanges;
exports.pageLoaded = pageLoaded;