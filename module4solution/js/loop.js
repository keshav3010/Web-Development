
(function (window){
	var names = ["keshav","John","jack","master","Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var name in names){

		if ((names[name][0] === "j") || (names[name][0] === "J")){
			goodbye.printgoodbye(names[name]);
		}
		else {
			hello.printhello(names[name]);
		}
	}
})(window);
