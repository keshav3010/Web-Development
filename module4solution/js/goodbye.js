
(function (window){
	var goodbye = {};
	goodbye.printgoodbye = function(name){
		console.log("Goodbye " + name);
	}

	window.goodbye = goodbye;
})(window);