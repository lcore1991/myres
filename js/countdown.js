function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<span class="number-wrapper"><div class="line"></div><span class="number day">'+this.addZero(day)+'</span><div class="caption">Р”РЅРµР№</div></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><span class="number hour">'+this.addZero(hour)+'</span><div class="caption">Р§Р°СЃРѕРІ</div></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><span class="number min">'+this.addZero(min)+'</span><div class="caption">РњРёРЅСѓС‚</div></span><span class="number-wrapper"><div class="line"></div><span class="number sec">'+this.addZero(sec)+'</span><div class="caption">РЎРµРєСѓРЅРґ</div></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
   
   // console.log(this.tl)  
   // console.log('ghhfh') 
  // }else{
   // this.elem.innerHTML = this.mes;
   // return;
  // } 
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
/*function CDT(){

 var tl = new Date('2016/06/25 00:00:00');

 var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
 timer.countDown();
}*/
window.onload=function(){
 //CDT();
}