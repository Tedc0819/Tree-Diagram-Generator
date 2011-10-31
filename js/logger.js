var Logger = new function(){
	
	this.log_content = "Logging...";
	
	this.take_log = function(text){
		this.log_content += "<br>";
		this.log_content += text; 
		$("#log").html(this.log_content);

	}//add log to the logger area
	
	this.clean_log = function() {
		this.log_content="Logging...";
	}//clean up the logger
	
	
	
}