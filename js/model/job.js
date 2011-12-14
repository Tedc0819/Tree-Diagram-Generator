function Job(description,selector)
{
	this.selector = selector ;
	this.description = description;
	
	this.destroy = function(){
		Job.container.destroy(this);
	}
	
	this.clone = function(){
		var new_node = jQuery.extend(true, {}, this);
		return new_node;
		
	}
	
	
	this.id = Job.generate_id();
	Job.container.create(this);
	
}
Job.container = new Container();
Job.id_counter = 0;
Job.generate_id = function()
{
	Job.id_counter += 1;
	return Job.id_counter;
}

Job.do_all = function() {

	for (var i in Job.container.all())
	{
		Job.container.all()[i].selector();
	}
	
}
Job.start = function(){
	Job.setting_selector  = setInterval("Job.do_all();", 1000);
}
Job.stop = function(){
	clearInterval(Job.setting_selector)
}