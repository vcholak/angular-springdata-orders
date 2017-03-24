module.exports = function (config) {
    'use strict';
    config.set({
        reporters: ['progress', 'junit'],

        files: [
            'src/main/resources/static/app/vendor/angular/angular.js',
            'src/main/resources/static/app/vendor/angular-route/angular-route.js',
            'src/main/resources/static/app/vendor/angular-resource/angular-resource.js',
            'src/main/resources/static/app/vendor/angular-spring-data-rest/angular-spring-data-rest.js',
            'src/main/resources/static/app/vendor/angular-mocks/angular-mocks.js',
            
            'src/main/resources/static/app/**/*.module.js',
            'src/main/resources/static/app/components/**/*.js',
            'src/main/resources/static/app/home/*.js',
            'src/main/resources/static/app/customer/*.js',
            'src/main/resources/static/app/product/*.js',
            'src/main/resources/static/app/state/*.js',
            'src/main/resources/static/app/order/*.js',
                                    
            'spec/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputDir: 'reports',
            suite: 'unit'
        }
    });
};