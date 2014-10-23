function output(data){
	var output = document.getElementById('output');
	output.innerHTML = '[' + (new Date()) + ']' + data + "\n" + output.innerHTML;
}

/*
console.log("LOG");
console.log("INFO");
console.warn("WARN");
console.error("ERROR");
*/
	//console.assert(i > 20, 'i est plug grand que 20');
//console.time('t1');
//console.profile('p1');
var users = [];
for(var i = 1; i <= 30; i++){
	output("Generating user #" + i);
	users.push({
		id: i,
		name: 'User #' + i,
		pass: i * Math.round(Math.random() * 1000000)
	});
}


console.profileEnd('p1');


//console.timeEnd('t1');




//console.table(users);

