var observableModule = require("tns-core-modules/data/observable");
const ObservableArray = require("data/observable-array").ObservableArray;
const switchModule = require("tns-core-modules/ui/switch");

function ShoppingListViewModel() {
  var viewModel = observableModule.fromObject({
    onButtonTap: function () {
      console.log("Button was pressed");
    },

    data: new ObservableArray([
      { text: "ACE Instant High Fibre, 2.5 Kg" },
      { text: "All Bran Flakes, 1 Kg" },
      { text: "All Bran Instant Porridge, 1 Kg" },
      { text: "Alphen Original Swiss Muesli, 1.5 Kg" },
      { text: "Amasi, 200 g" },
      { text: "Apple, 800g" },
      { text: "Apple rings - dried, 12 pieces" },
      { text: "Apple, Green, Raw, Unpeeled, 14" },
      { text: "Apricot halves - dried, 7" },
      { text: "Apricot halves - tinned, 3.5" },
    ])
    });

    return viewModel;
}

module.exports = ShoppingListViewModel;
