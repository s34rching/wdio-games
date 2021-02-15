const mainConfig = {
    wdio: {
        browser: 'chrome',
        baseUrl: 'http://www.webdriveruniversity.com',
        waitforTimeout: 10000,
    },
    tests: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john_doe@domain.com',
    },
};

module.exports = mainConfig;
