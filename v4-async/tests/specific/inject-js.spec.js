browser.addCommand('isVideoPaused', async function() {
    const isPaused = await browser.execute(function() {
        const video = document.querySelector('#video1');
        return video.paused;
    })

    return isPaused.value;
});

browser.addCommand('changePlayerWidth', async function(width) {
    return browser.execute(function (newWidth) {
        const video = document.querySelector('#video1');
        return video.style.width = `${newWidth}px`;
    }, width)
})

browser.addCommand('getPlayerWidth', async function() {
    return browser.execute(function () {
        const video = document.querySelector('#video1');
        return video.style.width;
    })
})


describe('Javascript injection', function() {
    beforeEach(async function() {
        await browser.url("https://www.w3schools.com/html/html5_video.asp");
    })

    it('video should be paused by default', async function() {
        this.timeout(20000);
        const isPaused = await browser.isVideoPaused();
        expect(isPaused).to.be.true;
    });

    it('should change video width to target value', async function() {
        const newWidthInPx = 300;

        this.timeout(20000);
        await browser.changePlayerWidth(newWidthInPx);
        const currentWidth = await browser.getPlayerWidth();
        expect(currentWidth.value).to.equal(`${newWidthInPx}px`);
    });
});
