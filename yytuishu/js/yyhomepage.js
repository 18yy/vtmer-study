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



/*获取页面高度和宽度*/
      /*var sHeight=document.documentElement.scrollHeight;
      var sWidth=document.documentElement.scrollWidth;
      var oMask=document.createElement('div');
      oMask.id="mask";
      oMask.style.height=sHeight+'px';
      oMask.style.width=sWidth+'px';
      document.body.appendChild(oMask);*//*创建遮罩层*/

       var oLoading=document.getElementById('loadingMain');
       var aCircles=oLoading.getElementsByTagName('span');
       var index=1;
       




        function showCircles(){

        setInterval(function(){


          for(var i=0;i>=aCircles.length;i++){

            if(aCircles[i].className=='on'){
                aCircles[i].className='';
                break;
            }
        }
          aCircles[index-1].className='on';

          


          
        },1000);
         index+=1;
       
      }
      showCircles();
        
       
};

