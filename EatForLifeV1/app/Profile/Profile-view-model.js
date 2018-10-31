const Observable = require("tns-core-modules/data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;

const fromObjectRecursive = require("tns-core-modules/data/observable").fromObjectRecursive;

var dialogs = require("tns-core-modules/ui/dialogs");
var Sqlite = require("nativescript-sqlite");

function ProfileViewModel(db) {
    var viewModel = new Observable();
    const newViewModel = fromObject({ "firstname": "" });
    
    viewModel.select = function () {
        db.get("SELECT * FROM client").then(rows => {

            rows.forEach((w) => {
                console.log(w)
            });
		/*		for(var row in rows){
				window.alert("result"+ rows);
				
        var clients = [];
        viewModel.clients = [];
        viewModel.has_clients = false;
    
        db.all("SELECT * FROM client").then((err, rs) => {
    if(!err){
        rs.forEach((c) => {
    clients.push({
        name: commafy(c[12]),
        surname: commafy(c[13]) 
    });
 
});
 
if(clients.length){
    viewModel.set('has_clients', true);
}
viewModel.set('clients', clients);
 
    }  
});
			}*/

            
            console.log("Button Working ");
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

    return viewModel;
}

module.exports = ProfileViewModel;
