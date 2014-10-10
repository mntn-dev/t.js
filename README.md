<img src="http://mn.tn/dev/t.js/t.js.1.png" alt="" height="150" width="150"/>

<h1><a href="http://mn.tn/dev/t.js">t.js</a> - jQuery Typewriter</h1>


<img src="http://mn.tn/dev/t.js/t.1.gif" alt=""/><br/>
<img src="http://mn.tn/dev/t.js/t.2.gif" alt=""/><br/>
<img src="http://mn.tn/dev/t.js/t.3.gif" alt=""/><br/>
&rarr; <a href="http://mn.tn/dev/t.js">More examples</a>

<hr>

<h3>Features</h3>
<small>
<strong>HTML tag support</strong> &mdash; <em>The 'valid' way</em><br/>
Deleting, Delaying/Inserting via <strong>&lt;del&gt;</strong> and <strong>&lt;ins&gt;</strong><br/>
<strong>Mi$typ1ng</strong> based upon keyboard layout (<em>EN</em>, <em>DE</em>)<br/>
<strong>Pause</strong><br/>
Callbacks: <strong>init</strong>, <strong>typing</strong>, <strong>fin</strong><br/>
<strong>...</strong></small>


<h3>Usage</h3>
<small>
$(elem).t(); &rarr; types <u>elem</u>'s .html()<br/>
$(elem).t({opts}); &rarr; w/ custom settings<br/>
$(elem).t(content[,{opts}]); &rarr; content-to-<u>elem</u>;
</small>


<small>
<pre>

$(elem).t([content,]{
 
 speed:75,          // typing speed (ms)
 speed_vary:false,  // speed variation (bool)
 delay:false,       // delays start for N seconds
 mistype:false,     // mistyping: 1:N per char
 locale:'en',       // keyboard layout — 'en', 'de' ^
 caret:true,        // custom caret; default (TRUE): ▎
 blink:false,       // blink; if TRUE, 10ms or N milliseconds
 tag:'span',        // tag used for container/wrapper
 repeat:false,      // if TRUE, infinity or N times
 wrap:false,        // wrapper; id or class
 
 /*callbacks*/
 
 init:function(elem){}, 
 typing:function(elem,chars_total,chars_left){},
 fin:function(elem){}
 
});


/*methods*/

$(elem).t('add',content);         // adds content
$(elem).t('pause'[,TRUE/FALSE]);  /* pauses typing (toggles
                                  if 2nd param omitted) */

/*data/properties*/

$(elem).data('t');                // TRUE if initialised
$(elem).data('is_typing');        // (bool)
$(elem).data('pause');            // (bool)


^
^
^

</pre>
</small>
