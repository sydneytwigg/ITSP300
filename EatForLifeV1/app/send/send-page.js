var frameModule = require("tns-core-modules/ui/frame");
var sendViewModel = require("./send-view-model");

var sendViewModel = new sendViewModel();

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = sendViewModel;
}

function send(args) {
    var validator = require("email-validator");
    var emailaddress = sendViewModel.get("password");
    const button = args.object;
    const page = button.page; 
    
    if (validator.validate(emailaddress) == true) {
       
    var email = require("nativescript-email");

        //check availability
        email.available().then(function (avail) {
            console.log("Email available? " + avail);
        })

        //Compose - create file object

        var fs = require("file-system");
        var appPath = fs.knownFolders.currentApp().path;
        var logoPath = appPath + "/images/diet.pdf";

        email.compose({
            subject: "EatForLife Diet plan",
            body: "This is your personal EatForLife diet plan. ",
            to: [emailaddress],
           attachments: [
                {
                    fileName: 'diet.pdf',
                    path: logoPath,
                    mimeType: 'png'
                },
               ]
        }).then(
            function () {
                console.log("Email composer closed");

            }, function (err) {
                console.log("Error: " + err);
            });
        console.log("email: " + emailaddress);
  
    } else {
        alert("Emial address not valid");
    } 

    
}
exports.send= send;
exports.pageLoaded = pageLoaded;
