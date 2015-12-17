var loadCustomHandlers = function() {
	YAHOO.Convio.PC2.Utils.publisher.on("pc2:viewChanged", function(viewChange) {
		YAHOO.Convio.PC2.Utils.publisher.on("pc2:participantProgressLoaded", function(progressData) {
			jQuery(".progress-bar-inner").css({ width: jQuery("#progress-percent-value").html() });
		});
	});
}