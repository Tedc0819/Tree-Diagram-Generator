function Container(cate)
{
	this.category = cate;
	this.database = new Array();
	
	this.clone_to_container = function(){
		var result = new Container(this.category);
		for (var i in this.database)
		{	
			////need to create a new object
			var new_node =  this.database[i].clone();
			result.database.push(new_node);
		}
		return result;
		//test: debug
	}
	
	this.insert = function(){}

	// tested function 
	
	this.create = function(obj){
		//validates id
		if (this.find("id",obj.id).if_empty())
		{
			this.database.push(obj);
			return true;
		}
		else 
		{return false;}
		//test : success
	}
	
	this.find = function (key,value){
		var result = new Container(this.category);
		for(var i in this.database) {
			if (this.database[i][key] == value)
			{
				result.create(this.database[i]);
			}
			
		}
		
		return result;
		//test: debug 
	}
	
	this.destroy = function(object){
			var not_found = this.find("id",object.id).if_empty();

			if (!not_found) {
				for(i =0 ; i < this.database.length ; i++)
				{
					if (this.database[i]["id"]== object.id)
					{break;}
				}
				this.database.splice(i,1);
				return true;
			}
			return false;
	}
	
	this.get = function(index){
		return this.database[index];
	}

	this.first = function(){
		return this.database[0];
	}
	
	this.all = function()
	{	
		return this.database;
	}
	this.if_empty = function(){
		if (this.database.length == 0 )
			{return true;}
		else 
			{return false;}
	}
	
	
}
