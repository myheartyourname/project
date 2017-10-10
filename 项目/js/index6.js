/*
* @Author: lenovo
* @Date:   2017-10-07 20:24:05
* @Last Modified by:   lenovo
* @Last Modified time: 2017-10-07 23:57:03
*/
window.addEventListener('load',function(){
	let banner=document.querySelector('.banner');
	let tu=document.querySelector('.banners');
	let img=document.querySelectorAll('.banners>li');
	let lunbo=document.querySelector('.yuan');
	let lis1=document.querySelectorAll('.yuan>li');
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
    		lis1[i].style.background='#414141';
    		lis1[now].style.background='#83847E';
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
		lis1[next].style.background='#414141';
    	lis1[now].style.background='#83847E';
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
		lis1[next].style.background='#414141';
    	lis1[now].style.background='#83847E';
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
    	clearInterval(t);
    	left.style.display='block';
    	right.style.display='block';
    }
    banner.onmouseout=function(){
    	t=setInterval(move,5000);
    	left.style.display='none';
    	right.style.display='none';
    }
})