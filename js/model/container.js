function Container(cate)
{
	this.category = cate;
	this.database = new Array();
	
	this.insert = function(){}
	this.destroy = function(node_id){
			var not_found = this.find("id",node_id).if_empty();

			if (!not_found) {
				for(i =0 ; i < this.database.length ; i++)
				{
					if (this.database[i]["id"]== node_id)
					{break;}
				}
				this.database.splice(i,1);
				return true;
			}
			return false;
	}
	this.update = function(hash){
		var not_found = this.find("id",hash["id"]).if_empty();
		
		if (!not_found) {
			for(i =0 ; i < this.database.length ; i++)
			{
				if (this.database[i]["id"]== hash["id"])
				{break;}
			}
			this.database.splice(i,1,hash);
			return true;
		}
		return false;
	}
	
	this.get = function(index){
		return this.database[index];
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
	
	this.if_empty = function(){
		if (this.database.length == 0 )
			{return true;}
		else 
			{return false;}
	}
	
	this.first = function(){
		return this.database[0];
	}
	
	this.create = function(hash){
		//validates id
		
		if (this.find("id",hash["id"]).if_empty())
		{
			var temp_hash = $.extend({},hash);
			this.database.push(temp_hash);
			return true;
		}
		else 
		{return false;}
		//test : success
	}
	
	this.clone_to_container = function(){
		var result = new Container(this.category);
		for (var i in this.database)
		{
			result.create(this.database[i]);
		}
		return result;
		//test: debug
	}
	
	this.all = function()
	{	
		return this.database;
	}
	
}
