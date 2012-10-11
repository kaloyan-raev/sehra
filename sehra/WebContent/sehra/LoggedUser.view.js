sap.ui.jsview("sehra.LoggedUser", {

	getControllerName : function() {
		return "sehra.LoggedUser";
	},

	createContent : function(oController) {
		return new sap.ui.commons.TextView("loggedUser");
	}

});
