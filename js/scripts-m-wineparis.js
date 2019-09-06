;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	function initHomepageSlider() {
	    var $slider = $('.pourquoi-exposer .la-slider');
	    var $clone = $slider.clone();
	    var sliderArrow = '<a href="#" class="slider-next"/>';
	    var sliderPaging = '<div class="slider-paging">';
	    

	    sliderPaging += '</div>';
	    $slider.after($clone);
	    var $slidesContainer = $clone.find('.slider-content');
	    $clone.append(sliderArrow).append(sliderPaging);
	    $slider.remove();
	    $clone.find('.slider-paging a:first-child').addClass('active');
	    
	    $slidesContainer.carouFredSel({
	        width: '100%',
	        items: 1,
	        swipe: {
	            onTouch: true
	        },
	        auto: {
	            play: true,
	            timeoutDuration: 4000
	        },
	        scroll: {
				duration: 500,
				timeoutDuration: 2500
			},
	        infinite: true,
	        pagination: ".pourquoi-exposer .slider-paging"
	    });
	}

	function initNewsSLider() {
		$('.winesup .list-grids-with-pagin').append('<div class="slider-pagination" id="slider-pagination" />')

		$('.winesup .list-grids-with-pagin .grid-la-list').carouFredSel({
			width: '100%',
			circular: true,
			infinite: true,
			responsive: true,
			swipe: true,
			pagination: {
				container       : "#slider-pagination"
			},
			auto: {
				play: false,
				timeoutDuration: 0
			},
			items: {
				visible: 1
			}
		});

	}

	$doc.ready(function() {

		$('.sb-menu-trigger').on('click', function() {
			$(this).toggleClass('active')
		})
		
		if ( $('#widgetMobileLinkOpenCap').length ) {
			$('#widgetMobileLinkOpenCap').clone(true).appendTo('.main-navigation')
		}

		if ( $('.links-espaces').length ) {
			$('.links-espaces').clone(true).appendTo('.main-navigation')
		}

		
		//Countdown
		if ( $('#countdown').length ) {
			
			if ($('html').attr('lang') == 'fr') {
			$('#countdown').countdown($('#countdown').data('time')).on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
						    + '<li><span>%D</span> <span>jour%!d</span></li>'
						    + '<li><span>%H</span> <span>heure%!d</span></li>'
						    + '<li><span>%M</span> <span>minute%!d</span></li>'
					))
			});
			} else {
			$('#countdown').countdown($('#countdown').data('time')).on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
						    + '<li><span>%D</span> <span>day%!d</span></li>'
						    + '<li><span>%H</span> <span>hour%!d</span></li>'
						    + '<li><span>%M</span> <span>minute%!d</span></li>'
					))
			});
			}
			
		}
		
		

		if ( $('.evenements').length ) {
			$('.list-articles').each( function (){
				var i = 1;
				$(this).find('.gla-item').each( function (){
					$(this).addClass('color-'+ i );
					i++;
				})
			})
			$('.evenements .list-grids-with-pagin').append('<div class="slider-pagination" id="slider-pagination" />')

			$('.evenements .grid-la-list').carouFredSel({
				width: '100%',
				circular: true,
				infinite: true,
				responsive: true,
				swipe: true,
				pagination: {
					container       : "#slider-pagination"
				},
				auto: {
					play: false,
					timeoutDuration: 0
				},
				items: {
					visible: 1
				}
			});
		}

		if ( $('.observatoire').length ) {
			$('.observatoire .list-grids-with-pagin').append('<div class="slider-pagination" id="slider-pagination1" />')

			$('.observatoire .grid-la-list img').on('load', function() {
				$('.observatoire .grid-la-list').carouFredSel({
					width: '100%',
					circular: true,
					infinite: true,
					responsive: true,
					swipe: true,
					pagination: {
						container       : "#slider-pagination1"
					},
					auto: {
						play: false,
						timeoutDuration: 0
					},
					items: {
						visible: 1
					}
				});
			})
		}

		

		if ( $('.partner-gallery .slider-content') ) {
			$('.partner-gallery .slider-content').carouFredSel({
				width: '100%',
				circular: true,
				infinite: true,
				responsive: true,
				auto: {
					play: true,
					timeoutDuration: 0
				},
				items: {
					visible: 9
				},
				scroll: {
					duration: 60000,
					easing: 'linear'
				}
			});
		}

		//Caroufredsel
		if ( $('.slider-alt .slider__slides').length ) {
			$('.slider-alt').append('<div class="slider-pagination" id="slider-pagination2" />')

			$('.slider-alt .slider__slides').carouFredSel({
				items: 1,
				circular: true,
				infinite: true,
				swipe: true,
				pagination: {
					container : "#slider-pagination2"
				},
				auto: {
					// play: true,
					// timeoutDuration: 7000
				}
			});
		}



	})

	$win.on('load', function() {
	    if ( $('.pourquoi-exposer').length ) {
	    	
	    	$('.pourquoi-exposer .la-item').each( function (i){
	    		$(this).addClass('color'+ (i+1) );
	    	})


	    	initHomepageSlider()
	    }

	    if ( $('.winesup .list-grids-with-pagin .gla-item').length ) {
	    	initNewsSLider()
	    }

	    if ( $('.gabrielle').length ) {
	    	$('.gabrielle .list-grids-with-pagin').append('<span class="slider-pagination" id="slider-pagination111" />')

	    	$('.gabrielle .grid-la-list').on('load', function() {
	    	})
	    		$('.gabrielle .grid-la-list').carouFredSel({
	    			width: '100%',
	    			circular: true,
	    			infinite: true,
	    			responsive: true,
	    			swipe: true,
	    			pagination: {
	    				container       : "#slider-pagination111"
	    			},
	    			auto: {
	    				play: false,
	    				timeoutDuration: 0
	    			},
	    			items: {
	    				visible: 1
	    			}
	    		});
	    }



		setTimeout(function() {
			$('.intro-alt').addClass('animate-links')
		}, 300);

		$('.header-content').appendTo('.site-banner .inside');

if ($('#youmax').length) {
	if ($('html').attr('lang') == 'fr') {
					
        // Youmax Slider
        $('#youmax').youmax({
			apiKey: 'AIzaSyCNbIqgoVrq7IPkHr_NBMquEXAFu9zv474',
			vimeoAccessToken: '',
			clientId: '438137961980-vlefbf8sgps4r5fqon9u92m93n0hc1pi.apps.googleusercontent.com',
			channel: '',
			youtube_playlist_videos: [{
				name: 'Videos',
				url: 'https://www.youtube.com/playlist?list=PLuy3B88HHXNlpB7NkVlN6F12mhs73CQam',
				selected: true
				}],
				loadMode: 'paginate-sides',
			loadButtonSize: 'small',
			hideHeader: true,
			hideNavigation: true,
			hideComments: true,
			maxResults: 1,
			tabStyle: 'wire',
			youmaxBackgroundColor: '#ffffff',
			maxContainerWidth: 340,
			fourColumnThumbnailWidth: '100%',
			fourColumnThumbnailLeftRightMargin: '0',
			videoProtocol: 'https:'
		});
	} else {
		$('#youmax').youmax({
			apiKey: 'AIzaSyCNbIqgoVrq7IPkHr_NBMquEXAFu9zv474',
			vimeoAccessToken: '',
			clientId: '438137961980-vlefbf8sgps4r5fqon9u92m93n0hc1pi.apps.googleusercontent.com',
			channel: '',
			youtube_playlist_videos: [{
				name: 'Videos',
				url: 'https://www.youtube.com/playlist?list=PLuy3B88HHXNlpB7NkVlN6F12mhs73CQam',
				selected: true
				}],
				loadMode: 'paginate-sides',
			loadButtonSize: 'small',
			hideHeader: true,
			hideNavigation: true,
			hideComments: true,
			maxResults: 1,
			tabStyle: 'wire',
			youmaxBackgroundColor: '#ffffff',
			maxContainerWidth: 340,
			fourColumnThumbnailWidth: '100%',
			fourColumnThumbnailLeftRightMargin: '0',
			videoProtocol: 'https:'
		});
	}
};


})
	

})(jQuery, window, document);


