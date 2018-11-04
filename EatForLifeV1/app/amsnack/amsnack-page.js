var frameModule = require("ui/frame");
var AmsnackViewModel = require("./amsnack-view-model");

var AmsnackViewModel = new AmsnackViewModel();

function pageLoaded(args) {

    var page = args.object;

    page.bindingContext = AmsnackViewModel;
}

function saveChanges(args) {
    alert("Saved");
}
exports.saveChanges = saveChanges;
exports.pageLoaded = pageLoaded;