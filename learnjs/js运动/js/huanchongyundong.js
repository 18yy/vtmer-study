window.onload=function(){
    var oDiv=document.getElementById('div1');
    var oBtn=document.getElementById('btn1');

    oBtn.onclick=function(){

        setInterval(function(){

            var speed=(300-oDiv.offsetLeft)/10;
            if(speed>0){
            speed=Math.ceil(speed);
        }
            else{
            speed=Math.floor(speed);
        }
            oDiv.style.left=oDiv.offsetLeft+speed+'px';
        







        },30);












    }









































































	
};