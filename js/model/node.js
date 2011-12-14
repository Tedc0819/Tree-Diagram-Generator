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

	//container related method
	this.destroy = function(){
		Node.container.destroy(this);
	}
	
	this.clone = function(){
		var new_node = jQuery.extend(true, {}, this);
		return new_node;
		
	}

	this.id = Node.generate_id();
	Node.container.create(this);

}
Node.id_counter = 0;
Node.container = new Container("Node");
Node.generate_id = function()
{
	Node.id_counter += 1;
	return Node.id_counter;
}
