$(document).ready(function() {
    codeCard('#shirk', 'Shirk', 'Group Project', 'October 2014',
      '../public/images/shirk.jpg', 'Learn More', 'This academic project was implemented by Andre Aboulian, Tricia Divita, and Lily Seropian for 6.170 Software Studio.',
      'http://shirk-aandre.rhcloud.com', 'https://github.com/shirk-team/shirk');

    linkCard('#github', 'http://www.github.com/lilyseropian', 'github.com/lilyseropian', '../public/images/github.jpg', 'Connect');
    linkCard('#linkedin', 'http://www.linkedin.com/in/lilyseropian', 'linkedin.com/in/lilyseropian', '../public/images/linkedin.jpg', 'Connect');
    linkCard('#email', 'mailto:lilyseropian@gmail.com', 'lilyseropian@gmail.com', '../public/images/email.jpg', 'Connect');
    linkCard('#resume', '../public/pdfs/Seropian Resume.pdf', 'Resume', '../public/images/resume.jpg', 'Connect');
    linkCard('#cv', '../public/pdfs/Seropian CV.pdf', 'CV', '../public/images/cv.jpg', 'Connect');

    $('.tabular.menu .item').tab();
    $('.cards .image').dimmer({
        on: 'hover'
    });

});

function linkCard(selector, link, linkDisplay, imagePath, buttonText) {
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

function codeCard(selector, projectTitle, projectType, projectDate, imagePath, buttonText, projectDescription, projectSiteLink, projectCodeLink) {
    $(selector).html(
      '<div class="dimmable image">' +
        '<div class="ui dimmer">' +
          '<div class="content">' +
            '<div class="center">' +
              '<a class="ui inverted button" href="' + projectCodeLink + '">' + buttonText + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<img src="' + imagePath + '" alt=":("/>' +
      '</div>' +
      '<div class="content">' +
        '<a class="header" href="' + projectSiteLink + '">' + projectTitle + '</a>' +
        '<div class="meta">' +
          '<span>' + projectType + '</span>' +
        '</div>' +
        '<div class="description">' + projectDescription + '</div>' +
      '</div>' + 
      '<div class="extra content">' + projectDate + '</div>'
    );
}