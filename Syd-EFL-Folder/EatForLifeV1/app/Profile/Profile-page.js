var frameModule = require("ui/frame");
var ProfileViewModel = require("./Profile-view-model");

var profileViewModel = new ProfileViewModel();

function pageLoaded(args) {

  var page = args.object;

  page.bindingContext = profileViewModel;
}

function bmiButton(args){
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./demo-bmi/demo-bmi-page");
}
exports.pageLoaded = pageLoaded;
exports.bmiButton = bmiButton;
