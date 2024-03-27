
//var StoredPosts = Array.from(document.querySelectorAll(".Heroes"));

var submit = document.getElementsByClassName("thebutton");

submit[0].addEventListener("click", function() {
	var name = document.getElementById("thename").value;
	var img = document.getElementById("theimg").value;

	var reqUrl = "/addBatman"
	var promise = fetch(reqUrl, {
		method: "POST",
		body: JSON.stringify({
			name: name,
			photourl: img
		}),
		headers: {
			"Content-Type": "application/json"
		}
	}).then(function (res) {
		if(res.status === 200) {
			addBatman()
		} else {
			alert("An error occured")
		}
	}).catch(function(err) {
		alert("An error communicating with server")
	})

})

var submit2 = document.getElementsByClassName("thebutton2");

submit2[0].addEventListener("click", function() {
	var comment = document.getElementById("comments").value;

	var element = document.createElement('p');
	var text = document.createTextNode(comment);
	element.appendChild(text);

	document.body.appendChild(element);

	document.getElementById("comments").value = '';

})

function addBatman() {
	var name = document.getElementById("thename").value;
	var img = document.getElementById("theimg").value;

	// Create Div
	var div1 = document.createElement('div');
	div1.setAttribute("id", name);
	div1.className = 'Batfamily';

	// Create Header
	var h2 = document.createElement('H2');
	var textname = document.createTextNode(name);
	h2.appendChild(textname);

	// Create Img
	var img2 = document.createElement('img');
	img2.src = img;
	img2.alt = name;
	//h2.appendChild(img2);

	// Adding to Body
	var overallpost = document.getElementsByClassName("Heroes");
	div1.appendChild(h2);
	div1.appendChild(img2);
	overallpost[0].appendChild(div1);
}