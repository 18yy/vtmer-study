window.onload=function(){
    var aDiv=document.getElementsByTagName('div');

    for(i=0;i<aDiv.length;i++){

        aDiv[i].alpha=10;


        aDiv[i].onmouseover=function(){
            startmove(this,300);
        }
        aDiv[i].onmouseout=function(){
            startmove(this,10);
        }
        
    }










   
   function startmove(obj,iTarget){
    clearInterval(obj.timer);
    obj.timer=setInterval(
        function(){
            var speed=(iTarget-obj.alpha)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(obj.alpha==iTarget){

                clearInterval(obj.timer);
            }
            else{
                obj.alpha+=speed;
                obj.style.filter='alpha(opacity:'+obj.alpha+')';
                obj.style.opacity=obj.alpha/100;
            }







        }

        ,30);










   }















}