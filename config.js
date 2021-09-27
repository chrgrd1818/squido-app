const config = {
    development: {
        name: 'squido FAQ',
        description: 'An FAQ theme for squido',
        twitterHandle: '@c',
        //baseUrl: 'http://localhost:4965',
        baseUrl: 'https://452d4659.squido-app.pages.dev',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8,
        plugins: [
            {
                name: 'search',
                options: {}
            }
        ],
        postBuild: [
            {
                name: 'zip',
                options: {}
            }
        ]
    },
    production: {
        name: 'squido FAQ',
        description: 'An FAQ theme for squido',
        twitterHandle: '@c',
        //baseUrl: 'https://chrgrd1818.github.io/squido-app',
        //pathPrefix: '/squido-app',
        sourcesExt: 'markdown',
        summaryLength: 250,
        sourceDir: 'source',
        buildDir: 'build',
        port: 4965,
        pagination: true,
        postPerPage: 8,
        plugins: [
            {
                name: 'search',
                options: {}
            },
            {
                name: 'robots',
                options: {}
            }
        ]
    }
};

module.exports = config;
