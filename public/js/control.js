$(document).ready(function() {
	var tabs = ['code', 'craft', 'connect'];
	var displayed = tabs[2];
	$('#' + displayed + '-content').fadeIn('slow');

	$('.button').each(function(index) {
		$(this).click(function(e) {
			$('#' + displayed + '-content').fadeOut('fast', function() {
				$('#' + tabs[index] + '-content').fadeIn('slow');
			});			
			displayed = tabs[index];
		});
	});
  
  $('#github').click(function(e) {
  	window.open('http://www.github.com/lilyseropian');
  });
  
  $('#github').hover(function(e) {
  	$('#github>div').removeClass('hidden');
  	$('#github>img').css({'opacity': .25});
  }, function(e) {
  	$('#github>div').addClass('hidden');
  	$('#github>img').css({'opacity': 1});
  });
  
  $('#linkedin').click(function(e) {
  	window.open('http://www.linkedin.com/in/lilyseropian');
  });
  
  $('#linkedin').hover(function(e) {
  	$('#linkedin>div').removeClass('hidden');
		$('#linkedin>img').css({'opacity': .25});
  }, function(e) {
  	$('#linkedin>div').addClass('hidden');
  	$('#linkedin>img').css({'opacity': 1});
  });
  
  $('#resume').click(function(e) {
  	window.open('pdfs/Seropian Resume.pdf');
  });
  
	$('#cv').click(function(e) {
	window.open('pdfs/Seropian CV.pdf');
  });
});