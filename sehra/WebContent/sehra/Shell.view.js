sap.ui.jsview("sehra.Shell", {

	getControllerName : function() {
		return "sehra.Shell";
	},

	createContent : function(oController) {
		return new sap.ui.ux3.Shell("shell", {
			appTitle : "Simplest Ever HR App",
			appIcon : "http://www.sap.com/global/images/SAPLogo.gif",
			appIconTooltip : "SAP logo",
			showLogoutButton : true,
			showSearchTool : false,
			showInspectorTool : false,
			showFeederTool : false,
			headerItems : [sap.ui.view({
				viewName : "sehra.LoggedUser",
				type : sap.ui.core.mvc.ViewType.JS
			}).getContent()[0] ],
			worksetItems : [ new sap.ui.ux3.NavigationItem({
				key : "wi_persons",
				text : "Employees"
			}) ],
			// set the Employees view as initial content of the shell
			content: [ sap.ui.view({
				viewName : "sehra.Employees",
				type : sap.ui.core.mvc.ViewType.JS
			}) ],
			toolPopups : [ sap.ui.view({
				viewName : "sehra.NewEmployee",
				type : sap.ui.core.mvc.ViewType.JS
			}).getContent()[0] ],
		});
	}

});
