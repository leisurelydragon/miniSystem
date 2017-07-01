var MyHandler={
	parentList:'',
	index_return:'';
	getIndex:function(element){
		var index=-1;
		var parentList=ele.parentElement.children;
		for(var i in parentList){
			if(!parseInt(i+"3")){
				break;
			}
			if(parentList[i]==element){
				index=i;
			}
		}
		return parseInt(index);
	},
	animation:function(ele,attribute,time){
		ele.style
	}
};
