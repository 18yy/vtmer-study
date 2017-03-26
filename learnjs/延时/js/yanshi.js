window.onload=function(){
    var oDiv1=document.getElementById('div1');
    var oDiv2=document.getElementById('div2');
    var time=null;
    oDiv2.onmouseover=oDiv1.onmouseover=function(){
        clearTimeout(time);//这一个忘记了
        oDiv2.style.display='block';
    }

    oDiv2.onmouseout=oDiv1.onmouseout=function(){
        
        time=setTimeout(function(){
        oDiv2.style.display='none';
    },500);

    }

   
   

/*oDiv1.onmouseover=function(){
        clearTimeout(time);//这一个忘记了
        oDiv2.style.display='block';
    }

    oDiv1.onmouseout=function(){
        
        time=setTimeout(function(){
        oDiv2.style.display='none';
    },500);

    }

    oDiv2.onmouseover=function(){
        clearTimeout(time);

    }

    oDiv2.onmouseout=function(){
        
        time=setTimeout(function(){
        oDiv2.style.display='none';
    },500);

    }
*/



















}