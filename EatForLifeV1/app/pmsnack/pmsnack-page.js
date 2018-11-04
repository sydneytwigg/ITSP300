var frameModule = require("ui/frame");
var PmsnackViewModel = require("./pmsnack-view-model");

var pmsnackViewModel = new PmsnackViewModel();

function pageLoaded(args) {

    var page = args.object;

    page.bindingContext =pmsnackViewModel;
}
function saveChanges(args) {
    alert("Saved");
}
exports.saveChanges = saveChanges;
exports.pageLoaded = pageLoaded;