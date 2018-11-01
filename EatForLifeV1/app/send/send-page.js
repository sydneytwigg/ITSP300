var frameModule = require("tns-core-modules/ui/frame");
var sendViewModel = require("./send-view-model");

var sendViewModel = new sendViewModel();

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = sendViewModel;
}

function send(args) {
    var emailaddress = sendViewModel.get("password");
    const button = args.object;
    const page = button.page;
    
    //Import 
    var email = require("nativescript-email");

    //check availability
    email.available().then(function (avail) {
        console.log("Email available? " + avail);
    })

    //Compose - create file object

    var fs = require("file-system");
    var appPath = fs.knownFolders.currentApp().path;
    // var logoPath = "C:/Users/andre/Desktop/Extract/app/App_Resources/Android\dowload.jpg";

    email.compose({
        subject: "EatForLife Diet plan",
        body: "This is your personal EatForLife diet plan. ",
        to: [emailaddress],

    }).then(
        function () {
            console.log("Email composer closed");

        }, function (err) {
            console.log("Error: " + err);
        });
    console.log("email: " + emailaddress);

}
exports.send= send;
exports.pageLoaded = pageLoaded;
