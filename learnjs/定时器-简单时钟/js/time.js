/* 
* @Author: anchen
* @Date:   2017-03-26 11:20:06
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-26 17:51:27
*/
function turn(n){
    if(n<10)
    {
        return '0'+n;
    }
    else
    {
        return ''+n;//保证是字符串
    }

}


window.onload=function(){
    aImg=document.getElementsByTagName('img');
     function  tick(){

        var oDate=new Date();
        var str=turn(oDate.getHours())+turn(oDate.getMinutes())+turn(oDate.getSeconds());//要放内部,加号？？
        for(var i=0;i<aImg.length;i++){
        aImg[i].src='images/'+str[i]+'.png';}

    }
   
    setInterval(tick,1000);
   tick();//这样不用等一秒才加载
}
