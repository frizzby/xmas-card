var slider = new Swipe(document.getElementById('slider'),{
			callback: function(event, index, elem) {
				setActiveItem();

				prev.show();
				next.show();
console.log(slider.getPos());
				if (slider.getPos() === 0) {
					prev.hide();					
				} else if ( slider.getPos() === (team.length - 1) ) {
					next.hide();
				}
		    }
		}
	),	
	next = $('.card-nav_next'),
	prev = $('.card-nav_prev'),
	team = $('.card-team-member'),
	name,
	setActiveItem = function(name) {		
		$('.nav-bar__item').removeClass('g-active');
		name = $(team[slider.getPos()]).attr('data-slider');
		$('.'+name).addClass('g-active');
	};
$('.card-nav_prev').on('click', function(){  	
	slider.prev();
	return false;		
});
$('.card-nav_next').on('click', function(){	
	slider.next();	
	return false;
});
$('.nav-bar__item').on('click', function(e){
	$('.nav-bar__item').removeClass('g-active');
	$(this).addClass('g-active');
	slider.slide( parseInt($(this).attr('data-slider')) ); 
});
$('.snowglobe').on('click', function(){
	$(document).snowfall('clear');
	setTimeout(function(){
		$(document).snowfall();
		$(document).snowfall({collection : '.collectonme', flakeCount : 20});
	}, 500);	
});
window.addEventListener("orientationchange", function() {
	slider.slide(slider.getPos()); 
}, false);
