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
	    	$("#fr_part_radio_1436").prop("checked", true);    
		}
	}
	
	/////////////////////////////////
	// 2017 Closed Message         //
	/////////////////////////////////
	
    if ($.urlParam('fr_id') == "1190" && $.urlParam('pg') == "tfind") {  
	    $(".appArea").css({ 'width' : '100%' }).html('<p class="rftw-centered">Registration for the 2017 Run for the Wild is temporarily closed and will open again in January.</p>');    
	}
	
	/////////////////////////////////
	// Donation Levels             //
	/////////////////////////////////
	
	var activeClass = 'donation-level-container--is-active';
	
	$('input[name="level_standardexpanded"]').each(function(){
		var $checkbox = $(this);
		if ($checkbox.attr('checked') == 'checked') {
			$container = $checkbox.closest('.donation-level-container');
			$container.addClass(activeClass);
			
			if ($container.find('input[type="text"]').length) {
				$amountField = $('.donation-level-container input[type="text"]');
				
				if ($amountField.val() == 'Other' || $amountField.val() == '') {
					$amountField.focus();
				}
			}
		}
	});	
			
	$('.donation-level-label-container, .donation-level-amount-container').on('click',function(e){
		removeLevelButtonActiveClass();
		$(this).closest('.donation-level-container').addClass(activeClass);
	});
	
	$('.donation-level-container input[type="text"]').on('focus',function(e){
		removeLevelButtonActiveClass();
		$(this).closest('.donation-level-container').addClass(activeClass);
	});	
	
	$('.donation-level-container input[type="text"]').attr('placeholder', 'Other');
	$('.donation-level-user-entered').parent().find('label').attr('style', 'display: none !important');
	
	function removeLevelButtonActiveClass() {
		$('.donation-level-container').each(function(){
			$(this).removeClass(activeClass);
		});
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
	// Friendbuy Conversion        //
	/////////////////////////////////
	
	if ($.urlParam('pg')) {
	    if ($.urlParam('pg') == 'rthanks') { 
		    var id = new Date().valueOf();			
			var totalAmount = $('#total_amt').html().substr(1);
			var email = $('#email_sent_msg_email').html().slice(0, -1);
			
			window['friendbuy'] = window['friendbuy'] || [];
		    window['friendbuy'].push(['track', 'order',
		      {
		          id: ''+id+'', //INPUT ORDER ID
		          amount: ''+totalAmount+'', //INPUT ORDER AMOUNT
		          email: ''+email+'' //INPUT EMAIL
		      }
		    ]);
		}
	}
		    
	/////////////////////////////////
	// Checkout Copy               //
	/////////////////////////////////
	
	$('#FriendraiserUserWaiver #another_button span').html("Register Team Members");
	
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

	jQuery('input[name="3255_14170_1_11170"]').typeahead({
		minLength: 0,
		highlight: true
	}, {
		name: 'species',
		limit: 6,
		source: speciesDefaults
	});
});