const observableModule = require("data/observable");

function DemoBmiViewModel() {
  var viewModel = observableModule.fromObject({
    categoricalSource: [
      { Date: "12/03/2018", Amount: 37 },
      { Date: "18/05/2018", Amount: 21 },
      { Date: "20/06/2018", Amount: 24 },
      { Date: "01/08/2018", Amount: 11 },
      { Date: "28/09/2018", Amount: 18 }
    ],


  });

  return viewModel;
}

module.exports = DemoBmiViewModel;
