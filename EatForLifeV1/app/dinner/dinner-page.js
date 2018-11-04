var frameModule = require("ui/frame");
var DinnerViewModel = require("./dinner-view-model");

var dinnerViewModel = new DinnerViewModel();

function pageLoaded(args) {

    var page = args.object;

    page.bindingContext = dinnerViewModel;
}
function saveChanges(args) {
    alert("Saved");
}
exports.saveChanges = saveChanges;
exports.pageLoaded = pageLoaded;