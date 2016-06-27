postMessage("Subtask ready");
onmessage = function(e) {
	postMessage("Subtask started");
	var n = e.data;

	var r = [ ];
	for (var i = 1; i <= n; i++) {
		if (n % i == 0) {
			r.push(i);
		}
	}

	postMessage(r);
	postMessage("Subtask stopped");
	close();
}
