$(document).ready(function() {
	jQuery(function($) {

		$('#portfolio').waypoint(function() {
			$('.sitename').toggle();
			$('.sectionnav').toggle('fade');
			}, { offset: '10%'
		});	

		$('#titlebacker').waypoint(function() {
	        $('#titlebacker').toggleClass('bowout');
	    	}, { 
	    		offset: '5%'
	    }); 

		$('a[href*=#]').click(function() {
	        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	        && location.hostname == this.hostname) {
	            var $target = $(this.hash);
	            $target = $target.length && $target
	            || $('[name=' + this.hash.slice(1) +']');
	            if ($target.length) {
	                var targetOffset = $target.offset().top - $(this).outerHeight(true);
	                $('html,body')
	                    .animate({scrollTop: targetOffset}, 1000);
	                    return false;
	            }
	        }
	    });

		$('#webdesign').waypoint(function() {
			$('.wd').text('Web');
			$('.pd, .ld, .ad').empty();
			}, {offset: 10
		});
		$('#printdesign').waypoint(function() {
			$('.pd').text('Print');
			$('.wd, .ld, .ad').empty();
			}, {offset: '10%'
		});
		$('#logodesign').waypoint(function() {
			$('.ld').text('Logo');
			$('.wd, .pd, .ad').empty();
			}, {offset: '10%'
		});
		$('#adddesign').waypoint(function() {
			$('.ad').text('Ads');
			$('.wd, .pd, .ld').empty();
			}, {offset: '10%'
		});

		$('.wd')
			.mouseenter(function(){
				$(this).text('Web');
			})
			.mouseleave(function() {
	    		$(this).empty();
  		});
		$('.wd').click(function(){
			$('.wd').text('Web');
			$('.pd, .ld, .ad').empty();
		});
		$('.pd')
			.mouseenter(function(){
				$(this).text('Print');
			})
			.mouseleave(function() {
	    		$(this).empty();
  		});
		$('.ld')
			.mouseenter(function(){
				$(this).text('Logo');
			})
			.mouseleave(function() {
	    		$(this).empty();
  		});
		$('.ad')
			.mouseenter(function(){
				$(this).text('Ads');
			})
			.mouseleave(function() {
	    		$(this).empty();
  		});
	});
});