
function Task(task){

	
		var d = new Date();
			
			
		this.task = task;
		this.date = d.getDate();
		this.month = d.getMonth() + 1;
		this.year = d.getFullYear()
		this.complete = false;
		this.id = undefined;
	
	

}



Task.prototype.completed = function(){

	if(this.complete === false){
		this.complete = true;
	} else {
		this.complete = false;
	}

}
