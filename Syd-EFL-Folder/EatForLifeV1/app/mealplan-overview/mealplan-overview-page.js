const MealplanOverviewViewModel = require("./mealplan-overview-view-model");

var frameModule = require("ui/frame");

var mealplanViewModel = new MealplanOverviewViewModel();

function pageLoaded(args) {

  var page = args.object;


  page.bindingContext = mealplanViewModel;
}

function btnViewMeal(args){
  const button = args.object;
  const page = button.page;
  page.frame.navigate("./mealplan-dayview/mealplan-page")
}

function btnMail(args) {
    //Import 
    var email = require("nativescript-email");

    //check availability
    email.available().then(function (avail) {
        console.log("Email available? " + avail);
    })

    //Compose - create file object
    var fs = require("file-system");
    var appPath = fs.knownFolders.currentApp().path;
    var logoPath = "C:/Users/andre/Desktop/Extract/app/App_Resources/Android\dowload.jpg";
    const page = args.object.page;
    const vm = page.bindingContext;
    email.compose({
        subject: "EatForLife Diet plan",
        body: "This is your personal EatForLife diet plan. ",
        to: ['andreacloetekaap@outlook.com'],

    }).then(
        function () {
            console.log("Email composer closed");
        }, function (err) {
            console.log("Error: " + err);
        });

   
}
function btnPrint(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("./print/print-page")
}


exports.pageLoaded = pageLoaded;
exports.btnViewMeal = btnViewMeal;
exports.btnMail = btnMail;
exports.btnPrint = btnPrint;
