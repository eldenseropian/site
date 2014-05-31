$(document).ready(function() {
  var tabs = ['code', 'craft', 'connect'];
  var displayed = tabs[2];
  $('#' + displayed + '-button').addClass('selected');
  $('#' + displayed + '-content').fadeIn('slow');

  $('.button').each(function(index) {
    $(this).click(function(e) {
    	$('#' + displayed + '-button').removeClass('selected');
      $('#' + displayed + '-content').fadeOut('fast', function() {
        $('#' + tabs[index] + '-content').fadeIn('slow');
      });     
      displayed = tabs[index];
      $('#' + displayed + '-button').addClass('selected');
    });
  });
  
  $('#github').click(openLink('http://www.github.com/lilyseropian'));
  $('#github').hover(showLinkText('#github'), hideLinkText('#github'));
  
  $('#linkedin').click(openLink('http://www.linkedin.com/in/lilyseropian'));
  $('#linkedin').hover(showLinkText('#linkedin'), hideLinkText('#linkedin'));
  
  $('#resume').click(openLink('pdfs/Seropian Resume.pdf'));
  $('#resume').hover(showLinkText('#resume'), hideLinkText('#resume'));
  
  $('#cv').click(openLink('pdfs/Seropian CV.pdf'));
  $('#cv').hover(showLinkText('#cv'), hideLinkText('#cv'));
  
  $('#email').click(function(e) {
  	window.open("mailto:lilyseropian@gmail.com")
  });
  $('#email').hover(showLinkText('#email'), hideLinkText('#email'));
});

/**
 * Open a link in the browser
 * @param {string} url the URL to open. May be external or statically hosted file.
 */
function openLink(url) {
	return function(e) {
		window.open(url);
	}
}

/**
 * Show a link overlaid on an image
 * @param {string} id the id of the .link div element to show the link for. It must have
 *     a div child (the link overlay) and an img child (the background).
 */
function showLinkText(id) {
	return function(e) {
		$(id + '>div').removeClass('hidden');
		$(id + '>img').css({'opacity': .25});
	};
}

/**
 * Hide a link overlaid on an image
 * @param {string} id the id of the .link div element to hide the link for. It must have
 *     a div child (the link overlay) and an img child (the background).
 */
function hideLinkText(id) {
	return function(e) {
		$(id + '>div').addClass('hidden');
		$(id + '>img').css({'opacity': 1});
	};
}