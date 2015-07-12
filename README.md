
<img height="250" width="250" src="http://mn.tn/dev/t.js/t.js.1.png"/>

jQuery.Typewriter w/ nice features
===
* t.js can type HTML, mistype, repeat, insert, delete, pause, delay and 'human-like'
* Before getting started, checkout a <strong><a href="//rawgit.com/mntn-dev/t.js/master/demo.htm">demo</a></strong> (for more examples, visit <a href="http://mn.tn/t">http://mn.tn/t</a>)

<pre style="font-size:x-small">
&lt;script type="text/javascript" src="jquery.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="t.min.js"&gt;&lt;/script&gt;

$(function(){
$(elem).t([content,]{

//Basic settings
speed:75,          // typing speed (ms)
speed_vary:false,  // 'human-like' (bool)
delay:false,       // delays start for (N.)Ns
mistype:false,     // mistyping: 1:N per char
locale:'en',       // keyboard layout; 'en', 'de'
caret:true,        // caret (HTML); default (TRUE): ▎
blink:false,       // blink; if TRUE, 10ms or N ms
tag:'span',        // wrapper (.t-container/.t-caret)
repeat:false,      // if TRUE, infinite or N times

//Callbacks
init:function(elem){}, 
typing:function(elem,chars_total,chars_left,char){},
fin:function(elem){}

});});

//Methods
$(elem).t('add',content);         // adds content
$(elem).t('pause'[,true/false]);  // pauses typing (toggles if 2nd param omitted)

//Data/properties
$(elem).data('t');                // TRUE if initialised
$(elem).data('is_typing');        // (bool)
$(elem).data('pause');            // (bool)
</pre>
Let's type
---
* <code>$(elem).t();</code> ∟ the most basic usage; reads elem's <code>.html()</code>, types
* <code>$(elem).t({speed:30[,..]});</code> ∟ same as above but with settings
* <code>$(elem).t('msg'[,{settings}]);</code> ∟ types 'msg' (2nd, optionally param: settings)

Adding content / pause typing
----
* <code>$(elem).t('add','msg');</code> ∟ adds the string 'msg'
* <code>$(elem).t('pause'[,(bool)]);</code>

Del/Ins: Special treatment
-----
* <code>&lt;del&gt;Moon&lt;/del&gt;Sun is up</code> ∟ removes/deletes 'Moon'
* Foobar <code>&lt;del&gt;&#42;&lt;/del&gt;Hello!</code> ∟ '*' deletes everything typed before; 'clearing'
* <code>&lt;del&gt;Moon&lt;ins&gt;2.5&lt;/ins&gt;&lt;/del&gt;Sun is up</code> ∟  waits 2.5s before removing (having an numeric ins tag inside del)
* <code>Hold on!&lt;ins&gt;5&lt;/ins&gt;&lt;br/&gt;OK.</code> ∟ delays typing for 5 seconds
* <code>Very &lt;ins&gt;&lt;strong&gt;fast&lt;/strong&gt; delivery&lt;/ins&gt; of content.</code> ∟ non-numeric: inserts content instantly

Notes
----
* <strong>Avoid</strong> additional HTML tags inside <code>&lt;del&gt;</code>, instead--for basic styling--wrap or set attributes (<code>&lt;del class="red"&gt;text&lt;/del&gt;</code>)
* You can comment-out since t.js also parses for this, e.g. <code>Foo&lt;!--&lt;del&gt;moo&lt;/del&gt;--&gt;bar</code> or, for delaying-only-invisibility, set <code>ins{display:none;}</code>
* Unset <code>&lt;del&gt;</code>'s strike-through-style with CSS > <code>del{text-decoration:none;}</code>

Event-handling
----
* To (re)attach events on typed content, simply use <code>$(document).on(event,elem,function(){[...]});</code>


