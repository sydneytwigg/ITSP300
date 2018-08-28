
var frameModule = require("ui/frame");
var HomeViewModel = require("./home-view-model");

var homeViewModel = new HomeViewModel();

function pageLoaded(args) {

    var page = args.object;

    page.bindingContext = homeViewModel;
}

exports.pageLoaded = pageLoaded;
