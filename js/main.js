Drawer.draw_node();
var node = new Node("adf",13,131);
var node2 = new Node("adf",13,13311);
node.id = 13;

console.log(node.getHash());

var temp = Node.container.clone_to_container();
temp.database["0"]["id"] = 4;

console.log(Node.container.database);
console.log(temp.database);
/*
result = Drawer.text_logic("Hefas fasdjfas fklasfs fajsd adsfj;dksfj;asdj flsdjfh sflsdf asdjf  jfalksj sdfjsdkfj ");
for (i in result)
{
	Logger.take_log("text_logic: "+ i + ": " + result[i] );
}
Logger.take_log("Program End");*/

//Drawer.draw_link();
//Drawer.draw_node();
//Drawer.text_logic("Hello World");
