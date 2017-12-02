
    const gfs = require('fs');
    var gfd;
    gfs.open("test", 'w', function(err, fd) {
        if (err)
            throw 'could not open ' + err;
        gfd = fd;
    });
    window._gfs = gfs;
    window._gfd = gfd;
    window.fuckjs = function() {
    	console.log("fuckjs");
    }
module.exports = {
	myfunc: window.fuckjs
}