$(function() {
	$doc = $(document);
	
	/////////////////////////////////
	// Universal Form Validaton    //
	/////////////////////////////////
	
	function validateEmail(email) {
	    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}
	
	/////////////////////////////////
	// Mobile Nav Button Toggle    //
	/////////////////////////////////
	
	$(".rftw-header__menu-button").on("click",function(e) {
		e.preventDefault();
		$menu = $(this);
		$menuButtom = $(".rftw-header__menu-button");
		$mobileNav = $(".rftw-mobile-nav");
		$mobileNav.css({ height: $doc.height() - $(".rftw-header").height() })

		if ($mobileNav.hasClass("rftw-mobile-nav--is-open")) {
			$mobileNav.removeClass("rftw-mobile-nav--is-open");
			$menuButtom.removeClass("rftw-header__menu-button--is-open");
		} else {
			$mobileNav.addClass("rftw-mobile-nav--is-open");
			$menuButtom.addClass("rftw-header__menu-button--is-open");
		}
	});

	/////////////////////////////////
	// Lightbox Toggle             //
	/////////////////////////////////
	
	$('.rftw-lightbox-toggle').on('click',function(e){
		e.preventDefault();
		var $body = $('body');
		var lightboxClass = 'rftw-lightbox-open';
		
		if ($body.hasClass(lightboxClass)) {
			$body.removeClass(lightboxClass);
		} else {
			$body.addClass(lightboxClass);
		}
	});
	
	/////////////////////////////////
	// Select Virtual Runner       //
	/////////////////////////////////
	
	$.urlParam = function(name){
    	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    	if (results==null){
	    	return null;
	    	} else{
		    return results[1] || 0;
		    }
    	}
	
	if ($.urlParam('ptype')) {
	    if ($.urlParam('ptype') == "virtual") {  
	    	$("#fr_part_radio_1416").prop("checked", true);    
		}
	}
	
	/////////////////////////////////
	// Team Header                 //
	/////////////////////////////////
	
	if (($.urlParam('pg')) || ($.urlParam('page_type'))) {
	    if (($.urlParam('pg') == "team") || ($.urlParam('page_type') == "fr_team_page")) {  
	    	$teamName = $("#team_page_team_name");
	    	$teamName.remove();
	    	$("#team_page").prepend($teamName);
		}
	}
	
	/////////////////////////////////
	// Volunteer Form              //
	/////////////////////////////////
	
	$(".rftw-form--volunteer .rftw-button").on("click",function(e) {
		e.preventDefault();	
		var $firstName = $("#cons_first_name");
		var $lastName = $("#cons_last_name");
		var $phone = $("#cons_phone");
		var $email = $("#cons_email");
		var $requiredFields = Array($firstName,$lastName,$phone,$email);
		var transportation = $("#3255_6023_2_5741").val();
		var requests = $("#3255_6023_3_5742").val();
		var names = new Array();
		var ages = new Array();
		var family = "";
		var errorCount = 0;
		var $errorContainer = $(".rftw-form__error");
		var errorMessage;
		var $button = $(".rftw-form--volunteer .rftw-button");
		var $buttonAction = $(".rftw-form--volunteer .rftw-button__action");
		
		$button.addClass("rftw-button--disabled");
		$buttonAction.html("Please Wait...");
		
		if (!validateEmail($email.val())) {
			errorMessage = "The provided email address is not valid."
			errorCount++;
		}
		
		for (var n = 0; n < $requiredFields.length; n++) {
			$requiredFields[n].removeClass("rftw-form__field--has-error");
			
			if ($requiredFields[n].val() == "") {
				$requiredFields[n].addClass("rftw-form__field--has-error");
				errorMessage = "Please correct the following errors."
				errorCount++;
			}
		}
		
		if (errorCount > 0) {
			$errorContainer.html(errorMessage).show();
			$button.removeClass("rftw-button--disabled");
			$buttonAction.html("Submit");
			$('html,body').animate({scrollTop: $errorContainer.offset().top}, 250);
		}
		else {
			$errorContainer.hide();
			
			$('input[name="familyName"]').each(function (i) {
				names.push($(this).val());
			});
			
			$('input[name="age"]').each(function (i) {
				ages.push($(this).val());
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
			
			var url = "http://e.wcs.org/site/Survey?cons_info_component=t&cons_email="+$email.val()+"&cons_first_name="+$firstName.val()+"&cons_last_name="+$lastName.val()+"&cons_phone="+$phone.val()+"&3255_6023_2_5741="+transportation+"&3255_6023_3_5742="+requests+"&3255_6023_4_5743="+family+"&SURVEY_ID=6023&ACTION_SUBMIT_SURVEY_RESPONSE=Submit";
				
			$.ajax({
				type: "POST",
				url: url
			}).always(function(){
				window.location.href = "http://e.wcs.org/site/TR?fr_id=1180&pg=informational&type=fr_informational&sid=1433"; 
			});
		}
	});
});

/////////////////////////////////
// Typeahead                   //
/////////////////////////////////

Y.use('jquery-noconflict', function() {
		
	var species = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.whitespace,
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		prefetch: {
			ttl: 1,
			url: '../rftw-2016/js/species.json'
		}
	});


	function speciesDefaults(q, sync) {
		if (q === '') {
			sync(species.get('elephants','flamingos','gorillas','lions','sharks','turtles'));
		}
		
		else {
			species.search(q, sync);
		}
	}

	jQuery('input[name="3255_11861_1_10644"]').typeahead({
		minLength: 0,
		highlight: true
	}, {
		name: 'species',
		limit: 6,
		source: speciesDefaults
	});
});