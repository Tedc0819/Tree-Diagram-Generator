var Canvas = new function(){
	var canvas = document.getElementById("tree_diagram");  
	this.context = canvas.getContext("2d");
	this.ClearContext = function(){}
}



var Drawer = new function(){
	this.ctx = Canvas.context;
	this.draw_node = function (){
		ctx = this.ctx;
		x = 200;
		y = 200;
		textbox_height = 150;
		textbox_width = 200;
		height = textbox_height/0.65;
		width = textbox_width/0.75;
		radius = 10;
	
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
		
		ctx.beginPath();
		ctx.moveTo(x-textbox_width/2,y-textbox_height/2);
		ctx.lineTo(x-textbox_width/2,y+textbox_height/2);
		ctx.lineTo(x+textbox_width/2,y+textbox_height/2);
		ctx.lineTo(x+textbox_width/2,y-textbox_height/2);		
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
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
	
	this.draw_node2 = function (){
		ctx = this.ctx;
		x = 400;
		y = 400;
		textbox_height = 150;
		textbox_width = 200;
		height = textbox_height/0.65;
		width = textbox_width/0.75;
		radius = 10;
	
		ctx.lineWidth =  10;
		ctx.strokeStyle = "black";
		ctx.fillstyle = "black";
			
		ctx.beginPath();  
		ctx.moveTo(x,y-height/2);  
		ctx.quadraticCurveTo(x+width/2,y-height/2,x+width/2,y);  
		ctx.quadraticCurveTo(x+width/2,y+height/2,x,y+height/2);  
		ctx.quadraticCurveTo(x-width/2,y+height/2,x-width/2,y);  
		ctx.quadraticCurveTo(x-width/2,y-height/2,x,y-height/2);
		ctx.closePath();
		ctx.stroke();
	  ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(x-textbox_width/2,y-textbox_height/2);
		ctx.lineTo(x-textbox_width/2,y+textbox_height/2);
		ctx.lineTo(x+textbox_width/2,y+textbox_height/2);
		ctx.lineTo(x+textbox_width/2,y-textbox_height/2);		
		ctx.closePath();
		ctx.stroke();  ctx.fill();
	}
}
