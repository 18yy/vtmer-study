window.onload=function(){
    /*var oDivHomepage=document.getElementsByClassName('homepage');*/
    var aInput=document.getElementsByTagName('input');
    var oInputSearch=aInput[0];
    var oInputUsername=aInput[1];
    var oInputButton=aInput[3];

    var oLogin=document.getElementById('homepageLogin');
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
    /*4.2晚上
    完成登陆框出现消失，文本框点击文本消失
    未：
    按钮点击颜色改变？
    密码点变星号？
    */

   



















}