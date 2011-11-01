function Node(text,x,y)
{
	//attributes
	this.id = 0;
	this.text = text;
	this.x = x;
	this.y = y;
	
	//instance method
	this.moveTo = function(x,y){
		this.x = x;
		this.y = y;
	}

	//Class method
	
	Node.all = function ()
	{
		return 
	}
	
	Node.generate_id = function()
	{
		Node.id_counter += 1;
		return Node.id_counter;
	}
	
	//before save
	this.id = Node.generate_id();

	this.keys = new Array();
	this.keys["id"] = function (){ return self.id}
	//save


}
Node.id_counter = 0;
