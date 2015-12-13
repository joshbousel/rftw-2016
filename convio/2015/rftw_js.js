<script>

function toggleField (fld,str) {
	fldValue = document.getElementById(fld).value;
	
	if (fldValue == str) {
		document.getElementById(fld).value = "";
		document.getElementById(fld).style.cssText = "color: #000000 !important";
		
		if (str == "Password") {
			document.getElementById(fld).type = "password";
			}
		
		}
	else {	
		if (fldValue == "") {
			document.getElementById(fld).value = str;
			document.getElementById(fld).style.cssText = "color: #afafaf !important";
			
			if (str == "Password") {
				document.getElementById(fld).type = "text";
				}
			}
		}
	}

function register() {
	var email = document.getElementById("cons_email").value;
	var error = "";

	if (email == "") {
		error += "Email adddress\n";
		}
	
	if (error != "") {
		error = "You must fill out the following fields:\n\n"+error;
		
		alert(error);
		return false;
		}
	
	else {
		if (!isValidEmail(email)) {
			alert("That email address is not valid!");
			return false;
			}
		else {
			createCookie("reg","1",500);
			return true;
			}
		}
	}

function isValidEmail(str) {
   return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
	}

function goToByScroll(id){
	jQuery('html,body').animate({scrollTop: jQuery("#"+id).offset().top},'slow');
	}

function verifyVolunteer() {	
	var first_name = jQuery("#cons_first_name").val();
	var last_name = jQuery("#cons_last_name").val();
	var email = jQuery("#cons_email").val();
	var phone = jQuery("#cons_phone").val();
	var transportation = jQuery("#3255_6023_2_5741").val();
	var requests = jQuery("#3255_6023_3_5742").val();
	var names = new Array();
	var ages = new Array();
	var family = "";
	var error = "";
	var errorField = jQuery("#error");
		
	if (first_name == "First Name") {
		first_name = "";
		}
	if (last_name == "Last Name") {
		last_name = "";
		}

	if (first_name == "") {
		error += "First Name, ";
		}
	if (last_name == "") {
		error += "Last Name, ";
		}
	if (email == "") {
		error += "Email adddress, ";
		}
	if (phone == "") {
		error += "Phone Number, ";
		}
	
	jQuery('input[name="familyName"]').each(function (i) {
		names.push(jQuery(this).val());
		});
	
	jQuery('input[name="age"]').each(function (i) {
		ages.push(jQuery(this).val());
		});
	
	for (var n = 0; n < names.length; n++) {
		if (names[n] == "Name") {
			names[n] = "";
			}
		if (ages[n] == "Age") {
			ages[n] = "";
			}
		
		if (names[n] != "") {
			family += names[n];
			
			if (ages[n] != "") {
				family += ", Age: "+ages[n];
				}
			
			family += "; ";	
			}
		}
		
	jQuery("#3255_6023_4_5743").val(family);
			
	if (error != "") {		
		errorField.html("The following fields are required:<br />"+error+"<br />Please fill in these fields and try again.");
		goToByScroll("error");	
		return false;
		}
	else {
		if (!isValidEmail(email)) {
			errorField.html("That email address is not valid!");
			return false;
			}
		else {
			return true;
			}
		
		return true;
		}
	}

Y.use('jquery-noconflict', function() {
	jQuery('#fr_accept').change(function() {
	   if(jQuery(this).is(':checked')) {
	      jQuery('#fuw_next').attr("disabled",false);
	      return;
	   }
	   else {
		   jQuery('#fuw_next').attr("disabled",true);
	   }
	});
	
	jQuery("#team_search_container").click(function(e) {
		e.preventDefault();
		jQuery("#search_team").css({ display: "block" });
		jQuery("#search_participant").css({ display: "none" });
	});

	jQuery("#part_search_container").click(function(e) {
		e.preventDefault();
		jQuery("#search_team").css({ display: "none" });
		jQuery("#search_participant").css({ display: "block" });
	});
	
});

</script>