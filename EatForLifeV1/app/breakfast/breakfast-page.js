var frameModule = require("ui/frame");
var BreakfastViewModel = require("./breakfast-view-model");

var breakfastViewModel = new BreakfastViewModel();

function pageLoaded(args) {

    var page = args.object;

    page.bindingContext = breakfastViewModel;
}
function saveChanges(args) {
    alert("Saved");
}
exports.saveChanges = saveChanges;
exports.pageLoaded = pageLoaded;