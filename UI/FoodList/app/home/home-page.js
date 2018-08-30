const frameModule = require("ui/frame");
const HomeViewModel = require("./home-view-model");

const homeViewModel = new HomeViewModel();

exports.pageLoaded = function (args) {
  const page = args.object;
  page.bindingContext = homeViewModel;
}

exports.onItemTap = function (args) {
  const view = args.view;
  const context = view.bindingContext;

  console.log("You tapped: ", context.text);
}
