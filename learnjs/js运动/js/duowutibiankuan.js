window.onload=function(){
    var aDiv=document.getElementsByTagName('div');

  

    for(i=0;i<aDiv.length;i++){

        aDiv.timer=null;//自定义属性!每个都有个定时器


        aDiv[i].onmousemove=function(){
            startmove(this,300);
        }
         aDiv[i].onmouseout=function(){
            startmove(this,100);
        }
    }

    function startmove(obj,iTarget){
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
        var speed=(iTarget-obj.offsetWidth)/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);

        if(obj.offsetWidth==iTarget){
            clearInterval(obj.timer);
        }
        else{
            obj.style.width=obj.offsetWidth+speed+'px';
        }



        },30);

    }


























};