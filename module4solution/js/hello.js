(function (window){
	var hello = {};
	hello.printhello = function(name){
		console.log("Hello " + name);
	}

	window.hello = hello;
})(window);