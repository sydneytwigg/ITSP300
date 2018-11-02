const observableModule = require("data/observable");

function MealplanViewModel() {
    const viewModel = observableModule.fromObject({});

    return viewModel;
}

module.exports = MealplanViewModel;
