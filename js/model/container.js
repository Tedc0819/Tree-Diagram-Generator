function Container(cate)
{
	this.category = cate;
	this.database = new Array();
	
	this.insert = function(){}
	this.destroy = function(){}
	
	this.find = function (key,value){
		var result = new Container(this.category);
		for(var i in this.database) {
			if (this.database[i][key] == value)
			{
				result.create(this.database[i]);
			}
			
		}
		
	}
	
	
	this.update = function(hash){
	}	
	
	this.create = function(hash){
		var temp_hash = $.extend({},hash);
		this.database.push(temp_hash);
		console.log(cate + "has added a new object: " );
		console.log(this.database[this.database.length-1]);
		return hash;
		//test : success
	}
	
	this.clone_to_container = function(){
		var result = new Container(this.category);
		for (var i in this.database)
		{
			result.create(this.database[i]);
		}
		return result;
	}
	
	
	this.all = function()
	{	
		return this.database;
	}
	
}