requirejs.config({
    baseUrl: 'scripts',
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'angular-route': '../bower_components/angular-route/angular-route',
        'jquery.2-1-0': '../bower_components/jquery/dist/jquery',
        'jquery.cookie': '../bower_components/jquery.cookie/jquery.cookie',
        'fastclick': '../bower_components/fastclick/lib/fastclick',
        'foundation': '../bower_components/foundation/js/foundation',
        'friends': 'friends',
        'main': 'main',
        'modernizr': '../bower_components/modernizr/modernizr'
      }
    });

requirejs(['main']);