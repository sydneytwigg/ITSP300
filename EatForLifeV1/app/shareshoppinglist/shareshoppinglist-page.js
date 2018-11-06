var frameModule = require("tns-core-modules/ui/frame");
var shareshoppinglistViewModel = require("./shareshoppinglist-view-model");

var shareshoppinglistViewModel = new shareshoppinglistViewModel();

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = shareshoppinglistViewModel;
}

function send(args) {
    var validator = require("email-validator");
    var emailaddress = shareshoppinglistViewModel.get("password");
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
        var logoPath = appPath + "/images/shoppinglist.png";

        email.compose({
            subject: "EatForLife Shopping list",
            body: "This is your shopping list for your personal EatForLife diet plan. ",
            to: [emailaddress],
           attachments: [
                {
                   fileName: 'shoppinglist.png',
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
