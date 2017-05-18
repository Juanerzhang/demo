
function $(obj){
	if(typeof obj ==='function'){
		window.onload=obj
	}
	if(typeof obj ==='string'){
		return document.getElementById(obj);
	}
}
//获取样式
function getStyle(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];}

//移动函数
function doMove(obj,attr,dir,target,endFn){
	clearInterval(obj.timer)
	dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
	obj.timer=setInterval(function(){
		var speed=parseInt(getStyle(obj,attr))+dir;
		if(speed<target && dir<0 || speed>target && dir>0){
			speed=target;
		}
		obj.style[attr]=speed+'px';
		if(speed==target){
			clearInterval(obj.timer);
			endFn && endFn();
		}
	},30)
};