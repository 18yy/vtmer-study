window.onload=function(){


   //请搜索的不见
     var aInput=document.getElementsByTagName('input');
     var oInputSearch=aInput[0];

    oInputSearch.onfocus=function(){
       if(this.value=="请搜索"){
            this.value="";
       }

    }

    

  //下拉菜单过渡动画和延时
      var oNav=document.getElementById('searchpageHeadNav');
      var aNavA=oNav.getElementsByTagName('a');
      var oTypes=aNavA[0];
      var oNavUl=document.getElementById('navUl');
      var time=null;

  /*获取非行间css样式*/
  function getStyle(obj,attr){ 
    if(obj.currentStyle){  

        return obj.currentStyle[attr];
    }
    else{

        return getComputedStyle(obj,false)[attr];   /*针对非ie*/
    }
}

    /*增加高度*/
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
  /*减小高度*/
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
 
    oNavUl.onmouseout=oTypes.onmouseout=function() {

       time=setTimeout(function(){
       subH();
   },500);
     /*延时关闭*/

 }

//详情页的出现
    var aBooks=document.getElementsByClassName('book');
    var oDtailpage=document.getElementById('typepageAlertDetails');
    var oClose=document.getElementById('close');
    
       
      for(i=0;i<aBooks.length;i++){


            aBooks[i].onclick=function(){

                /*获取页面高度和宽度*/
                var sHeight=document.documentElement.scrollHeight;
                var sWidth=document.documentElement.scrollWidth;
                var oMask=document.createElement('div');
                oMask.id="mask";
                oMask.style.height=sHeight+'px';
                oMask.style.width=sWidth+'px';
                document.body.appendChild(oMask);/*创建遮罩层*/

                 oDtailpage.style.display="block";
                 oDtailpage.style.display="flex";
               
               

               }
      }
      
        oClose.onclick=function(){

            var oMask=document.getElementById('mask');
           oDtailpage.style.display="none";
           document.body.removeChild(oMask);

        }


/*4.16完成*/































}