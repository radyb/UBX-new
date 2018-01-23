jQuery(document).ready(function () {
	$('[data-toggle="offcanvas"]').click(function () {
		$this = $(this);
		$('.qa-main-wrapper').toggleClass('active');
		$this.find('i.toggle-icon').toggleClass('fa-chevron-left fa-chevron-right');
	});
	var $selected_sub_nav = $('a.qa-nav-sub-link.qa-nav-sub-selected');
	
	if (!!$selected_sub_nav.length) {
		$selected_sub_nav.parent('li.qa-nav-sub-item').addClass('active');
	};
	
	$('.qa-logo-link').removeAttr('title');

	$('[title]').tooltip({
		placement : 'bottom' 
	});
	
	/*$('body').tooltip({
	    selector: '[title]' ,
	    placement : 'bottom' ,
	});*/
	
	$('.qa-vote-buttons').tooltip({
	    selector: '[title]' ,
	    placement : 'bottom' ,
	    container:'body'
	});

	var $mainQ = $('.qa-part-q-view') ,
		$closedQ = $mainQ.children('.qa-q-closed') ,
		$solvedQ = $('#a_list').children('.qa-a-list-item-selected') ;
	if ($closedQ.length > 0) {
		$mainQ.addClass('qa-part-q-view-closed');
	}; 

	if ($solvedQ.length > 0) {
		$mainQ.addClass('qa-part-q-view-solved');
	}; 

    $('#nav').affix({
	      offset: {
	        top: $('header').height()
	      }
	}); 

    $('#nav').on('affix.bs.affix', function () {
        var navHeight = $('.navbar').outerHeight(true);
        $('#nav + .container').css('margin-top', navHeight);
	});

    $('#nav').on('affix-top.bs.affix', function () {
     	$('#nav + .container').css('margin-top', 0);
 	});

 	function changeGoogleStyles() { 		
		if(($goog = $('.goog-te-menu-frame').contents().find('body')).length) {
			var stylesHtml = '<style type="text/css">.goog-te-menu2-item, .goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2-item-selected{color: #ff6e59; text-decoration: none;}.goog-te-menu2-item div{padding: 7px 10px !important;}, .goog-te-menu2 {border:0px !important;}.goog-te-menu2-item:hover div{color:#ffffff;background:#ff6e59}.goog-te-menu2-item-selected div,.goog-te-menu2-item-selected:link div,.goog-te-menu2-item-selected:visited div,.goog-te-menu2-item-selected:hover div,.goog-te-menu2-item-selected:active div{color: #ffffff;background-color: #ff6e59 !important;}.goog-te-menu2{border:0px!important;}</style>';


			$goog.prepend(stylesHtml);
		} else {
			setTimeout(changeGoogleStyles, 50);
			}
		}
	changeGoogleStyles();

});
