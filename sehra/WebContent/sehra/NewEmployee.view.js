sap.ui.jsview("sehra.NewEmployee", {

	getControllerName : function() {
		return "sehra.NewEmployee";
	},

	createContent : function(oController) {
		var oFirstNameText = new sap.ui.commons.TextField("newEmployeeFirstName");
		var oLastNameText = new sap.ui.commons.TextField("newEmployeeLastName");
		var oNewEmployeeMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed: false,
			columns: 2
		});
		oNewEmployeeMatrix.createRow(
			new sap.ui.commons.Label({text: "First Name:", labelFor: oFirstNameText}), 
			oFirstNameText
		);
		oNewEmployeeMatrix.createRow(
			new sap.ui.commons.Label({text: "Last Name:", labelFor: oLastNameText}), 
			oLastNameText
		);
		return new sap.ui.ux3.ToolPopup("newEmployeeTool", {
			title : "New Employee",
			tooltip : "Add New Employee",
			icon : "../images/contact_regular.png",
			iconHover : "../images/contact_hover.png",
			content : [ oNewEmployeeMatrix ],
			initialFocus : oFirstNameText,
			enter : oController.doAddEmployee,
			open : oController.clearForm,
			buttons : [ new sap.ui.commons.Button("addButton", {
				text : "OK",
				press : oController.doAddEmployee
			}), new sap.ui.commons.Button("cancelButton", {
				text : "Cancel",
				press : oController.doClose
			}) ]
		});
	}

});
