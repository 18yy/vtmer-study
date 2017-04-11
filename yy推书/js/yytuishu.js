window.onload=function(){
    /*var oDivHomepage=document.getElementsByClassName('homepage');*/
    var aInput=document.getElementsByTagName('input');
    var oInputSearch=aInput[0];
    var oInputUsername=aInput[2];
    var oInputButton=aInput[4];
   var oBtn=document.getElementById('homepageButton');

    var oLogin=document.getElementById('Login-icon');
    var oALogin=document.getElementById('loginA');
    var oClose=document.getElementById('homepageLoginClose');
    var oDivHomepageLoginBox=document.getElementById('homepageLoginBox');




    /*鼠标聚焦文本框字消失*/
    oInputSearch.onfocus=function(){
       if(this.value=="搜索"){
            this.value="";
       }
       
    }
    oInputUsername.onfocus=function(){
       if(this.value=="用户名"){
            this.value="";
       }
       else if(this.value==""){
            this.value="用户名";
       }
       
    }
    oInputUsername.onblur=function(){
        if(this.value==""){
            this.value="用户名";
        }
    }

    /*登陆框的点击出现和消失*/
    oLogin.onclick=function(){
       oDivHomepageLoginBox.style.display='block';


    }
    oClose.onclick=function(){
       oDivHomepageLoginBox.style.display='none';

    }
   
    /*登陆按下去，小人头变成用户名,登陆框消失*/
    oInputButton.onclick=function(){
      oDivHomepageLoginBox.style.display='none';
      oLogin.style.display="none";
      oALogin.className="homepageLoginUsename";
      oALogin.innerHTML='<span >'+(oInputUsername.value)+'</span>';

    }











}