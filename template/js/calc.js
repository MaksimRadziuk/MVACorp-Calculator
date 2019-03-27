$(document).ready(function(){
    if(window.innerHeight < 1120){
    	$('.topPart-calc').css({"height":'auto', 'min-height':'calc(100vh - 40px)'})
		
		$(".close-cookies").click(function() {
			$('.cookie-branch').remove();
			$('.topPart-calc').css("min-height", "100vh");
		});

		if ($(".cookie-branch").length) {
			$('.topPart-calc').css("min-height", "calc(100vh - 40px)");		
		}
		else {
			$('.topPart-calc').css("min-height", "100vh");
		}
    }

    else {

        $(".close-cookies").click(function() {
            $('.cookie-branch').remove();
        });
    }

    $('.next_step').click(function(){
    	$(this).parent('.buttonRow').parent('.tabsContent').hide().next('.tabsContent').fadeIn(600);
    	$('.tabs').find('.tab.active').next('.tab').addClass('active');
    });


    $(window).resize(function(){
    	if(window.innerHeight < 1120){
	    	$('.topPart-calc').css({"height":'auto', 'min-height':'calc(100vh-40px)'})
			
			$(".close-cookies").click(function() {
				$('.cookie-branch').remove();
				$('.topPart-calc').css("min-height", "100vh");
			});

			if ($(".cookie-branch").length) {
				$('.topPart-calc').css("min-height", "calc(100vh - 40px)");		
			}
			else {
				$('.topPart-calc').css("min-height", "100vh");
			}
	    }

	    else {

	        $(".close-cookies").click(function() {
	            $('.cookie-branch').remove();
	        });
	    }
    })
});