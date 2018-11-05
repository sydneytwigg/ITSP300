var observableModule = require("tns-core-modules/data/observable");

function ShoppinglistViewModel() {
  var viewModel = observableModule.fromObject({
    countries: [
      { name: "Apple",measurment:"10g"},
        { name: "Pear", measurment: "10g"},
        { name: "Orange", measurment: "10g"},
        { name: "Tamato", measurment: "10g"},
        { name: "Cheese", measurment: "10g" },
        { name: "Fishe", measurment: "10g"},
        { name: "Patato", measurment: "10g"},
        { name: "Oats", measurment: "10g"},
        { name: "Chicken", measurment: "10g"},
        { name: "Ham", measurment: "10g" },
        { name: "Bananna", measurment: "10g" },
        { name: "Cofee", measurment: "10g"},
    ],

   


  });

  return viewModel;
}

module.exports = ShoppinglistViewModel;
