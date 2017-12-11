

window.onload = function(){
	// img 按需加载
	let vvv = document.querySelector('.vvv');
	let item = document.querySelectorAll('.vvv>li');
	let inp = document.querySelector('.top-input1');
	inp.style = 'display:none'
	vvv.style = 'display:none'
	let va = document.getElementsByClassName('vall');
	let floor = document.querySelectorAll('.floor');
	let obj = document.documentElement?document.documentElement:document.body;
	let num;
	window.onscroll = function(){
		var tt = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY || window.pageYOffset 
		for(var i = 0; i < va.length;i++){
			var tt2 = va[i].offsetTop - 200;
			var img = va[i].getElementsByTagName('img')
			if(tt > tt2){
				for(var a = 0; a < img.length;a++){
					img[a].src = img[a].getAttribute('attr')
				}
			}
		}
		// top按需加载
		if(window.pageYOffset > va[5].offsetTop ){
			vvv.style = 'display:block';
			inp.style = 'display:block';
		}else{
			vvv.style = 'display:none';
			inp.style = 'display:none';
		}

		// 楼层跳转
		for(let i = 0; i < floor.length;i++){
			floor[i].onmouseover = function(){
				for(let k = 0; k < floor.length;k++){
					item[k].style.background = '#918888';
				}
				item[i].style.background = '#D70B1C';
			}
			
		}

	}
		// 楼层点击
		for(let j = 0; j < item.length-1;j++){
			item[j].onclick = function(){
				num = j;
				// obj.scrollTop = floor[j].offsetTop - 50;
				animate(obj,{scrollTop:floor[j].offsetTop -50},Tween.Linear,function(){});
				for(let i = 0;i <item.length;i++){
					item[i].style.background = '#918888';
				}
				item[j].style.background = '#D70B1C';
			}
		}
		// 楼层背景色
		for(let w = 0; w < item.length-1;w++){
			item[w].aa = w;
			item[w].onmouseover = function(){
				item[w].style.background = '#D70B1C';
			}
			item[w].onmouseout = function(){
				if( this.aa != num){
					item[this.aa].style.background = '#918888';
				}
			}
		}

	// banna aside
	let bl = document.querySelector('.b-left');
	let li = bl.getElementsByTagName('li');
	let lia = bl.getElementsByTagName('li');
	let box1 = document.querySelectorAll('.bn_dwdw');
	for(let i = 0; i < li.length;i++){
		li[i].onmouseover = function(){
			
				box1[i].style = 'display:block';
			
		}
		li[i].onmouseout = function(){
			for(let a = 0; a < box1.length;a++){
				box1[a].style = 'display:none';
			}
		}
	}

	// banna right
	let br = document.getElementsByClassName('br4_1');
	let br5 = document.getElementsByClassName('br5');
	for(let i = 0; i < br.length; i++){
		br[i].onmouseover = function(){
			for(let a = 0; a < br5.length;a++){
				br5[a].classList.remove('br6');
				br[a].style.cssText = 'border-bottom:none;'
			}
			br5[i].classList.add('br6');
			br[i].style.cssText = 'border-bottom: 2px solid #c81623;'
			
		}
	}

	// 排行榜
	let titlebox = document.querySelector('.fx3-1')
	let title = titlebox.getElementsByTagName('a')
	let con = document.getElementsByClassName('fx3-2')
	let P = document.querySelectorAll('.fx3-1>a>p')

	for(let i = 0; i < title.length;i++){
		title[i].onmouseover = function(){
			for(let j = 0; j < con.length;j++){
				con[j].style.cssText = 'display:none;'
				P[j].style.cssText = 'width: 0'
			}
			con[i].style.cssText = 'display:block';
			P[i].style.cssText = 'width: 55px;'
			
		}
	}

	// banna轮播图
	let banna = document.querySelector('.b-center-top');
	let banna_img = document.querySelectorAll('.b-center-top>a');
	let dian = document.querySelectorAll('.lunbodian>li');
	let left = document.getElementsByClassName('banna--dw')[0];
	let right = document.getElementsByClassName('banna--dw2')[0];
	// 发现轮播图
	let big_bottom = document.querySelector('.fx2-bottom');
	let img2 = document.querySelectorAll('.fx2_bottom');
	let dian2 = document.querySelectorAll('.fx2_radius>li');
	let left2 = document.querySelector('.fx2_dw1');
	let right2 = document.querySelector('.fx2_dw2');

	// 觅me轮播图
	let xunmi = document.querySelector('.lq-2');
	let img3 = document.querySelectorAll('.lq-2-bottom');
	let dian3 = document.querySelectorAll('.xunmi_radius>li');
	let left3 = document.getElementsByClassName('xunmi_dw1')[0];
	let right3 = document.getElementsByClassName('xunmi_dw2')[0];

	// 京东直播
	let zhibo = document.querySelector('.xpz3');
	let img4 = document.querySelectorAll('.xpz3>img');
	let dian4 = document.querySelectorAll('.zhibo>li');
	let left4 = document.getElementsByClassName('xpz-dwdw1')[0];
	let right4 = document.getElementsByClassName('xpz-dwdw2')[0];

	let miaosha = document.querySelector('.ms-goods-right');
	let img5 = document.querySelectorAll('.ms-goods-right>a');
	let dian5 = document.querySelectorAll('.ms-goods-right>ul>li');

	function bann(banna,banna_img,dian,left2,right2){
		let sum = 0;
		// 时间函数
		let t = setInterval(move,4000);
		function move(type){
			type = type || 'right';
			 if(type == 'right'){
				sum++;
				if(sum == banna_img.length){
					sum = 0;
				}
			}
			else if(type == 'left'){
				sum--;
				if(sum < 0){
					sum = banna_img.length-1;
				}
			}

			for(let i = 0; i < banna_img.length;i++){
				banna_img[i].style.opacity = 0;
				dian[i].style.background = '#ccc';
			}
			banna_img[sum].style.cssText = 'opacity:1';
			dian[sum].style.background = '#db192a';
		}
		// 轮播点,点击
		dian.forEach(function(ele,index){
			ele.addEventListener('click',function(){
				for(let i = 0; i < banna_img.length;i++){
					banna_img[i].style.opacity = 0;
					dian[i].style.background = '#ccc';
				}
				banna_img[index].style.cssText = 'opacity:1';
				this.style.background = '#db192a';
				sum = index;
			})
		})

		banna.onmouseover = function(){
			clearInterval(t);
		}
		banna.onmouseout = function(){
			t = setInterval(move,4000); 
		}

		left2.addEventListener('click',function(){
			move('left');
		})
		right2.addEventListener('click',function(){
			move('right');
		})

	}

	bann(banna,banna_img,dian,left,right)
	bann(big_bottom,img2,dian2,left2,right2)
	bann(xunmi,img3,dian3,left3,right3)
	bann(zhibo,img4,dian4,left4,right4)
	bann(miaosha,img5,dian5,left4,right4)

	// 京东秒杀节点轮播
	let big_ms = document.querySelector('.ms-gs')
	// 第一个子元素
	let ms = big_ms.firstElementChild;
	// 获取子元素的宽
	let ms_width = ms.offsetWidth;
	// 子元素个数
	let count = big_ms.childElementCount;
	let ms_dw = document.getElementsByClassName('ms_dw1');
	let ms1 = ms_dw[0];
	let ms2 = ms_dw[1];
	console.log(ms2);
	let num1 = 0;
	console.log(count-1)
	// 父元素的宽
	big_ms.style.width = count*(ms_width)+'px';
	ms2.onclick = function(){
		console.log(1)
		if(num1 == count-1){
			ms2.classList.add('ms_dw2');
			ms1.classList.remove('ms_dw2');
			return;
		}
		num1++;
		big_ms.style.transform = `translateX(${-1000*num1}px)`;
	}

	ms1.onclick = function(){
		if(num1 == 0){
			ms1.classList.add('ms_dw2');
			ms2.classList.remove('ms_dw2');
			return;
		}
		num1--;
		big_ms.style.transform = `translateX(${-1000*num1}px)`;
	}


}