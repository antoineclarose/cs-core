var i = 0;

function loop() {
    setTimeout(function () {
        i = i + 1;
        console.log('core service ' + i);

        loop();
    }, 2000);
};

loop();
