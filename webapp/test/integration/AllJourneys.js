jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SFLIGHTSet in the list
// * All 3 SFLIGHTSet have at least one SBOOK

sap.ui.require([
	"sap/ui/test/Opa5",
	"bc/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"bc/test/integration/pages/App",
	"bc/test/integration/pages/Browser",
	"bc/test/integration/pages/Master",
	"bc/test/integration/pages/Detail",
	"bc/test/integration/pages/Create",
	"bc/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "bc.view."
	});

	sap.ui.require([
		"bc/test/integration/MasterJourney",
		"bc/test/integration/NavigationJourney",
		"bc/test/integration/NotFoundJourney",
		"bc/test/integration/BusyJourney",
		"bc/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});