SystemJS.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    // tell SystemJS where to look for the dependencies
    map: {
        'plugin-babel': 'https://cdn.rawgit.com/systemjs/plugin-babel/master/plugin-babel.js',
        'systemjs-babel-build': 'https://cdn.rawgit.com/systemjs/plugin-babel/master/systemjs-babel-browser.js',

        // app scripts 
        'main': './scripts/main.js',
        'router': './configs/router-config.js',
        // 'mobileMenu': './scripts/modules/mobile-menu.js',
        // 'modal': './scripts/modules/modal.js',
        // 'validator': './js/helpers/validator.js',


        // 'htmlHandler': './scripts/helpers/html-handler.js',
        'requester': './scripts/helpers/requester.js',
        'handlebarsHandler': './scripts/helpers/handlebars-handler.js',
        'dataService': './scripts/data-service.js',

        'controller': './scripts/controller.js',
        // 'headerController': './js/controllers/header-controller.js',
        // 'accountController': '././js/controllers/account-controller.js',
        // 'footerController': './js/controllers/footer-controller.js',
        // 'chartProvider': './js/helpers/chart-provider.js',
        // 'time': './js/helpers/date-provider.js',
        // '$': 'https://code.jquery.com/jquery-3.2.1.min.js',
        // 'handlebars': 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.min.js',

    }
});