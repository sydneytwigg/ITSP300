const observableModule = require("data/observable");

function PrintViewModel() {
    const viewModel = observableModule.fromObject({});

    return viewModel;
}

module.exports = PrintViewModel;