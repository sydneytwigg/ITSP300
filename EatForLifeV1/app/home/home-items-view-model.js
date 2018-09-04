var observableModule = require("data/observable");

function HomeViewModel() {
  var viewModel = observableModule.fromObject({

    categoricalSource: [
         { Date: "12/03/2018", Weight: 96 },
         { Date: "18/05/2018", Weight: 90 },
         { Date: "20/06/2018", Weight: 89 },
         { Date: "01/08/2018", Weight: 87 },
         { Date: "28/09/2018", Weight: 86 }
       ],

       progressValue: 80,


  });

  return viewModel;
}

module.exports = HomeViewModel;
