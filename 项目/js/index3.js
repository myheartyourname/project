/*
* @Author: lenovo
* @Date:   2017-10-04 23:30:04
* @Last Modified by:   lenovo
* @Last Modified time: 2017-10-05 00:28:00
*/
window.addEventListener('load',function(){
	let hotpic=document.querySelector('.hotpic');
	let ul=document.querySelectorAll('.hotpic>.ul');
	let number=document.querySelectorAll('.number>div');
	let num=0;
	let now=0;
	let flag=true;
	let t=setInterval(move,5000);

	for (var i=0;i<number.length;i++){   //闭包函数+函数自调用
		number[i].onmouseover=(function(i){
			return function(){
				number[now].style.background='#fff';
				number[now].style.color='#000';
				animate(ul[now],{opacity:0});
        	    animate(ul[i],{opacity:1});
        	    now=i;
        	    number[i].style.background='#9d9d9d';
        	    number[i].style.color='#fff';
			}
		})(i);
	}

	function move(){
		num++;
		if (num==number.length){
			num=0;
		}
		for (let i=0;i<number.length;i++){
			number[i].style.background='#fff';
			number[i].style.color='#000';
			animate(ul[i],{opacity:0});
		}
	    animate(ul[num],{opacity:1},function(){
			flag=true;
		});
		number[num].style.background='#9d9d9d';
		number[num].style.color='#fff';
	}
	hotpic.onmouseover=function(){
		clearInterval(t);
	}
	hotpic.onmouseout=function(){
		t=setInterval(move,5000);
	}
})