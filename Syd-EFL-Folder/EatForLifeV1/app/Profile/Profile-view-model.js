const observableModule = require("data/observable");

var Sqlite = require("nativescript-sqlite");

function ProfileViewModel(db) {
    const viewModel = observableModule.fromObject({});

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
   	

    return viewModel;
}

module.exports = ProfileViewModel;
