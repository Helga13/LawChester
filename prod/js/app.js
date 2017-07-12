$(document).ready(function () {
	
	$("#phone").mask("+375 (99) 999 99 99");
	
	//tabs

	$('.tabs_caption').on('click', '.tab_radio:not(.active)', function () {	$(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
	});
	
	//popup
	
	$('.js-popupCall').click(function (e) {
        e.preventDefault();
        var DataId = $(this).attr('data-id');
        if (typeof DataId == "string") {
        	$('#'+DataId).css({'opacity': '1', 'visibility': 'visible'}).find('.popup_content').css({'transform': 'translateY(0)'});
        	$('body').css('overflow', 'hidden');  
        }
    });
    $('.popup').click(function (e) {
        e = event || window.event
        if (e.target == this) {
           $(this).find('.popup_content').css({'transform': ''});
					setTimeout(function() {
						console.log(true);
						$('.overlay.popup').css({'opacity': '0','visibility': 'hidden'});
						$('body').css('overflow', 'auto');
					}, 500);
            
        }
    });
		$('.popup_close').click(function (e) {
        e.preventDefault();
				$(this).parents('.popup').find('.popup_content').css({'transform': ''});
          setTimeout(function() {
						console.log(true);
						$('.overlay.popup').css({'opacity': '0','visibility': 'hidden'});
						$('body').css('overflow', 'auto');
					}, 500);
    });
    $('.popup .popup_content').click(function(e) {
		e.stopPropagation();
	}); 
	
})