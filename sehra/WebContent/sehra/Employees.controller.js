sap.ui.controller("sehra.Employees", {

	/**
	 * Called when a controller is instantiated and its View controls
	 * (if available) are already created. Can be used to modify the
	 * View before it is displayed, to bind event handlers and do other
	 * one-time initialization.
	 */
	onInit : function() {
		// Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("rest/persons");

		var oTable = sap.ui.getCore().byId("employeesTable");
		oTable.setModel(oModel);
		oTable.bindRows("/");
	},

	removeEmployee : function(oEvent) {
		var oModel = oEvent.getSource().getModel();
		var sModelPath = oEvent.getSource().getBindingContext().getPath();

		var sId = oModel.getProperty(sModelPath + "/id");
		var sFirstName = oModel.getProperty(sModelPath + "/firstName");
		var sLastName = oModel.getProperty(sModelPath + "/lastName");

		sap.ui.commons.MessageBox.confirm("Are you sure you want to remove "
				+ sFirstName + " " + sLastName + "?", function(bResult) {
			if (bResult) {
				$.ajax({
					type : "DELETE",
					url : "rest/persons/" + sId,
					async : false,
					success : function() {
						oModel.loadData("rest/persons");
					},
					failure : function(errMsg) {
						alert(errMsg);
					}
				});
			}
		}, "Remove Employee");
	}

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's
	 * View is re-rendered (NOT before the first rendering! onInit() is used for
	 * that one!).
	 */
//	 onBeforeRendering: function() {
//	
//	 },
	/**
	 * Called when the View has been rendered (so its HTML is part of the document).
	 * Post-rendering manipulations of the HTML could be done here. This hook is the
	 * same one that SAPUI5 controls get after being rendered.
	 */
//	onAfterRendering: function() {
//	
//	},
	/**
	 * Called when the Controller is destroyed. Use this one to free resources and
	 * finalize activities.
	 */
//	onExit: function() {
//	
//	}
});
