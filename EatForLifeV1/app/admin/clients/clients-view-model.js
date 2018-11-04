var observableModule = require("tns-core-modules/data/observable");

function ClientsViewModel() {
  var viewModel = observableModule.fromObject({
    countries: [
      { id: "C001", name: "Piet", surname: "Grobler" },
      { id: "C002", name: "Gerrie", surname: "Forie" },
      { id: "C003", name: "Koos", surname: "Hall" },
      { id: "C004", name: "Jan", surname: "Smith" },
      { id: "C005", name: "Matt", surname: "Williams" },
      { id: "C006", name: "Chris", surname: "Miler" },
      { id: "C007", name: "Sannie", surname: "Watts" },
      { id: "C008", name: "Dannie", surname: "Bell" },
      { id: "C009", name: "Fanie", surname: "Simpson" },
      { id: "C010", name: "Jeandre", surname: "Gordon" },
    ],

    onItemTap: function (args) {
        const button = args.object;
        const page = button.page;
        page.frame.navigate("./admin/clientdetail/clientdetail-page")
      console.log('Item with index: ' + args.index + ' tapped');
    },


  });

  return viewModel;
}

module.exports = ClientsViewModel;
