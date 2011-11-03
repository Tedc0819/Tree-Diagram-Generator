function Container(cate)
{
	this.category = cate;
	this.database = new Array();
	
	this.insert = function(){}
	this.destroy = function(){}
	this.update = function(hash){
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
			console.log(cate + "has added a new object: " );
			console.log(this.database[this.database.length-1]);
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
