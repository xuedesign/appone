// 顯示隱藏區塊
function $(element){
return element = document.getElementById(element);
}
function $D(){
var d=$('class1content');
var h=d.offsetHeight;
var maxh=300;
function dmove(){
h+=50; //设置层展开的速度
if(h>=maxh){
d.style.height='';
clearInterval(iIntervalId);
}else{
d.style.display='block';
d.style.height=h+'px';
}
}
iIntervalId=setInterval(dmove,2);
}
function $D2(){
var d=$('class1content');
var h=d.offsetHeight;
//var maxh=300;
function dmove(){
h-=50;//设置层收缩的速度
if(h<=0){
d.style.display='none';
clearInterval(iIntervalId);
}else{
d.style.height=h+'px';
}
}
iIntervalId=setInterval(dmove,2);
}
function $use(){
var d=$('class1content');
var sb=$('statebut');
if(d.style.display=='none'){
$D();
sb.innerHTML='縮小搜尋列';
}else{
$D2();
sb.innerHTML='展開搜尋列';
}
}