jQuery.fn.limitWords = function(options){
	var d = {
		'counterElement':		false,
		'limit':				250,
		'underColor':			'green',
		'atColor':				'orange'
	};
	if(options){
		jQuery.extend(d, options);
	}
	$(this).keypress(function(){
		var words = $(this).val().split(/[\s]+/);
		var num_words = words.length;
		if($(this).val() == ''){
			num_words = 0;
		}
		
		var left = d.limit - num_words;
		var mreturn = true;
		
		if(d.limit){
			if(num_words > d.limit){ // over... copied in, trim it!
				if(d.counterElement && d.atColor){
					$(d.counterElement).css('color', d.overColor);
				}
				$(this).val(words.splice(0, d.limit).join(' '));
				left = 0;
				mreturn = false;
			}
			
			if(left == 0){ // at 
				if(d.counterElement && d.atColor){
					$(d.counterElement).css('color', d.atColor);
				}
			}else{ // under... we coo
				if(d.counterElement && d.underColor){
					$(d.counterElement).css('color', d.underColor);
				}
			}
			
			if(d.counterElement){
				$(d.counterElement).html(Math.abs(left) +" left");
			}
			return mreturn;
		}
	});
	$(this).click(function() {
	  $(this).keypress();
	});
	$(this).change(function() {
	  $(this).keypress();
	});
}