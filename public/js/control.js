$(document).ready(function() {
    codeCard('#zhift', 'Zhift', 'Schedule your way.', 'November 2014',
      '../public/images/zhift.jpg', 'Learn More', 'Finally, a free and easy online tool for managing work shifts for organizations of any size and shape.',
      'http://zhift-seropian.rhcloud.com', 'https://github.com/zhift-team/zhift');
    codeCard('#shirk', 'Shirk', 'A forgiving task manager.', 'October 2014',
      '../public/images/shirk.jpg', 'Learn More', 'This academic project was implemented by Andre Aboulian, Tricia Divita, and Lily Seropian for 6.170 Software Studio.',
      'http://shirk-seropian.rhcloud.com', 'https://github.com/shirk-team/shirk');
    codeCard('#tag', 'Tag', 'Find your way from #start to #end.', 'January 2014',
      '../public/images/tag.jpg', 'Learn More', 'Hack at Brown project.',
      'http://tag-seropian.rhcloud.com', 'https://github.com/lilyseropian/tag');

    linkCard('#lorenz', 'https://www.math.auckland.ac.nz/~hinke/crochet/othermans.html', 'The Lorenz Manifold', '../public/images/lorenz.jpg', 'See More');

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