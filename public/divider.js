postMessage("Subtask started");

/*
onmessage = function(e) {
	e.data;
}
*/

var r = [ ];
var n = 5000000000;
for (var i = 1; i <= n; i++) {
	if (n % i == 0) {
		r.push(i);
	}
}

postMessage(r);
postMessage("Subtask stopped");
close();