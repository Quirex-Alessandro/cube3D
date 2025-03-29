let ws = new WebSocket("wss://localhost:8080");
let controlledByTD = document.querySelector(".controlledByTD");
let controlledByTD2 = document.querySelector(".controlledByTD2");
let controlledByTD3 = document.querySelector(".controlledByTD3");
ws.addEventListener("open", (event) => {
	console.log("Socket connection open");
	// alert('Successfully connected to socket server 🎉');
	ws.send("pong");
});
ws.addEventListener("message", (message) => {
	if (message && message.data) {
		if (message.data === "ping") {
			console.log("got ping");
			ws.send("pong");
			return;
		}
		let data = JSON.parse(message.data);
		if (data) {
			if ("slider1" in data) {
				controlledByTD.value = data["slider1"];
				controlledByTD.dispatchEvent(new Event("input"));
			}
			if ("slider2" in data) {
				controlledByTD2.value = data["slider2"];
				controlledByTD2.dispatchEvent(new Event("input2"));
			}
			if ("slider3" in data) {
				controlledByTD3.value = data["slider3"];
				controlledByTD3.dispatchEvent(new Event("input3"));
			}
			console.log(data);
		}
	}
});
