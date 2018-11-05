const Observable = require("tns-core-modules/data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;
var applicationSettingsModule = require("application-settings");
const fromObjectRecursive = require("tns-core-modules/data/observable").fromObjectRecursive;
var Sqlite = require("nativescript-sqlite");
const topmost = require("tns-core-modules/ui/frame").topmost;

function EditprofileViewModel(db) {
    var viewModel = new Observable();
       
    var email = applicationSettingsModule.getString("EFL-user");
    var clientID = applicationSettingsModule.getString("EFL-ID");
    var overviewID = applicationSettingsModule.getString("EFL-overview");

	db.get("SELECT client.Name, client.Surname, client.Email, client.PhoneNum, client.Password, overview.Height, client.Current_Weight, client.Target_Weight from client INNER JOIN overview ON overview.idOverview = client.idOverview WHERE client.Email = ? ",[email]).then(rows => {
            viewModel.set("name",rows[0]);
            viewModel.set("surname", rows[1]);
            viewModel.set("email",rows[2]);
            viewModel.set("phoneNum",rows[3]);
            viewModel.set("pwd",rows[4]);
            viewModel.set("height",rows[5]);
            viewModel.set("weight",rows[6]);
            viewModel.set("goal",rows[7]);

        }, error => {
            alert("SELECT ERROR", error);
        });

    viewModel.onSave = function(){
    	var name 		=		viewModel.get("name");
        var surname 	=   	viewModel.get("surname");
        var newEmail 	=  		viewModel.get("email");
        var phone  		=  		viewModel.get("phoneNum");
        var pass 		=    	viewModel.get("pwd");
        var height 		=   	viewModel.get("height");
        var weight 		=   	viewModel.get("weight");
        var goalKG 		=   	viewModel.get("goal");


      db.execSQL("UPDATE client SET Name = ?, Surname = ?, Email = ?, PhoneNum = ?, Password = ?, Current_Weight = ?, Target_Weight = ? WHERE idClient = ?",[name,surname,newEmail,phone,pass,weight, goalKG, clientID]).then(id => {
            

        }, error => {
            alert("UPDATE CLIENT ERROR", error);
        });

      db.execSQL("UPDATE overview SET Weight = ?, Height = ? WHERE idOverview = ?",[weight, height, overviewID]).then(id => {
            applicationSettingsModule.setString("EFL-user",newEmail);   

            alert("Update Successful!");

        }, error => {
            alert("UPDATE OVERVIEW ERROR", error);
        });

        topmost().navigate({ moduleName: "./Profile/Profile-page"});
	}

    return viewModel;
}

module.exports = EditprofileViewModel;
