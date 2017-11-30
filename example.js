if(typeof exports == "undefined"){
    exports = this;
}

example = function() {
    this.init();
};

example.prototype = {
    init: function() {
         console.log('hello world!!!');
	    alert('init inside example');
    }
};

exports.example = new example();
