var Canvas = new function(){
	var canvas = document.getElementById("tree_diagram");  
	this.context = canvas.getContext("2d");
	this.ClearContext = function(){}
}



var Drawer = new function(){
	this.ctx = Canvas.context;
	
    this.text_logic = function(text,height,width,font_size){
		var params = new Array();
		//params["no_of_col"] = 
		

	}
	
	this.draw_node = function (){
		ctx = this.ctx;
		x = 200;
		y = 200;
		
		//TEXTBOX RECTANGLE
		textbox_height = 18;
		textbox_width = 90;
		textbox_x = x-textbox_width/2;
		textbox_y = y-textbox_height/2;
		
		height = textbox_height/0.65;
		width = textbox_width/0.75;
		
		text_size = 18;
		text_font = "Calibri";
		text = "Hello";
		text_color = "black";
		text_x = x; 
		text_y = y; 
	
		ctx.lineWidth =  10;
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
/*		
		ctx.beginPath();
		ctx.moveTo(textbox_x,textbox_y);
		ctx.lineTo(textbox_x,textbox_y+textbox_height);
		ctx.lineTo(textbox_x+textbox_width,textbox_y+textbox_height);
		ctx.lineTo(textbox_x+textbox_width,textbox_y);		
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
*/		
		ctx.fillStyle = text_color;
		ctx.textAlign = "center";
		ctx.font = text_size + "pt " + text_font;
		ctx.fillText(text, text_x, textbox_y+text_size);
		
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
	

}
