function test_container()
{

///test funtion create  
	//matching number of cells
	var node = new Node("adf",13,131);
	var node2 = new Node("adf",13,13311);
	
	if (Node.container.all().length == 2)
	{console.log("Test - Container - create - matching number of cells - sucess");}
	else
	{console.log("Test - Container - create - matching number of cells - fail");}
	
	//same object check
	node.x = 300;
	if (Node.container.all()[0].x == node.x)
	{console.log("Test - Container - create - same object check - sucess");}
	else
	{console.log("Test - Container - create - same object check - fail");}

//test function find 
	//find the result 
	if (Node.container.find("id", 1).first().id == node.id)
	{console.log("Test - Container - find - find the result - sucess");}
	else
	{console.log("Test - Container - find - find the result - fail");}	
//test funciton destroy
	// matching Number of Cells
	node.destroy();
	if (Node.container.all().length == 1)
	{console.log("Test - Container - destroy - matching number of cells - sucess");}
	else
	{console.log("Test - Container - destroy - matching number of cells - fail");}

	//test function clone_to_container
		//Case 1 ; Matching data of cells

		var result = Node.container.clone_to_container();
		var match = true;

		if (result.all().length == Node.container.all().length)
		{
			for (i=0; i<result.all().length; i ++)
			{
				if (result.database[i]["id"] != Node.container.database[i]["id"])
				{
					match = false;
				}
				if (result.database[i]["x"] != Node.container.database[i]["x"])
				{
					match = false;
				}
				if (result.database[i]["y"] != Node.container.database[i]["y"])
				{
					match = false;
				}
			}
		}
		else
		{match = false;}

		if (match)
		{console.log("Test - Container - clone_to_container - matching data of cells - success");}
		else
		{console.log("Test - Container - clone_to_container - matching data of cells - fail");}

		//Case 2 : Confirm: is a clone , not the same object
		result.database[0]["x"] = 100;
		var success = true;
		if (result.database[0]["x"] == Node.container.database[0]["x"])
		{
			success = false;
		}
		if (result.database[0]["x"] != 100)
		{
			success = false;
		}
		if (Node.container.database[0]["x"] == 100)
		{
			success = false;
		}
		result = null;

		if (success)
		{console.log("Test - Container - clone_to_container - Confirm: is a clone , not the same object - success");}
		else
		{console.log("Test - Container - clone_to_container - Confirm: is a clone , not the same object - fail");}


}