window.onload=function(){
    var oTypeDiv=document.getElementById('typepageWrap');
    var oList=document.getElementById('list');
    var oContainer=document.getElementById('container');
    var oButtonsDiv=document.getElementById('buttons');
    var aButtons=oButtonsDiv.getElementsByTagName('span');
    var oBg=document.getElementById('typepageAuto');
    var aTypeInput=oTypeDiv.getElementsByTagName('input');
    var oTypeInputSearch=aTypeInput[0];


    /*请搜索的不见*/
    oTypeInputSearch.onfocus=function(){
       if(this.value=="请搜索"){
            this.value="";
       }
       
    }

           

    function animate(offset){

        var newLeft=parseInt(oList.style.left)+offset;
       
                 oList.style.left=newLeft+'px';

                if(newLeft<-2703){
                    oList.style.left=-901+'px';
                }
                 if(newLeft>-901){
                    oList.style.left=-2703+'px';
                }


    }

    /*自动播放*/
    var timer=null;

    function play(){
        timer=setInterval(function(){
            if(index==3){
                index=1;
            }
            else{
            index+=1;
        }
            showButtonsBg();
            animate(-901);


        },2500);




    }
    play();

    /*鼠标移入暂停移出继续*/
    function stop() {
                clearInterval(timer);
            }
            oContainer.onmouseover = stop;
            oContainer.onmouseout = play;

    /*小圆点跟着切换,背景图片跟着切换*/

    var index=1;  //存放当前显示第几张

    function showButtonsBg(){

        for(var i=0;i<aButtons.length;i++){

            if(aButtons[i].className=='on'){
                aButtons[i].className='';
                break;
            }
        }

        aButtons[index-1].className='on';


        if(index!=2){
        oBg.className='bg1';

        }
        else{
            oBg.className='bg2';
        }

    
    }

    /*小圆点点击时切换图片*/

    for(var i=0;i<aButtons.length;i++){

        aButtons[i].onclick=function(){

            var myindex=parseInt(this.getAttribute('index'));//getAttribute可以获取自定义属性
            var offset=-901*(myindex-index);

            animate(offset);
            index=myindex;
            showButtonsBg();
        }
    }

   
    /*详情页的出现*/
    var oTypepage=document.getElementById('typepageWrap');
    var aBooks=document.getElementsByClassName('book');
    var oDtailpage=document.getElementById('typepageAlertDetails');
    var oClose=document.getElementById('close');
    
       
      for(i=0;i<aBooks.length;i++){


            aBooks[i].onclick=function(){

                //获取页面高度和宽度
                var sHeight=document.documentElement.scrollHeight;
                var sWidth=document.documentElement.scrollWidth;
                var oMask=document.createElement('div');
                oMask.id="mask";
                oMask.style.height=sHeight+'px';
                oMask.style.width=sWidth+'px';
                document.body.appendChild(oMask);//创建遮罩层

                 oDtailpage.style.display="block";
                 oDtailpage.style.display="flex";
               
               

               }
      }
      
        oClose.onclick=function(){

            var oMask=document.getElementById('mask');
           oDtailpage.style.display="none";
           document.body.removeChild(oMask);

        }
//4.14.第二周作业
//完成分类详情
  
  /*搜索页*/

  //下拉菜单过渡动画和延时
  var oNav=document.getElementById('searchpageNav');
  var aNavA=oNav.getElementsByTagName('a');
  var oTypes=aNavA[0];
  var oNavUl=document.getElementById('navUl');
  var time=null;

  //获取非行间css样式
  function getStyle(obj,attr){ 
    if(obj.currentStyle){  

        return obj.currentStyle[attr];
    }
    else{

        return getComputedStyle(obj,false)[attr];   //针对非ie
    }
}
    //增加高度
    function addH(){
    var h=parseInt(getStyle(oNavUl,'height'));
    h+=1;
    if(h<=130){
        oNavUl.style.height=h+'px';
        setTimeout(addH,3);
    }
    else{
        return;
    }

  }
  //减小高度
  function subH(){

    var h=parseInt(getStyle(oNavUl,'height'));
    h=h-1;
    if(h>0){
        oNavUl.style.height=h+'px';
        setTimeout(subH,3);
    }
    else{
      
        oNavUl.style.display="none";

        return;
    }

}

 oNavUl.onmouseover=oTypes.onmouseover=function() {
     clearTimeout(time);
    oNavUl.style.display="block";
    addH();


  }
 
  oNavUl.onmouseout=oNavUl.onmouseout=function() {
     time=setTimeout(function(){
       subH();
    },300);
     //延时关闭

 }
//4.15中午，完成下拉菜单js





























}