sap.ui.jsview("sehra.Employees", {

	getControllerName : function() {
		return "sehra.Employees";
	},

	createContent : function(oController) {
		var oTable = new sap.ui.table.Table({
			id : "employeesTable",
			visibleRowCount : 5,
			firstVisibleRow : 10,
			selectionMode : sap.ui.table.SelectionMode.Single,
		});
		// add columns to the table
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "ID"
			}),
			template : new sap.ui.commons.TextView().bindText("id"),
			sortProperty : "id",
			filterProperty : "id",
			width : "100px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "First Name"
			}),
			template : new sap.ui.commons.TextView().bindText("firstName"),
			sortProperty : "firstName",
			filterProperty : "firstName",
			width : "100px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Last Name"
			}),
			template : new sap.ui.commons.TextView().bindText("lastName"),
			sortProperty : "lastName",
			filterProperty : "lastName",
			width : "100px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Actions"
			}),
			template : new sap.ui.commons.Button({
				text : "Remove",
				press : oController.doRemoveEmployee
			}),
			flexible : false,
			resizable : false,
			width : "35px",
		}));
		
		return oTable;
	}

});
