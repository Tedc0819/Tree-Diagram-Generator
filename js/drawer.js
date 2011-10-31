///Desgin Constant
////Text_logic
FONT_WIDTH_HEIGHT_RATIO = 1;
BEST_WIDTH = 100;
BEST_HEIGHT= 100;
ADDITIONAL_WIDTH = 25;
WIDTH_TO_INC_MAX_LINE = 50;
BEST_NO_OF_LINE = 3;
MIN_FONT_SIZE = 12;
MAX_FONT_SIZE = 20;

/////Text Box
HORI_PADDING = 10;
VERT_PADDING = 0;
VERT_INTERVAL = 0;

var Canvas = new function(){
	var canvas = document.getElementById("tree_diagram");  
	this.context = canvas.getContext("2d");
	this.ClearContext = function(){}
}



var Drawer = new function(){
	this.ctx = Canvas.context;
	var ctx = this.ctx;
	this.draw_node = function (){
		// node input
		var x = 200;
		var y = 200;
		var text = "Contradiction";
		//
		var result = this.text_logic(text);
		
		text_size = 12;
		text_font = "abc";	
		text_color = "black";
	//	 this.draw_boundary(200,200,result["width"],result["height"]);
		var text_box = this.draw_text_box(200,200,result["width"],result["height"],true);	
		
		var text = this.draw_text(text_box,result["array_of_text"],result["font_size"]);
		

		

	}
	
	this.draw_text = function (text_box,array_of_text,font_size){
		ctx.fillStyle = text_color;
		ctx.textAlign = "center";
		ctx.font = font_size + "pt " + "Arial";
		var params = []
		for(i = 0 ;i < array_of_text.length;i++)
		{
			var x = text_box["center_x"];
			var y = text_box["y"] + (font_size)*(i+1);
			ctx.fillText(array_of_text[i], x, y);
			params[i] = [];
			params[i]["text"] = array_of_text[i];
			params[i]["x"] = x;
			params[i]["y"] = y;
		}
		console.log(params);
		return params;
		
	}
	this.draw_link = function(){
			ctx = this.ctx;
				ctx.lineWidth =  10;
				ctx.strokeStyle = "black";
				ctx.fillStyle = "white";
			ctx.beginPath();
			ctx.moveTo(200,200);
			ctx.lineTo(400,400);
			ctx.closePath();
			ctx.stroke();
		
	}
	this.draw_boundary = function(x,y,width,height)
	{	
		width =  width *1.2;
		height = height * 1.2;
		ctx.lineWidth =  5;
		ctx.strokeStyle = "black";
		ctx.fillStyle = "white";	
		ctx.beginPath();  
		ctx.moveTo(x,y-height/2);  
		ctx.quadraticCurveTo(x+width/2,y-height/2,x+width/2,y);  
		ctx.quadraticCurveTo(x+width/2,y+height/2,x,y+height/2);  
		ctx.quadraticCurveTo(x-width/2,y+height/2,x-width/2,y);  
		ctx.quadraticCurveTo(x-width/2,y-height/2,x,y-height/2);
		ctx.closePath();
		ctx.stroke();
	  	ctx.fill();
	}

	
	
	
	////////private method
	
	this.draw_text_box = function(node_x,node_y,width,height,bool)
	{
		var height = height;
		var width = width;
		var x = node_x-width/2;
		var y = node_y-height/2;
		
		ctx.lineWidth =  1;
		ctx.strokeStyle = "black";
		if (bool == true){ctx.strokeRect(x,y,width,height);}

		var params = new Array();
		params["center_x"] = node_x;
		params["center_y"] = node_y;
		params["height"] = height;
		params["width"] = width;
		params["x"] = x;
		params["y"] = y;
		
		console.log("Textbox x:"+ params["x"]+ " y:"+ params["y"] +" height:"+ params["height"] +" width:" +params["width"]);
		return params;
	}	
	this.text_logic = function(text){
		//Config

		/////
		//init//
		var font_size = 0;
		var no_of_line = 1;	
		var width = BEST_WIDTH;
		var height = BEST_HEIGHT;
		var array_of_text = new Array();
		var max_line = BEST_NO_OF_LINE;
		array_of_text[0] = text;
		var Done = false;
		var result = new Array();
		
		while (!Done)
		{	
			no_of_line = 1;
			array_of_text = [];
			array_of_text[0] = text;
			while ((no_of_line<=max_line)&&(!Done))
			{ 
			
				temp_text = this.find_the_longest(array_of_text);
				
				font_size = Math.floor(width / (temp_text.length * FONT_WIDTH_HEIGHT_RATIO));//need to modify
				
			
				if (font_size>= MIN_FONT_SIZE)
				{ 	
					if(font_size>MAX_FONT_SIZE) {font_size = MAX_FONT_SIZE;}
					if (width != BEST_WIDTH){width = this.get_width_of(array_of_text,font_size);}
					height = this.get_height_of(array_of_text,font_size);			
					result = this.confirm_params(array_of_text, font_size,height,width);
				
					Done = true;
				}
				else 
				{
					no_of_line++;
					array_of_text = this.break_down_text(text,no_of_line);
				}

			}
			width += ADDITIONAL_WIDTH;
			max_line = BEST_NO_OF_LINE + ((width - BEST_WIDTH)/WIDTH_TO_INC_MAX_LINE)
	
			
		}
		return result;		
	}	
	this.confirm_params = function(array_of_text,font_size,height,width)
	{
		var params =  new Array();
		params["array_of_text"] = array_of_text;
		params["font_size"] = font_size;
		params["height"] = height;
		params["width"] = width;

		return params;
	}	
	this.break_down_text = function (text,no_of_line)
	{	//may need a better algorithm
		//must return an arrray of strings
	
		var char_per_line = text.length / no_of_line;
		char_per_line = Math.floor(char_per_line);
		var broken_text = new Array();
		var temp_text = text;
		var broken_text_index = 0;
		
		while (temp_text.length >0 )
		{
			for (i = 0 ; i < temp_text.length; i ++)
			{
				if ((i>=char_per_line) && (temp_text[i]==" "))
				{
					//cut the text
					broken_text[broken_text_index]=temp_text.substring(0,i);
					broken_text_index += 1;				
					temp_text = temp_text.substring(i+1);
					break;
				//break
				}
				if (i == temp_text.length - 1)
				{
					//copy the remaining text
					broken_text[broken_text_index]=temp_text;
					temp_text ="";
				}
			}
		}
		return broken_text;
		
	}
	this.find_the_longest = function(array)
	{  
	 	var longest = "";
		for (i=0; i < array.length; i++)
		{
			if (longest.length < array[i].length)
			{longest = array[i];}
		}
				
		return longest;
		//Testing - Done
	}
	this.get_width_of = function (array,font_size) {
		var result = 0;

		for (i=0; i<array.length;i++){
			$("#text").html(array[i]);
				

			if ($("#text").outerWidth() > result)
			{ 
				result = $("#text").outerWidth();
				console.log("Get Width of :" + result + "i" + i);
			}
		//debugged
		}
		console.log("Get Width of :" + result);
		return result;
	}
	this.get_height_of = function (array,font_size)
	{
		var result = 0;
		for (i=0;i < array.length; i++)
		{
//			$("#text").html(array[i]);
//			$("#text").css("font-size",18);
//			result += $("#text").outerHeight();
			result += font_size;
		}
		console.log("Get Height Of :" + result);
		return result;
	}
}
