var $ = require('jquery');
window.jQuery = $; // TODO I can't get browserify-shim to deal with this for me
require('typed.js');

$("#typed").typed({
	stringsElement: $('#typed-strings'),
	typeSpeed:      30,
	backDelay:      4000,
	loop:           true,
	contentType:    'html',
	loopCount:      false,
	callback:       function foo(){ console.log("Callback"); },
	resetCallback:  function newTyped(){ /* A new typed object */ }
});

$(".reset").click(function(){
	$("#typed").typed('reset');
});
