var inputs = document.getElementsByTagName("input"), 
	ilen = inputs.length,
	sampledp = document.getElementById("sampledp"),
	samplefd = document.getElementById("samplefd"),
	samplefw = document.getElementById("samplefw"),
	samplejf = document.getElementById("samplejf"),
	sampleai = document.getElementById("sampleai"),
	sampleac = document.getElementById("sampleac"),
	i = 0;

for (i=0; i<ilen; i++) {
	switch(inputs[i].name) {
	case "dp":
		inputs[i].onclick = function() {
			sampledp.style["display"] = this.value;
		};
		break;
	case "fd":
		inputs[i].onclick = function() {
			samplefd.style["flex-direction"] = this.value;
		};
		break;
	case "fw":
		inputs[i].onclick = function() {
			samplefw.style["flex-wrap"] = this.value;
		};
		break;
	case "jf":
		inputs[i].onclick = function() {
			samplejf.style["justify-content"] = this.value;
		};
		break;
	case "ai":
		inputs[i].onclick = function() {
			sampleai.style["align-items"] = this.value;
		};
		break;
	case "ac":
		inputs[i].onclick = function() {
			sampleac.style["align-content"] = this.value;
		};
		break;
	default:
		break;
	}
}