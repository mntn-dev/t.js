/*t.js-1.5.6;(c)2014-2019 - Mntn(r) <https://mn.tn/> c/o Benjamin Lips <g--[AT]--mn.tn>;MIT-Licensed <https://mit-license.org/>;For documentation, see <https://mntn-dev.github.io/t.js/>*/


;(function($){

$.fn.t=function($c,$o){return this.each(function(){
 
 if($c=='queue'){return($(this).q($o));}
 var _o=$o,_c=$c,c=$(this),C=c,o,_,_i,_s,oo,bi,P='paused',p=-1,tt=!1,ss=0,bs=0,bb=-1,z='\u200b',q='12qwertyuiop[]\asdfghjkl;zxcvbnm,./~!@#$%^&*()_+:1234567890-=op'.split([]),
 q2='12qwertzuiop\u00fc+asdfghjkl\u00f6\u00e4#<yxcvbnm,.-!"§$%&/(()=?1234567890\u00df*p+',t=function(_1,_2){
 return $.type(_1)[0]==(_2||'n');},f=function(){_g=$.grep(d,function(f){return(f[0]=='&'||!f[1]);}).length-1;return(_g>-1)?_g:0;},
 b=function(_){if(bb==_)return;if(!_o.blink)return;if(_o.blink_perm)return;C.data('blinking',bb=((!_)?0:1));},
 B={c:0,beep:function(){if(B.c==0)B.c=$('html').data().__TAC;if(B.o)B.o.stop();B.o=B.c.createOscillator();B.o.frequency.setValueAtTime(1,B.c.currentTime);B.g=B.c.createGain();B.o.connect(B.g);
 B.g.connect(B.c.destination);B.o.start();B.o.stop(B.c.currentTime+0.03);}};
 
 if(_c=='beep'&&!c.data().is_typing&&$('html').data().__TAC){B.beep();return(this);}
 if(_c=='speed'&&t(_o)&&_o>9){c.data('speed',_o).data('blink',Math.max(1e2,_o+c.data().ssbs));return(this);}
 
 _c===''&&(_c='<del>*</del>');
 if(c.data().is_typing){if(_c==P.slice(0,-1)){c.data(P,((t(_o,'b'))?oo_=_o:((c.data(P))?(oo_=!1):(oo_=!!1))));c.data().blink&&c.data('blinking',oo_);}
 return(this);}else{if(_c==P.slice(0,-1))return(this);c.data('is_typing',1);}
 
 t(_c,'o')&&(_o=_c);
 
 if(/t\-/.test(c.attr('class')))return(this);
  
 
 if(_c=='add'&&c.data().t){

  var a=_o,_o=$.extend({},c.data()),$$$=c=$(':first',c),T=t(_o.typing,'f');
  a='<'+_o.tag+' class="typing-add">'+a+'</'+_o.tag+'>';
  

 }else{

  if(_c=='add'){_c=_o;_o={};}


  var _o=$.extend({t:!!1,delay:!1,speed:50,speed_vary:!1,caret:'\u258e',tag:'span',blink:!!1,beep:!1,blink_perm:!1,repeat:-3,pause_on_click:!1,pause_on_tab_switch:0,
  wrap:!1,mistype:!1,locale:'en',init:!1,typing:!1,fin:!1},((_o)?_o:c.data())),
  oo=!1,a=!1,k,d,dl,$$,$$$,T;

  if(!c.data().t){
   c.wrapInner($('<'+_o.tag+'/>',{'class':'t-container','style':'top:auto;bottom:auto;'}));
   /^[ar]/.test(c.css('position'))||c.css({position:'relative'});
   c.css({overflow:'hidden'});
  }

  if(_o.wrap&&!c.parent().data().t_wrap){
   c.wrap($('<div/>',(/[.#]/.test(_o.wrap[0]))?((_o.wrap[0]=='#')?{'id':_o.wrap.substr(1)}:{'class':_o.wrap.substr(1)}):{style:_o.wrap}));
   c.parent().data('t_wrap',1);
  }

  if(!t(_o.beep,'b'))_o.beep=!1;
  if(_o.beep===!!1&&t($('html').data().__TAC,'u')){$('html').data('__TAC',__TAC=(window.AudioContext=(window.AudioContext||window.webkitAudioContext))?new AudioContext():!1);if(!__TAC)_o.beep=!1;}
  if(_o.repeat===!1)_o.repeat=-3;  
 
  (_o.blink===!!1)&&(_o.blink=_o.speed*3);(t(_o.blink))&&(_o.blink<100)&&(_o.blink=100);
  if(_o.caret===!!1)_o.caret='\u258e';if(t(_o.caret,'s')&&!$('.t-caret',c)[0]){
  (!t(_o.blink))&&(_o.blink=!1);
   
   oo=$('<'+_o.tag+'/>',{'class':'t-caret',html:_o.caret}).appendTo(c);
   _o.blink&&c.append(z)&&(c.data('bi',bi=setInterval(function(){if(C.length==0)return(clearInterval(C.data('bi')));if(++bs>=(C.data().blink)/10)bs=0;else return;if((C.data().blinking|(v=(oo.css('visibility')[0]=='h')))||_o.blink_perm)oo.css({visibility:(v)?'visible':'hidden'});},1e1)));
  }

  _o.blink||(c.data().bi&&clearInterval(c.data().bi)&&c.removeData('bi'));
  (!t(_o.blink_perm,'b'))&&(_o.blink_perm=!!1);
  _o.speed=(!t(_o.speed)||_o.speed<10)?10:_o.speed;
  _o.speed_vary&&(_o.speed/=2.5);
  _o.mistype>1||(_o.mistype=!1);
  _o.ssbs=Math.abs(_o.blink-_o.speed);
  c.data(_o);

  $('.typing-0',c).replaceWith(function(){return this.childNodes;});
  $('.typing-add',c).remove();

  $$$=c=$(':first',c);
  d=(t(_c,'s'))?_c:c.html();d==''&&(d=z);c.empty();C.show().css({visibility:'visible'});
  t(_o.delay)&&_o.delay>0&&(k=~~((_o.delay*1e3)/_o.speed))&&_o.blink_perm||(b(1));

  T=t(_o.typing,'f');
  (_o.pause_on_click===!!1)&&(c.parent().off('click').click(function(_){if($(_.target).data().click!='1')$(this).t('pause');}));
  if(_o.pause_on_tab_switch===!!1){if(t($('html').data().__TAB,'u')){$('html').data('__TAB',1);$(document).on('visibilitychange',function(){$('.t-container').parent().each(function(){h=$(document).attr('visibilityState').charAt(0);if(h=='h'&&$(this).data().paused)$(this).data('keep_paused',1);$(this).p(((h=='h')?!!1:(($(this).data().keep_paused&&$(this).removeData('keep_paused'))?!!1:!1)));});});}}
  else if(_o.pause_on_tab_switch===!1&&$('html').data().__TAB){$('html').removeData('__TAB');$(document).off('visibilitychange');}
  


 }


 /<kbd.*?>/i.test(d=String((a||d)))&&(c.parent().data('kbd',j_=1))&&(c.parent().data('mistype',((!c.parent().data('mistype')?
 _j=10:_j=c.parent().data().mistype))))&&(_o.mistype=_j)&&(_o.kbd=j_?j_:!1);
 d=d.replace(/(.*?)[\u200b]+$/,'$1'). replace(/<\!\-\-([\s\S]+?)\-\->/g,'$1').replace(/<ins>([^0-9])<\/ins>/g,'$1').
 replace(/<(embed|command|col|wbr|img|br|input|hr|area|source|track|keygen|param)(.*?)[\/]?>/g,'<#$1$2/>').replace(/<ins>\s*(\d*[.]?\d*)\s*(<\/ins>)/g,'<ins data-ins="$1"></ins>').
 replace(/<ins(.*?)>([\s\S]*?)(<\/ins>)/g,function(a,b,c){return('<#ins'+b+'>'+c.replace(/<(?!#)/g,'<#')+'<#/ins>'+(!c?'</ins>':''));}).
 replace(/<(del.*?data-del=")(.*?)(".*?)><\/(del>)/g,'<#$1$2$3><#/$4$2</$4').
 replace(/<del(.*?)>([\s\S]*?)<\/del>/g,function(a,b,c,d){_s=c.match(/<s>\s*(.*?)\s*<\/s>/i);_s=(_s&&_s[0])?(' data-s=\"'+(_s[1]||'1')+'"'):'';_i=(c.match(/data-ins=\"(.*?)\"/));_i=(_i&&_i[1])?_i[1]:((_s=='')?.25:.75);
 c=c.replace(/(<s>.*?<\/s>|<[\/]?.*?>)/g,'');return('<del'+b+_s+' data-del="'+c.replace(/\n/g,'\\n')+'" data-ins="'+_i+'">'+((c!='*')?c:'')+'</del>');}).
 replace(/<s>\s*(\d+)\s*<\/s>/g,'<s data-speed="$1"></s>').replace(/<(\w+)(.*?)>/g,'<$1$2><#/$1>').replace(/<\/(\w+)>/g,'</> ($1)').replace(/<[#]+/g,'<').replace(/(\/del>)\*</g,'$1<').
 match(/<ins.*?>[\s\S]*?<\/ins>|<[^<]+\/>|<\/> \(\w+\)|<[\s\S]+?><\/\w+>|&[#x]?[a-z0-9]+;|\r|\n|\t|\S|\s/ig);
 !t(k)&&(k=d.shift());d.push(z);_o.locale=='de'&&(q=q2);dl=f()+1;!a&&t(_o.init,'f')&&_o.init(C);


 C.data('ti',$$=setInterval(function(){
 
  _=C;if(++ss>=(_.data('speed')/10))ss=0;else return;
  if(_.data(P)){p=1;return;}if(tt)return;tt=!tt;
 
  
  if(t(k)){if(--k>0){tt=!tt;b((c.data().ins<=.25)?0:(p==1)?(p=-1):1);return;}k=(c.data().ins)?'</>':d.shift();}   
  else if(_o.speed_vary&&~~(Math.random()*4)){tt=!tt;return;}b(0);

  if(c.data().del){_.data().beep===!!1&&B.beep();if(c.data().s&&!k[0])c.text('');
  o=String(c.data().del);!t(k,'a')&&k[1]=='/'&&(k=o.replace(/\\n/g,'\n').split([]));
  if(t(k,'a')){if(!(p=k.pop())){if(o=='*'){$$$.wrapInner($('<'+_o.tag+'/>',{'class':'typing-0','style':'display:none;'}));c=c.parent();
  if(a){d=$.merge(['<'+_o.tag+' class="typing-add"></'+_o.tag+'>'],d,['</'+_o.tag+'>']);c=c.parent();}}c=c.parent();
  o==z&&(c.find(':last').remove());k='';}else{if(c.data().s){c.html(k.join([])+'<mark '+(((_s=String(c.data().s))[0]=='.')?
  'class="'+_s.substr(1)+'"':('style="background:'+((_s=='1')?'yellow':_s.split(',')[0])+(((_s=_s.split(',')[1]))?';color:'+_s:''))+';"')+'>'+
  c.data().del.substr(k.length)+'</mark>');}else{c.text(k.join([]));}tt=!tt;return;}}}

  while(k[1]=='/'){c=c.parent();k=d.shift()||'';}
  while(1){_.data().beep===!!1&&B.beep();c.append(k);T&&_o.typing(_,k,f(),dl);!/<ins.*?>[\s\S]+</.test(k)&&/></.test(k)&&(c=c.find(':last'));
  if(_ss=c.data('speed'))_.s(_ss);if(d[0]&&/<\w+/.test(d[0]))k=d.shift();else break;}
  
  if(!(k=d.shift())){clearInterval($$);_.removeData(['is_typing',P,'ti']);
  t(_o.repeat)&&(--_o.repeat);if(_o.repeat>-1){_o.init=!1;_.t(t(_c,'o')?_o:_c,_o);return;}
  else{b(1);t(_o.fin,'f')&&_o.fin(_);if(t((__q=_.data().q),'a')&&__q.length)_.a(__q.shift());}return;}

  if(((_o.mistype&&!_o.kbd)||(_o.kbd&&/kbd/i.test(c.prop('tagName'))))&&k&&!k[1]&&c.data().del!=z&&k!='\x20'&&!~~(Math.random()*_o.mistype)&&(__=$.inArray(k.toLowerCase(),q,2))>-1)
  {__+=(~~(Math.random()*2))+1;~~(Math.random()*2)&&(__-=3);d=$.merge([((k.charCodeAt(0)<0x5a)?q[__].toUpperCase():q[__]),'</del>',k],d);
  k='<del data-ins=".25" data-del="'+z+'"></del>';}if(k&&k[1]=='/'&&c.data().ins)k=~~((Number(c.data().ins)*1e3)/_.data().speed);tt=!tt;

 },1e1));


});},

$.fn.a=function($_){return this.each(function(){if($(this).data().t)$(this).t('add',$_);});},
$.fn.p=function($_){return this.each(function(){if($(this).data().is_typing)$(this).t('pause',($_)?(($_===!1||$_===!!1)?$_:undefined):undefined);});},
$.fn.b=function($_){return this.each(function(){if($(this).data().t)$(this).t('beep');});},
$.fn.s=function($_){return this.each(function(){if($(this).data().t)$(this).t('speed',$_);});},
$.fn.q=function($_){return this.each(function(){if($(this).data().t&&$.type($_)[0].match(/s|n/)){if(!(q=$(this).data()).q)q.q=[];q.q.push($_.toString());if(!$(this).data().is_typing)$(this).a(q.q.shift());};});},
$.fn.t_off=function($_){return this.each(function(){if($(this).data().t){C=$(this);if(ti=C.data('ti'))clearInterval(ti);if(bi=C.data('bi'))clearInterval(bi);C.removeData();$('.t-container',C).replaceWith(function(){return this.childNodes;});$('.t-caret',C).remove();};if($_===!!1)C.text('');});}

})(jQuery);
