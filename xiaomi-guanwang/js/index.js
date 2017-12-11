/*
* @Author: 阿杜
* @Date:   2017-12-06 09:47:11
* @Last Modified by:   阿杜
* @Last Modified time: 2017-12-06 10:58:29
*/
	window.onload=function () {
    let daohang = document.getElementsByClassName("daohangzi")[0];
    let dhz = document.querySelectorAll(".daohangzi li");
    let navkas = document.getElementsByClassName("navka");
    // console.log(dhs, navkas);
    for (let i = 0; i < dhz.length; i++) {
        dhz[i].onmouseover = function () {
            navkas[i].style.height = "200px";
        }
        dhz[i].onmouseout = function () {
            navkas[i].style.height = "0px";
        }
    }
   }




   //选项卡
	let uls = document.getElementsByClassName("liebiao-fenleibox")[0];
    let lis = uls.getElementsByClassName("liebiao-neirong");
    let items = document.getElementsByClassName("xuanxiangka");
    for (let i=0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            items[i].style.display = "block";
        }
        lis[i].onmouseout = function () {
            items[i].style.display = "none";
    }    
        
    
    }


    //家电部分函数封装
    // 1、初始效果css
		// .jd-t-lianjie:hover
		// 2、获取所有操作元素
		// *标题大盒子  .jiadian-box
		// *子元素 .jd-t-lianjie
		// 3、遍历标题
		// 给标题加.onmouseover
		// 4、添加鼠标移入事件
	 function jia(aa) {
            let content = document.getElementsByClassName("jiadian-box")[aa];
            let contentright = content.getElementsByClassName("zhuti-box");
            let headright1 = content.getElementsByClassName("jd-t-lianjie");
            // console.log(contentright,headright1);
            for (let i = 0; i < headright1.length; i++) {
                headright1[i].onmouseover = function () {
                    for (let j = 0; j < headright1.length; j++) {
                        contentright[j].style.display = "none";
                        headright1[j].style.color = "";
                        headright1[j].style.borderBottom = "";
                    }
                    contentright[i].style.display = "block";
                    headright1[i].style.color = "#ff6700";
                    headright1[i].style.borderBottom = "2px solid #ff6700";
                }
            }
        }

        var jiadian = new jia(0);
        var zhineng = new jia(1);
        var dapei = new jia(2);
        var peijian = new jia(3);
        var zhoubian=new jia(4);

 //    //轮播图
	// let banner = document.getElementsByClassName("banner")[0];
 //    let bannerpic = document.getElementsByClassName("banner-pic")[0];
 //    let lis1 = bannerpic.getElementsByTagName("li");
 //    // console.log(bannerpic,lis1);
 //    let bth = document.getElementsByClassName("bth-list")[0];
 //    console.log(bth);
 //    let lis2 = bth.getElementsByTagName("li");
 //    console.log(lis2);
 //    let back = document.getElementsByClassName("banner-left")[0];
 //    let forward = document.getElementsByClassName("banner-right")[0];

 //    let t;
 //    let num = 0;
 //    t = setInterval(fn, 2000);
 //    //banner  鼠标效果
 //    banner.onmouseover = function () {
 //        clearInterval(t);
 //    }
 //    banner.onmouseout = function () {
 //        t = setInterval(fn, 2000);
 //    }
 //    back.onclick = fn;
 //    forward.onclick = fn1;

 //    function fn() {
 //        num++;
 //        if (num == lis1.length) {
 //            num = 0;
 //        }
 //        for (let i = 0; i < lis1.length; i++) {
 //            lis1[i].style.display = "none";
 //            lis2[i].style.background = "";
 //        }
 //        lis1[num].style.display = "block";
 //        lis2[num].style.background = "#f9ff3d";
 //    }

 //    function fn1() {
 //        num--;
 //        if (num == -1) {
 //            num = lis1.length - 1;
 //        }
 //        for (let i = 0; i < lis1.length; i++) {
 //            lis1[i].style.display = "none";
 //            lis2[i].style.background = "";
 //        }
 //        lis1[num].style.display = "block";
 //        lis2[num].style.background = "#f9ff3d";
 //    }

 //    for (let i = 0; i < lis2.length; i++) {
 //        lis2[i].onclick = function () {
 //            lis1[i].style.display = "block";
 //            lis1[num].style.display = "none";
 //            lis2[i].style.background = "#f9ff3d";
 //            lis2[num].style.background = "";
 //            num = i;
 //        }
 //    }