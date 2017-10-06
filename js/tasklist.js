function TaskList(){
	this.list = this.establishSessionStorage();
	this.counter = this.counterValue();


}

TaskList.prototype.checkForExistingTasklist = function(){
	if (sessionStorage.getItem("items")){
		return true //JSON.parse(sessionStorage.getItem("items"));
	} else {
		return false //sessionStorage.setItem("items");
	}
}

TaskList.prototype.establishSessionStorage = function(){

	if (this.checkForExistingTasklist()){
		var arr = JSON.parse(sessionStorage.getItem("items"));
			
			var b=[];	

			//this takes the JSON objects and creates real javascript objects so the 
			//Task object's method can be used
			arr.forEach(function(element){
				var c =new Task(element.task);
					c.date = element.date;
					c.month = element.month;
					c.year = element.year;
					c.complete = element.complete;
					c.id = element.id;
					b.push(c);
			})
			return b;


	} else{
			sessionStorage.setItem("items", "[]");
		return JSON.parse(sessionStorage.getItem("items"));
	}

}

TaskList.prototype.checkForCounterValue = function(){
	if(sessionStorage.getItem("counter")){
		return true
	} else {
		return false;
	}
}

TaskList.prototype.counterValue = function(){
	if(this.checkForCounterValue()){
		return JSON.parse(sessionStorage.getItem("counter"));
	} else {
				sessionStorage.setItem("counter", 0);
		return JSON.parse(sessionStorage.getItem("counter"));
	}
}

TaskList.prototype.updateCounterSession = function(count){
	sessionStorage.setItem("counter", JSON.stringify(count));
}

TaskList.prototype.add = function(taskObject){

	this.assignId(taskObject);
	
	this.list.push(taskObject);
	this.updateSessionStorage(this.list);
	var count = this.counterValue();
	count++;
	console.log(count);
	this.updateCounterSession(count);

}

TaskList.prototype.updateSessionStorage = function(arr){
	sessionStorage.setItem("items", JSON.stringify(arr));

}

TaskList.prototype.remove = function(taskId){

	var arr = this.list;
	console.log(arr);
	var index;
	for(i=0; i < arr.length; i++){
		if(arr[i].id == taskId){
			index = i;
			console.log(arr[i]);
			break;
		}
	}
	
	this.list.splice(index, 1);
	this.updateSessionStorage(this.list);

}



TaskList.prototype.assignId = function(taskObject){
	var id = this.counter;
	taskObject.id = id;
}

TaskList.prototype.complete = function(taskId){

	//the completed() method here belongs to the Task object.  It alters the 'complete' property
	// if(this.list[id].complete === false){
	// 	this.list[id].complete = true;
	// } else {
	// 	this.list[id].complete = false;
	// }
// console.log(typeof(taskId));
// 	function sameId(element){
// 		return element.id === taskId;
// 	}
// 	var arr=this.list;
// 	console.log(arr);
// 	var index = arr.findIndex(sameId);
	var arr = this.list;
	console.log(arr);
	var index;
	for(i=0; i < arr.length; i++){
		if(arr[i].id == taskId){
			index = i;
			console.log(arr[i]);
			break;
		}
	}

	console.log("index is "+index);
	this.list[index].completed();
	this.updateSessionStorage(this.list);
}
