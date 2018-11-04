var observableModule = require("data/observable");

function MealsViewModel() {
  var viewModel = observableModule.fromObject({
    textFieldValue: "",

   
      
  });

  return viewModel;
}

module.exports = MealsViewModel;
