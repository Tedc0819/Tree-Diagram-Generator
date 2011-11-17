function test_node()
{
	// Test: node -  moveTo
	var node = new Node("adfdfas",200,300);
	node.moveTo(600,600);
	
	var temp_node = Node.container.find("id", node.id).first();
	
	if (temp_node.x == 600 && temp_node.y == 600)
	{
		console.log("Test - Node - moveTo - success");
	}
	else 
	{
		console.log("Test - Node - moveTo - fail");
	}
	
	
}