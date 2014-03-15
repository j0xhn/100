$(function() {

		$('#sidebar-toggle-right').click(function(){
			console.log('hi');
			$('body').toggleClass('sidebar-open-right');
		});	

		$('#sidebar-toggle-left').click(function(){
			// console.log('hi');
			$('body').toggleClass('sidebar-open-left');
		});
		//Makes lists clickable
		$(function() {
		    // make the cursor over <li> element to be a pointer instead of default
		    $('li.clickable').css('cursor', 'pointer')
		    // iterate through all <li> elements with CSS class = "clickable"
		    // and bind onclick event to each of them
		    .click(function() {
		        // when user clicks this <li> element, redirect it to the page
		        // to where the fist child <a> element points
		        window.location = $('a', this).attr('href');
		        return false;
		    });
		});

//Sidebar Demo Actions

		$('#about').click(function(){
			 console.log('about-clicked');
			$('#demo').toggleClass('about');
		});

// on overall click clearns form

	$('input')
// Grid Javascript

		// (function ($) {
		// 	var $container = $('.grid'),
		// 		colWidth = function () {
		// 			var w = $container.width(), 
		// 				columnNum = 1,
		// 				columnWidth = 0;
		// 			if (w > 1200) {
		// 				columnNum  = 10;
		// 			} else if (w > 900) {
		// 				columnNum  = 8;
		// 			} else if (w > 600) {
		// 				columnNum  = 6;
		// 			} else if (w > 400) {
		// 				columnNum  = 4;
		// 			} else if (w > 300) {
		// 				columnNum  = 3;
		// 			}
		// 			columnWidth = Math.floor(w/columnNum);
		// 			$container.find('.item').each(function() {
		// 				var $item = $(this),
		// 					multiplier_w = $item.attr('class').match(/item-w(\d)/),
		// 					multiplier_h = $item.attr('class').match(/item-h(\d)/),
		// 					width = multiplier_w ? columnWidth*multiplier_w[1]-4 : columnWidth-4,
		// 					height = multiplier_h ? columnWidth*multiplier_h[1]-4 : columnWidth-4;
		// 				$item.css({
		// 					width: width,
		// 					height: height
		// 				});
		// 			});
		// 			return columnWidth;
		// 		},
		// 		isotope = function () {
		// 			$container.isotope({
		// 				resizable: false,
		// 				itemSelector: '.item',
		// 				masonry: {
		// 					columnWidth: colWidth(),
		// 					gutterWidth: 4
		// 				}
		// 			});
		// 		};

		// 	isotope();
		// 	$(window).smartresize(isotope);
		// }(jQuery));





	


	
	
});