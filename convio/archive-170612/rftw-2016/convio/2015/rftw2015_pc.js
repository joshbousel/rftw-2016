//v1

//YAHOO.Convio.PC2.Utils.LoadingMessage="Loading, please wait.";
//YAHOO.Convio.PC2.Utils.LoadingMessage_en_US="Loading, please wait.";

var loadCustomHandlers = function() {
    
}

/* Executes after new JS is dynamically loaded, 
 * and before new view load begins. */
var loadOverrides = function(view, subview) {
    // Override functions defined in external JS files
}

var loadCustom = function() {
    /*
     * You can execute a function once all of the specified
     * events have fired with the YAHOO.Convio.PC2.Utils.require
     * function. 
     */
    YAHOO.Convio.PC2.Utils.require("pc2:registrationLoaded", "pc2:constituentLoaded", "pc2:configurationLoaded", "pc2:wrapperLoaded", function() {
    //    YAHOO.log("Registration, Constituent, Configuration, and Wrapper are all loaded.", "debug", "custom.js");
        moveItems();
        changeText();
    });
};


function moveItems(){
    jQuery('h1#msg_cat_overview_label').insertBefore('.yui-skin-ux #hd-nav');
}

function changeText() {
    jQuery('h1#msg_cat_overview_label').text('Participant Center');
}