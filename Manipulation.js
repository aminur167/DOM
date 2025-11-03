let div=document.createElement("div");
div.id="AminurID";
div.className="AminurClass";
let text=document.createTextNode("Inner text into the div");
div.appendChild(text);

div.innerHTML="<p>This is p tag<p>";

document.body.appendChild(div);