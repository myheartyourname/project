/*
* @Author: lenovo
* @Date:   2017-10-01 21:54:22
* @Last Modified by:   lenovo
* @Last Modified time: 2017-10-03 19:27:52
*/
window.addEventListener('load',function(){
	let banner=document.querySelector('.banner');
	let tu=document.querySelector('.tu');
	let img=document.querySelectorAll('.tu>li');
	let lunbo=document.querySelector('.lunbo');
	let lis1=document.querySelectorAll('.lunbo>li');
	let left=document.querySelector('.pre');
	let right=document.querySelector('.next');
    let imgw=parseInt(getComputedStyle(tu,null).width);
    let t=setInterval(move,5000);
	let flag=true;
	let now=0;
	let next=0;
    
    for (let i=0;i<lis1.length;i++){
    	lis1[i].onclick=function(){
    		if(now==i){
    			return;
    		}
    		lis1[i].style.background='#fff';
    		lis1[now].style.background='#6B6B6B';
    		img[i].style.left=`${imgw}px`;
		    animate(img[now],{left:-imgw});
		    animate(img[i],{left:0});
		    now=next=i;
    	}
    }
    function move(){
		next++;
		if (next==img.length){
            next=0;
		}
		img[next].style.left=`${imgw}px`;
		animate(img[now],{left:-imgw});
		animate(img[next],{left:0},function(){
			flag=true;
		});
		lis1[next].style.background='#fff';
    	lis1[now].style.background='#6B6B6B';
		now=next;
	}
	function move1(){
		next--;
		if (next<0){
            next=img.length-1;
		}
		img[next].style.left=`${-imgw}px`;
		animate(img[now],{left:imgw});
		animate(img[next],{left:0},function(){
			flag=true;
		});
		lis1[next].style.background='#7c7c81';
    	lis1[now].style.background='#16161c';
		now=next;
	}
    left.onclick=function(){
    	if (!flag){
    		return;
    	}
    	move1();
    	flag=false;
    }
    right.onclick=function(){
    	if (!flag){
    		return;
    	}
    	move();
    	flag=false;
    }
    banner.onmouseover=function(){
    	left.style.display='block';
    	right.style.display='block';
    }
    banner.onmouseout=function(){
    	left.style.display='none';
    	right.style.display='none';
    }

    let danpin=document.querySelector('.danpin');
    let lis2=document.querySelectorAll('.danpin>.top>li');
    let bottom=document.querySelectorAll('.danpin>.bottom'); 
    let num=0;
	let t1=setInterval(move1,4000);
    for (var i=0;i<lis2.length;i++){   //闭包函数+函数自调用
		lis2[i].onmouseover=(function(i){
			return function(){
				lis2[now].style.borderTop='none';
				lis2[now].style.borderBottom='1px solid #414141';
				animate(bottom[now],{opacity:0});
        	    animate(bottom[i],{opacity:1});
        	    now=i;
        	    lis2[i].style.borderTop='3px solid #414141';
				lis2[i].style.borderBottom='none';
			}
		})(i);
	}
	function move1(){
		num++;
		if (num==lis2.length){
			num=0;
		}
		for (let i=0;i<lis2.length;i++){
			lis2[i].style.borderTop='none';
			lis2[i].style.borderBottom='1px solid #414141';
			animate(bottom[i],{opacity:0});
		}
	    animate(bottom[num],{opacity:1},function(){
			flag=true;
		});
		lis2[num].style.borderTop='3px solid #414141';
	    lis2[num].style.borderBottom='none';
	}
	danpin.onmouseover=function(){
    	clearInterval(t1);
    }
    danpin.onmouseout=function(){
    	t1=setInterval(move1,4000);
    }
})