const observableModule = require("data/observable");
const ObservableArray = require("data/observable-array").ObservableArray;

function ShoppingListViewModel() {
  const viewModel = observableModule.fromObject({
      data: new ObservableArray([
        { text: "ACE Instant High Fibre", src:"res://icon" },
        { text: "All Bran Flakes", src: "res://icon"  },
        { text: "All Bran Instant Porridge", src: "res://icon"  },
        { text: "Alphen Original Swiss Muesli", src: "res://icon" },
        { text: "Amasi", src: "res://icon" },
        { text: "Apple", src: "res://icon" },
        { text: "Apple rings - dried", src: "res://icon" },
        { text: "Apple, Green, Raw, Unpeeled", src: "res://icon" },
        { text: "Apricot halves - dried", src: "res://icon" },
        { text: "Apricot halves - tinned", src: "res://icon" },


      ])
    });

    return viewModel;
}

module.exports = ShoppingListViewModel;
