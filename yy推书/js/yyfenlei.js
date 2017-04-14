window.onload=function(){
    var oTypeDiv=document.getElementById('typepageWrap');
    var oList=document.getElementById('list');
    var oContainer=document.getElementById('container');
    var oButtonsDiv=document.getElementById('buttons');
    var aButtons=oButtonsDiv.getElementsByTagName('span');
    var oBg=document.getElementById('typepageAuto');
    var aTypeInput=oTypeDiv.getElementsByTagName('input');
    var oTypeInputSearch=aTypeInput[0];


    /*请搜索的不见*/
    oTypeInputSearch.onfocus=function(){
       if(this.value=="请搜索"){
            this.value="";
       }
       
    }

           

    function animate(offset){

        var newLeft=parseInt(oList.style.left)+offset;
       
                 oList.style.left=newLeft+'px';

                if(newLeft<-2703){
                    oList.style.left=-901+'px';
                }
                 if(newLeft>-901){
                    oList.style.left=-2703+'px';
                }


    }

    /*自动播放*/
    var timer=null;

    function play(){
        timer=setInterval(function(){
            if(index==3){
                index=1;
            }
            else{
            index+=1;
        }
            showButtonsBg();
            animate(-901);


        },2500);




    }
    play();

    /*鼠标移入暂停移出继续*/
    function stop() {
                clearInterval(timer);
            }
            oContainer.onmouseover = stop;
            oContainer.onmouseout = play;

    /*小圆点跟着切换,背景图片跟着切换*/

    var index=1;  //存放当前显示第几张

    function showButtonsBg(){

        for(var i=0;i<aButtons.length;i++){

            if(aButtons[i].className=='on'){
                aButtons[i].className='';
                break;
            }
        }

        aButtons[index-1].className='on';


        if(index!=2){
        oBg.className='bg1';

        }
        else{
            oBg.className='bg2';
        }

    
    }

    /*小圆点点击时切换图片*/

    for(var i=0;i<aButtons.length;i++){

        aButtons[i].onclick=function(){

            var myindex=parseInt(this.getAttribute('index'));//getAttribute可以获取自定义属性
            var offset=-901*(myindex-index);

            animate(offset);
            index=myindex;
            showButtonsBg();
        }
    }

   
    /*详情页的出现*/
    var oTypepage=document.getElementById('typepageWrap');
    var aBooks=document.getElementsByClassName('book');
    var oDtailpage=document.getElementById('typepageAlertDetails');
    var oClose=document.getElementById('close');
    
       
      for(i=0;i<aBooks.length;i++){


            aBooks[i].onclick=function(){

                //获取页面高度和宽度
                var sHeight=document.documentElement.scrollHeight;
                var sWidth=document.documentElement.scrollWidth;
                var oMask=document.createElement('div');
                oMask.id="mask";
                oMask.style.height=sHeight+'px';
                oMask.style.height=sWidth+'px';
                document.body.appendChild(oMask);

                 oDtailpage.style.display="block";
                 oDtailpage.style.display="flex";
                /* oDtailpage.style.width="906px";
                 oDtailpage.style.width="900px";
              */
               

               }
      }
      
      oClose.onclick=function(){

        oDtailpage.style.display="none";
        document.body.removeChild(oMask);

      }
//4.14.....


     
































}