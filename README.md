
<img height="250" width="250" src="http://mn.tn/dev/t.js/t.js.1.png"/>

$.Typewriter w/ nice features
===
&rarr; <a href="http://mn.tn/dev/t.js">http://mn.tn/dev/t.js</a>

<code><pre>
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
$(elem).t('pause'[,true/false]);  // pauses typing (toggles
  				  // if 2nd param omitted)

//Data/properties
$(elem).data('t');                // TRUE if initialised
$(elem).data('is_typing');        // (bool)
$(elem).data('pause');            // (bool)
</pre></code>


<pre>
Let's type
---
* $(elem).t(); ∟ the most basic usage; reads elem's .html(), types
* $(elem).t({speed:30[,..]}); ∟ same as above but with settings
* $(elem).t('msg'[,{settings}]); ∟ types msg (2nd, optionally param: settings)

Adding content / pause typing
----
* $(elem).t('add','msg');
* $(elem).t('pause'[,(bool)]);

Del/Ins: Special treatment
-----
* &lt;del&gt;Moon&lt;/del&gt;Sun is up ∟ removes/deletes Moon
* Foobar &lt;del&gt;*&lt;/del&gt;Hello! ∟ '*' deletes everything typed before; 'clearing'
* &lt;del&gt;Moon&lt;ins&gt;2.5&lt;/ins&gt;&lt;/del&gt;Sun is up ∟  waits 2.5s before removing (having an numeric ins tag inside del)
* Hold on!&lt;ins&gt;5&lt;ins&gt;&lt;br/&gt;OK. ∟ delays typing for 5s
* Very &lt;ins&gt;&lt;strong&gt;fast&lt;/strong&gt; delivery&lt;ins&gt; of content. ∟ non-numeric: inserts content instantly

Notes
----
* Avoid additional HTML tags inside &lt;del&gt;, instead--for basic styling--wrap or set attributes (&lt;del class="red"&gt;text&lt;/del&gt;)
* You can comment-out since t.js also parses for this, e.g. Foo&lt;!--&lt;del&gt;moo&lt;/del&gt;--&gt;bar or, for delaying, set ins{display:none;}
* Unset &lt;del&gt;'s strike-through-style with CSS -> del{text-decoration:none;}

Event-handling
----
* To (re)attach events on typed content, simply use $(document).on(event,elem,function(){[...]});

</pre>
