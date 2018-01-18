/* Р—Р°РїСѓСЃРєР°РµРј РєРѕРіРґР° СЃС‚СЂР°РЅРёС†Р° РіРѕС‚РѕРІР° | trigger when page is ready */
$(document).ready(function(){

	$(".main-text .btn").click(function (event) {
        event.preventDefault();
		
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	
	$("input[name=phone]").mask("+38 (999) 999-9999");
	
	$('.review-slider').slick({
		slidesToShow: 2
	})
	
	$('.btn-callback').click(function(){
		$('.modal-bg, .modal-wrap').fadeIn(200);
		var from = $(this).data('from');
		
		if(from){
			$('.modal-wrap').find('input[name=from]').attr('value', from);
		}
	})

    $('.btn-request-350').click(function(){
        $('.modal-bg, .request-350-wrap').fadeIn(200);
        var from = $(this).data('from');

        if(from){
            $('.request-350-wrap').find('input[name=from]').attr('value', from);
        }
    })

    $('.btn-request-500').click(function(){
        $('.modal-bg, .request-500-wrap').fadeIn(200);
        var from = $(this).data('from');

        if(from){
            $('.request-500-wrap').find('input[name=from]').attr('value', from);
        }
    })
	
	$('.btn-request-vel1').click(function(){
        $('.modal-bg, .request-vel1-wrap').fadeIn(200);
        var from = $(this).data('from');

        if(from){
            $('.request-vel1-wrap').find('input[name=from]').attr('value', from);
        }
    })
	
	$('.btn-request-vel2').click(function(){
        $('.modal-bg, .request-vel2-wrap').fadeIn(200);
        var from = $(this).data('from');

        if(from){
            $('.request-vel12-wrap').find('input[name=from]').attr('value', from);
        }
    })

    $('.btn-callback-help').click(function(){
        $('.modal-bg, .callback-help').fadeIn(200);
        var from = $(this).data('from');

        if(from){
            $('.callback-help').find('input[name=from]').attr('value', from);
        }
    })

    $('.btn-dealer-discount').click(function(){
        $('.modal-bg, .dealer-discount').fadeIn(200);
        var from = $(this).data('from');

        if(from){
            $('.dealer-discount').find('input[name=from]').attr('value', from);
        }
    })

	$('.btn-velopoint').click(function(){
		$('.modal-bg, .modal-velopoint').fadeIn(200);
	})
	$('.modal-bg, .btn-close').click(function(){
		$('.modal-bg, .modal-wrap, .request-350-wrap, .request-500-wrap, .request-vel1-wrap, .request-vel2-wrap, .callback-help, .dealer-discount, .modal-velopoint').fadeOut(200);
	})
	
	$('.question-list .item-q').on('click touchstart', function(){
		$(this).next().fadeIn(200);
	})
	$('.question-list .item-a').on('mouseleave touchend', function(){
		$(this).fadeOut(200);
	})

	$('.block-numbers').onScreen({
		doIn: function() {
			if(!$(".spincrement").hasClass('noanimation')){
				$(".spincrement").spincrement({
					thousandSeparator: '',
					duration: 3000
				});
				$(".spincrement").addClass('noanimation')
			}
		}
	})
	
	new WOW({
		mobile: false
	}).init();
	
	$("html").niceScroll({
		cursorcolor: '#ff4700',
		cursorwidth: 13,
		cursorborderradius: '6px',
		zindex: 99999,
		mousescrollstep: 50
	});
	 
	$('input[type=submit]').click(function(e){
		e.preventDefault();
		
		var a = $(this).closest('form');
        var x = true;
		
        $("form").find('input[type=text]').removeClass('error');
		
        a.find('input[type=text]').each(function() {
            if ($(this).val() === '') {
                $(this).addClass('error');
                $(this).focus();
                x = false;
                return false;
            }
        });
        if (x) {
            $("form").find('input[type=text]').parent().removeClass('error');
            a.submit();
        }
        return false;
		
	})
	
	$('.show-complect').click(function(){
		var complect = $(this).closest('.model').find('.model-desc-hover');
		
		complect.toggleClass('active');
		
		if(complect.hasClass('active')){
			$(this).html('РЎРєСЂС‹С‚СЊ РєРѕРјРїР»РµРєС‚Р°С†РёСЋ РЅР°Р±РѕСЂР°');
		}else{
			$(this).html('РџРѕРєР°Р·Р°С‚СЊ РєРѕРјРїР»РµРєС‚Р°С†РёСЋ РЅР°Р±РѕСЂР°');
		}
		
	})
	
	$('a[href=#]').click(function(e){ e.preventDefault(); });

});


/* Р”СЂСѓРіРёРµ СЃРѕР±С‹С‚РёСЏ | optional triggers

$(window).load(function() { // РљРѕРіРґР° СЃС‚СЂР°РЅРёС†Р° РїРѕР»РЅРѕСЃС‚СЊСЋ Р·Р°РіСЂСѓР¶РµРЅР°
	
});

$(window).resize(function() { // РљРѕРіРґР° РёР·РјРµРЅРёР»Рё СЂР°Р·РјРµСЂС‹ РѕРєРЅР° Р±СЂР°СѓР·РµСЂР°
	
});

*/