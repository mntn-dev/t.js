<img src="http://mn.tn/dev/t.js/t.js.1.png" alt="" height="100" width="100"/>

^
^
^

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
