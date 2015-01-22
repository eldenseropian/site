$(document).ready(function() {
    card('#github', 'http://www.github.com/lilyseropian', 'github.com/lilyseropian', '../public/images/github.jpg', 'Connect');
    card('#linkedin', 'http://www.linkedin.com/in/lilyseropian', 'linkedin.com/in/lilyseropian', '../public/images/linkedin.jpg', 'Connect');
    card('#email', 'mailto:lilyseropian@gmail.com', 'lilyseropian@gmail.com', '../public/images/email.jpg', 'Connect');
    card('#resume', '../public/pdfs/Seropian Resume.pdf', 'Resume', '../public/images/resume.jpg', 'Connect');
    card('#cv', '../public/pdfs/Seropian CV.pdf', 'CV', '../public/images/cv.jpg', 'Connect');

    $('.tabular.menu .item').tab();
    $('.cards .image').dimmer({
        on: 'hover'
    });

});

function card(selector, link, linkDisplay, imagePath, buttonText) {
    $(selector).html(
      '<div class="dimmable image">' +
        '<div class="ui dimmer">' +
          '<div class="content">' +
            '<div class="center">' +
              '<a class="ui inverted button" href="' + link + '">' + buttonText + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<img src="' + imagePath + '" alt=":("/>' +
      '</div>' +
      '<div class="content">' +
        '<a class="header" href="' + link + '">' + linkDisplay + '</a>' +
      '</div>'
    );
};