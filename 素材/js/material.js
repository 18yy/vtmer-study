/*window.onload*/
window.onload = function(){
    inptTxt();
    dropDown();
    myAlert();
}



function get_nextSibling(n)
{
  y=n.nextSibling;
  while (y.nodeType != 1)
  {
    y=y.nextSibling;
  }
  return y;
}




/*获取非行间css样式*/
  function getStyle(obj,attr){ 
    if(obj.currentStyle){  

        return obj.currentStyle[attr];
    }
    else{

        return getComputedStyle(obj,false)[attr];   /*针对非ie*/
    }
}





//文本输入框
function inptTxt(){
    var aInpt=document.getElementsByClassName("Tinpt");
    for(i=0;i<aInpt.length;i++){
        aInpt[i].onfocus=function(){
            if(this.value=="Keyword"||this.value=="your@email.com"){
            this.value="";
          }
        }
    }


}



//下拉菜单
function dropDown(){
            
    var aUl=document.getElementsByClassName("dropdownNav");
    var aDvalue=document.getElementsByClassName("dValue");
    var aLis1=aUl[0].getElementsByTagName("li");
    var aLis2=aUl[1].getElementsByTagName("li");
    var aLis3=aUl[2].getElementsByTagName("li");
    var time=null;


    
/*****不知道怎么封装，纠结好久总是出错只能分开了*****/
/**第一个下拉**/
    function addH1(){

    var h=parseInt(getStyle(aUl[0],'height'));

    h+=1;
    if(h<=104){

       aUl[0].style.height=h+'px';
        setTimeout(addH1,3);

    }
    else{
        return;
    }

  }

  
  function subH1(){

    var h=parseInt(getStyle(aUl[0],'height'));

    h=h-1;
    if(h>0){

       aUl[0].style.height=h+'px';
        setTimeout(subH1,3);

    }
    else{
      
       aUl[0].style.display="none";
        return;
    }
}
    aDvalue[0].onmouseover=aUl[0].onmouseover=function() {

        clearTimeout(time);
        aUl[0].style.display="block";
        addH1();


  }
 
   aDvalue[0].onmouseout=aUl[0].onmouseout=function() {

       time=setTimeout(function(){
       subH1();
   },500);
    
}
 /**第二个**/
 function addH2(){

    var h=parseInt(getStyle(aUl[1],'height'));

    h+=1;
    if(h<=104){

       aUl[1].style.height=h+'px';
        setTimeout(addH2,3);

    }
    else{
        return;
    }

  }

  
  function subH2(){

    var h=parseInt(getStyle(aUl[1],'height'));

    h=h-1;
    if(h>0){

       aUl[1].style.height=h+'px';
        setTimeout(subH2,3);

    }
    else{
      
       aUl[1].style.display="none";
        return;
    }
}
    aDvalue[1].onmouseover=aUl[1].onmouseover=function() {

        clearTimeout(time);
        aUl[1].style.display="block";
        addH2();


  }
 
   aDvalue[1].onmouseout=aUl[1].onmouseout=function() {

       time=setTimeout(function(){
       subH2();
   },500);
    
}
/**第三个**/
 function addH3(){

    var h=parseInt(getStyle(aUl[2],'height'));

    h+=1;
    if(h<=80){

       aUl[2].style.height=h+'px';
        setTimeout(addH3,3);

    }
    else{
        return;
    }

  }

  
  function subH3(){

    var h=parseInt(getStyle(aUl[2],'height'));

    h=h-1;
    if(h>0){

       aUl[2].style.height=h+'px';
        setTimeout(subH3,3);

    }
    else{
      
       aUl[2].style.display="none";
        return;
    }
}
    aDvalue[2].onmouseover=aUl[2].onmouseover=function() {

        clearTimeout(time);
        aUl[2].style.display="block";
        addH3();


  }
 
   aDvalue[2].onmouseout=aUl[2].onmouseout=function() {

       time=setTimeout(function(){
       subH3();
   },500);
    
}

    for(i=0;i<aLis1.length;i++){
        aLis1[i].onclick=function(){
            aDvalue[0].innerHTML=this.innerHTML;
            aUl[0].style.display="none";
        }
    }
    for(i=0;i<aLis2.length;i++){
        aLis2[i].onclick=function(){
            aDvalue[1].innerHTML=this.innerHTML;
            aUl[1].style.display="none";
        }
    }
    for(i=0;i<aLis3.length;i++){
        aLis3[i].onclick=function(){
            aDvalue[2].innerHTML=this.innerHTML;
            aUl[2].style.display="none";
        }
    }


}



//弹出层
function myAlert(){
    var oPosts=document.getElementsByClassName("posts-content")[0];
    var aIcons=oPosts.getElementsByTagName("i");

    for(var i=0;i<aIcons.length;i++){

            
            aIcons[i].onclick=function(){

               /**遮罩层**/
                var sHeight=document.documentElement.scrollHeight;
                var sWidth=document.documentElement.scrollWidth;
                var oMask=document.createElement("div");
                oMask.id="mask";
                oMask.style.height=sHeight+"px";
                oMask.style.width=sWidth+"px";
                document.body.appendChild(oMask);

               
                var oPdiv=this.parentNode;
                var oP=oPdiv.getElementsByClassName("msgP")[0];
                var oLi=oPdiv.getElementsByClassName("liTxt")[0];
                var oMsg=oP.firstChild.nodeValue;
                var oMsg1=oLi.firstChild.nodeValue;
                var oLiImg=get_nextSibling(oLi);
                var oImgSrc=oLiImg.firstChild.getAttribute("src");
                var oAvalue=oLiImg.lastChild.childNodes[0].nodeValue;



                /**弹出框**/
                var wHeight=document.documentElement.clientHeight;
                var oAlert=document.createElement("div");
                oAlert.id="alertBox";
                document.body.appendChild(oAlert);
                oAlert.innerHTML="<img src='images2/close.png'  id='close'><div id='wrap'><h1>WOW!DETAIL!</h1><h3>"+oMsg1+"</h3><img src='"+oImgSrc+"'><a href='#'>"+oAvalue+"</a><p>"+oMsg+"</p></div>";
                var dHeight=oAlert.offsetHeight;
                var dWidth=oAlert.offsetWidth;
                oAlert.style.left=(sWidth-dWidth)/2+"px";
                oAlert.style.top=(wHeight-dHeight)/2+70+"px";

                var oClose=document.getElementById("close");
                oClose.onclick=function(){
                    document.body.removeChild(oMask);
                    document.body.removeChild(oAlert);
               

               }
      }
      
    }
}






