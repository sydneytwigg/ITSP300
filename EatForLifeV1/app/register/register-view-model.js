var observableModule = require("tns-core-modules/data/observable");
const fromObject = require("tns-core-modules/data/observable").fromObject;

function RegisterViewModel() {
  var viewModel = observableModule.fromObject({
  });

  return viewModel;
}

module.exports = RegisterViewModel;

