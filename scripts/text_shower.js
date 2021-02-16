function load() {
	
	jQuery(document).ready(function($) {
		 $('.post').viewportChecker({
		      classToAdd: 'visible',
		      offset: [100 OR 10%],
		      invertBottomOffset: true,
		      repeat: false,
		      callbackFunction: function(elem, action){},
		      scrollHorizontal: false
		  });
		});

}

load();