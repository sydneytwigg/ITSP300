var observableModule = require("tns-core-modules/data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;


function ShoppingListViewModel() {
  
  var viewModel = observableModule.fromObject({


    //data: new ObservableArray([
    //  { pic: "res://icon", Name: "ACE Instant High Fibre", Amount: " 2.5 Kg" },
    //  { pic: "res://icon", Name: "All Bran Flakes", Amount: "1 Kg" },
    //  { pic: "res://icon", Name: "All Bran Instant Porridge", Amount: "1 Kg" },
    //  { pic: "res://icon", Name: "Alphen Original Swiss Muesli", Amount: "1.5 Kg" },
    //  { pic: "res://icon", Name: "Amasi", Amount: "200 g" },
    //  { pic: "res://icon", Name: "Apple", Amount: "800g" },
    //  { pic: "res://icon", Name: "Apple rings - dried", Amount: "2 pieces" },
    //  { pic: "res://icon", Name: "Apple, Green, Raw, Unpeeled", Amount: "14" },
    //  { pic: "res://icon", Name: "Apricot halves - dried", Amount: "7" },
    //  { pic: "res://icon", Name: "Apricot halves - tinned", Amount: "3.5" },


    //])
  });

  return viewModel;
}

module.exports = ShoppingListViewModel;
