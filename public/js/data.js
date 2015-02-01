var site = angular.module('Site', []);

site.controller('DataController', ['$scope', function($scope) {
    $scope.test = 'hi';

    $scope.codeCards = [
        {
            name: 'Zhift',
            tagline: 'Schedule your way.',
            date: 'November 2014',
            image: '../public/images/zhift.jpg',
            description: 'Finally, a free and easy online tool for managing work shifts for organizations of any size and shape.',
            projectUrl: 'http://zhift-seropian.rhcloud.com',
            learnMoreUrl: 'https://github.com/zhift-team/zhift'
        },
        {
            name: 'Shirk',
            tagline: 'A forgiving task manager.',
            date: 'October 2014',
            image: '../public/images/shirk.jpg',
            description: 'This academic project was implemented by Andre Aboulian, Tricia Divita, and Lily Seropian for 6.170 Software Studio.',
            projectUrl: 'http://shirk-seropian.rhcloud.com',
            learnMoreUrl: 'https://github.com/shirk-team/shirk'
        },
        {
            name: 'Tag',
            tagline: 'Find your way from #start to #end.',
            date: 'January 2014',
            image: '../public/images/tag.jpg',
            description: 'Hack at Brown project.',
            projectUrl: 'http://tag-seropian.rhcloud.com',
            learnMoreUrl: 'https://github.com/lilyseropian/tag'
        }
    ];

    $scope.craftCards = [
        {
            url: 'https://www.math.auckland.ac.nz/~hinke/crochet/othermans.html',
            name: 'The Lorenz Manifold',
            image: '../public/images/lorenz.jpg'
        }
    ];

    $scope.connectCards = [
        {
            url: 'http://www.github.com/lilyseropian',
            name: 'github.com/lilyseropian',
            image: '../public/images/github.jpg',
        },
        {
            url: 'http://www.linkedin.com/in/lilyseropian',
            name: 'linkedin.com/in/lilyseropian',
            image: '../public/images/linkedin.jpg',
        },
        {
            url: 'mailto:lilyseropian@gmail.com',
            name: 'lilyseropian@gmail.com',
            image: '../public/images/email.jpg',
        },
        {
            url: '../public/pdfs/Seropian Resume.pdf',
            name: 'Resume',
            image: '../public/images/resume.jpg',
        },
        {
            url: '../public/pdfs/Seropian CV.pdf',
            name: 'CV',
            image: '../public/images/cv.jpg',
        }
    ];
}]);