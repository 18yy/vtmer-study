/* 
* @Author: anchen
* @Date:   2017-03-24 16:46:17
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-24 21:08:20
*/

window.onload=function(){
    var oDiv=document.getElementById('div1');
    var aUl=oDiv.getElementsByTagName('ul')[0];
    var aTxt=oDiv.getElementsByTagName('div')[0];
    var aLi=aUl.getElementsByTagName('li');
    var aThig=["快过年了，大家要去哪玩呢～","二月天气不错呢~","三月天气不错呢~","四月天气不错呢~","五月天气不错呢~","六月天气不错呢~","七月天气不错呢~","八月天气不错呢~","九月天气不错呢~","十月天气不错呢~","十一月天气不错呢~","十二月天气不错呢~"];

    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function(){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className='';
            }
            this.className='active';
            aTxt.innerHTML='<h2>'+(this.index+1)+'月到啦</h2><p>'+aThig[this.index]+'</p>';

        }



    }








}