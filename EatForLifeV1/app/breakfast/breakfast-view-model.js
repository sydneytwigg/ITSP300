var observableModule = require("data/observable");

function BreakfastViewModel() {
    var viewModel = observableModule.fromObject({
        listPicker1: ["Apple", "Pear", "Bananna", "Nuts", "Orange"
        ],
        selectedListPickerIndex: 0,

        listPicker2: ["Apple", "Pear", "Bananna", "Nuts", "Orange"
        ],
        selectedListPickerIndex2: 0,

        listPicker3: ["Apple", "Pear", "Bananna", "Nuts", "Orange"],
        selectedListPickerIndex3: 0,

        listPicker4: ["Apple", "Pear", "Bananna", "Nuts", "Orange"],
        selectedListPickerIndex4: 0,

    });


    return viewModel;
}

module.exports = BreakfastViewModel;
