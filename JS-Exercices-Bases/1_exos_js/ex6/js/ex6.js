var p1 = document.createElement("p");
var p2 = document.createElement("p");
var body = document.body;

p1.innerHTML = "Lorem ipsum";
p2.innerHTML = "Lorem ipsum";

p1.style.padding = "2em";
p1.style.backgroundColor = "lightblue";
p1.style.border = "1px solid gray";

p2.style.padding = "2em";
p2.style.backgroundColor = "coral";
p2.style.border = "1px solid gray";

body.append(p1);
body.append(p2);