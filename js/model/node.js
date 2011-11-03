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
	
	this.getHash = function()
	{
		return {id:this.id, text:this.text, x:this.x, y:this.y};
	}

	//Class method

	Node.generate_id = function()
	{
		Node.id_counter += 1;
		return Node.id_counter;
	}
	
	//before save
	this.id = Node.generate_id();
	//save
	Node.container.create(this.getHash());

}
Node.id_counter = 0;
Node.container = new Container("Node");

