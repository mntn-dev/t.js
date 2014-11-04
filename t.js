/*t.js-0.5;(c)2014 Mntn(r) <http://mn.tn/> c/o Benjamin Lips <g--AT--mn.tn>;
Licensed under the MIT License <http://mit-license.org/>;
For documentation see http://github.com/mntn-dev/t.js or http://mn.tn/dev/t.js*/


;(function($){

$.fn.t=function(content,opts){

return this.each(function(){

 var _o=opts,_c=content,c=$(this),o,oo,tt=!1,z='\u200b',q='12qwertyuiop[]\asdfghjkl;zxcvbnm,./~!@#$%^&*()_+:1234567890-=op'.split([]),
 q2='12qwertzuiop\u00fc+asdfghjkl\u00f6\u00e4#<yxcvbnm,.-!"§$%&/(()=?1234567890\u00df*p+',t=function(_1,_2){
 return $.type(_1)[0]==(_2||'n');},f=function(){g=$.grep(d,function(f){return(f[0]=='&'||!f[1]);}).length-1;return(g>-1)?g:0;};

 _c===''&&(_c='<del>*</del>');
 if(c.data('is_typing')){if(_c=='pause')c.data('pause',((t(_o,'b'))?_o:((c.data('pause'))?!1:!!1)));
 return(this);}else{if(_c=='pause')return(this);c.data('is_typing',1);}
 
 t(_c,'o')&&(_o=_c);
 
 if(/t\-/.test(c.attr('class')))return(this);
 
 if(_c=='add'&&$('.t-container',c)[0]){

  var a=_o,_o=$.extend(c.data()),$$$=c=$(':first',c);
  a='<'+_o.tag+' class="typing-add">'+a+'</'+_o.tag+'>';

 
 }else{

  if(_c=='add'){_c=_o;_o={};}

  var _o=$.extend({t:!!1,delay:!1,speed:75,speed_vary:!1,caret:'\u258e',tag:'span',blink:!1,repeat:-3,
  wrap:!1,mistype:!1,locale:'en',init:$.noop,typing:$.noop,fin:$.noop},_o),
  oo=!1,a=!1,k,d,dl,_$,$$,$$$;

  if(!$('.t-container',c)[0]){
   c.wrapInner($('<'+_o.tag+'/>',{'class':'t-container','style':'top:auto;bottom:auto;'}));
   c.css('position').match(/^[ar]/)||c.css({position:'relative'});
   c.css({overflow:'hidden'});
  }

  if(_o.wrap&&!c.parent().data('t-wrap')){
   c.wrap($('<div/>',(_o.wrap[0].match(/[.#]/))?((_o.wrap[0]=='#')?{'id':_o.wrap.substr(1)}:{'class':_o.wrap.substr(1)}):{style:_o.wrap}));
   c.parent().data('t-wrap',1);
  }

  if(t(_o.caret,'s')&&!$('.t-caret',c)[0]){
   t(_o.blink)&&_o.blink<10&&(_o.blink=10);
   oo=$('<'+_o.tag+'/>',{'class':'t-caret',html:_o.caret}).appendTo(c);
   _o.blink&&c.append(z)&&(_$=setInterval(function(){oo.toggle();},(t(_o.blink))?_o.blink:_o.speed*((_o.speed_vary)?4:5)));
  }


  _o.blink||clearInterval(_$);
  _o.speed=(!t(_o.speed)||_o.speed<1e1)?~~1e1:_o.speed;
  _o.speed_vary&&(_o.speed/=2.5);
  _o.mistype>1||(_o.mistype=!1);
  c.data(_o);

  $('.typing-0',c).replaceWith(function(){return this.childNodes;});
  $('.typing-add',c).remove();

  $$$=c=$(':first',c);
  d=(t(_c,'s'))?_c:c.html();d==''&&(d=z);c.empty();$$$.parent().show().css({visibility:'visible'});
  t(_o.delay)&&_o.delay>0&&(k=~~((_o.delay*1e3)/_o.speed));

 }




 d=String((a||d)).replace(/(.*?)[\u200b]+$/,'$1').
 replace(/<\!\-\-([\s\S]+?)\-\->/g,'$1').replace(/<ins><\/ins>/g,'').
 replace(/<(img|br|input|hr)(.*?)[\/]?>/g,'<#$1$2/>').replace(/<ins>\s*(\d+[.]?\d{0,})\s*<\/ins>/g,'<ins data-ins="$1"></ins>').
 replace(/<ins>([\s\S]+?)<\/ins>/g,function(a,b){return('<#ins>'+b.replace(/<[^#]/g,'<#')+'</ins>');}).
 replace(/<(del.*?data-del=")(.*?)(".*?)><\/(del>)/g,'<#$1$2$3><#/$4$2<#/$4').
 replace(/<del(.*?)>([\s\S]*?)<\/del>/g,function(a,b,c,d){i=(c.match(/data-ins=\"(.*?)\"/));i=(i&&i[1])?i[1]:0.25;
 c=c.replace(/<[\/]?.*?>/g,'');return('<del'+b+' data-del="'+c.replace(/\n/,'\\n')+'" data-ins="'+i+'">'+((c!='*')?c:'')+'</del>');}).
 replace(/<(\w+)(.*?)>/g,'<$1$2></$1>').replace(/<#/g,"<").
 match(/<ins>[\s\S]+?<\/ins>|<[^<]+\/>|<\/\w+>|<[\s\S]+?><\/\w+>|&[#x]?[a-z0-9]+;|\r|\n|\t|\S|\s/ig);
 !t(k)&&(k=d.shift());d.push(z);_o.locale=='de'&&(q=q2);dl=f();!a&&_o.init($$$.parent());


 $$=setInterval(function(){

  if($$$.parent().data('pause'))return;if(tt)return;tt=!tt;
  if(t(k)){if(--k){tt=!tt;return;}k=(c.data().ins)?'//':d.shift();}
  else if(_o.speed_vary&&~~(Math.random()*4)){tt=!tt;return};

  if(c.data().del){
  o=String(c.data().del);!t(k,'a')&&k[1]=='/'&&(k=o.replace(/\\n/g,'\n').split([]));
  if(t(k,'a')){if(!k.pop()){if(o=='*'){$$$.wrapInner($('<'+_o.tag+'/>',{'class':'typing-0','style':'display:none;'}));c=c.parent();
  if(a){d=$.merge(['<'+_o.tag+' class="typing-add"></'+_o.tag+'>'],d,['</'+_o.tag+'>']);c=c.parent();}}c=c.parent();
  o==z&&(c.find(':last').remove());k='';}else{c.text(k.join([]));tt=!tt;return;}}}

  while(k[1]=='/'){c=c.parent();k=d.shift()||'';}c.append(k);_o.typing($$$.parent(),f(),dl,k);!k.match(/<ins>/)&&k.match(/></)&&(c=c.find(':last'));

  if(!(k=d.shift())){clearInterval($$);$$$.parent().removeData(['is_typing','pause']);
  t(_o.repeat)&&(--_o.repeat);if(_o.repeat>-1){_o.init=$.noop;$$$.parent().t(t(_c,'o')?_o:_c,_o);return;}
  else _o.fin($$$.parent());return;}

  if(_o.mistype&&k&&!k[1]&&c.data().del!=z&&k!='\x20'&&!~~(Math.random()*_o.mistype)&&(__=$.inArray(k.toLowerCase(),q,2))>-1)
  {__+=(~~(Math.random()*2))+1;~~(Math.random()*2)&&(__-=3);d=$.merge([((k.charCodeAt(0)<0x5a)?q[__].toUpperCase():q[__]),'</del>',k],d);
  k='<del data-ins="0.25" data-del="'+z+'"></del>';}if(k&&k[1]=='/'&&c.data().ins)k=~~((Number(c.data().ins)*1e3)/_o.speed);tt=!tt;

 },_o.speed);


});}})(jQuery);
