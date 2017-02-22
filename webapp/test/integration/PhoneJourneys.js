jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"bc/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"bc/test/integration/pages/App",
	"bc/test/integration/pages/Browser",
	"bc/test/integration/pages/Master",
	"bc/test/integration/pages/Detail",
	"bc/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "bc.view."
	});

	sap.ui.require([
		"bc/test/integration/NavigationJourneyPhone",
		"bc/test/integration/NotFoundJourneyPhone",
		"bc/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});