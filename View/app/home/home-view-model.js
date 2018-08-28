var observableModule = require("data/observable");

function HomeViewModel() {
  var viewModel = observableModule.fromObject({
    textFieldValue: "",

    onButtonTap: function () {
      console.log("Button was pressed");

      /*
      Add in functionality to import user profile picture
      */
    },

      
  });

  return viewModel;
}

module.exports = HomeViewModel;
