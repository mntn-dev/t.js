<p><img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/mntn-dev/t.js?color=magenta"/>
<img alt="jsDelivr hits (GitHub)" src="https://img.shields.io/jsdelivr/gh/hw/mntn-dev/t.js?color=magenta"/>
<img alt="GitHub" src="https://img.shields.io/github/license/mntn-dev/t.js?color=magenta"/>
<img alt="GitHub issues" src="https://img.shields.io/github/issues/mntn-dev/t.js?color=magenta"/>
<a target="_blank" href="https://code.jquery.com/"><img alt="GitHub issues" src="https://img.shields.io/badge/reqs-jQuery-magenta"/></a></p>
<br/><br/><img src="https://mntn-dev.github.io/t.js/t.js.gif" alt="$.t.js"/><br/>

⚠️ iOS 13.3 note (April 2020)
---
``beep[:true]`` freezes the typewriter, read more: <a href="https://github.com/mntn-dev/t.js/issues/11#issuecomment-616455871">issue #11</a>

Nice features 👌
---
* full <code>HTML</code> support
* beep-beep
* Hypertypin' Markup Language (__HTyML__):
  * deleting (<code>&lt;del&gt;</code>)
  * mistyping (<code>&lt;kbd&gt;</code> &mdash; optimized for <kbd title="english">en</kbd> and <kbd title="german">de</kbd> layouts)
  * delaying (numeric-filled <code>&lt;ins&gt;</code>)
  * instant inserts (non-numeric <code>&lt;ins&gt;</code>)
  * typing speed change (numeric-filled <code>&lt;s&gt;</code>)

Docs/demos
---
* <strong><a href="https://mntn-dev.github.io/t.js/" target="_blank">@github.io</a></strong>
* <a href="https://mntn-dev.github.io/t.js/demo.htm" target="_blank">@demo.htm</a> / <a href="https://mntn-dev.github.io/t.js/demo2.htm" target="_blank">@demo2.htm</a>
* <strike><a href="https://mn.tn/pow!" target="_blank">@Pow!</a></strike>


Latest changes
---
v   |  &nbsp;
--- | ---
1.5.6  | multiline `<del>` fix
1.5.5  | `.t_off()` fix
1.5.4  | added queued type processing (`$(elm).t('queue',content)` / `$(elm).q(content)`)
1.5.3  | added `.t_off([true])` method to destroy typer's instance
1.5.1  | added typing-speed-change at runtime: `<s>` / `$(elm).s(ms)`
1.3.1  | `pause_on_tab_switch` minor fix: keep previously paused `$(elm)` paused if window/tab is reactivated
1.3    |  added `pause_on_tab_switch` setting ([Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API))
1.2    | `beep`-relevant __AudioContext__ fix ([Safari-required](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/PlayingandSynthesizingSounds/PlayingandSynthesizingSounds.html#//apple_ref/doc/uid/TP40009523-CH6-SW2) `webkit` prefix)


💾 Font recommendations 
---
* [Steps Mono](https://github.com/raphaelbastide/steps-mono)
* [Hack](https://github.com/source-foundry/Hack)
* [Iosevka](https://github.com/be5invis/Iosevka/) ([↗](https://typeof.net/Iosevka/))
* [Lab Mono](https://github.com/hatsumatsu/Lab-Mono)
* [Monoid](https://github.com/larsenwork/monoid)
* [Victor Mono](https://github.com/rubjo/victor-mono/)
* [Tamzen](https://github.com/sunaku/tamzen-font)
* [x3x3](https://github.com/mntn-dev/x3x3#available-as-font-file)
* [Whois mono](https://github.com/raphaelbastide/Whois-mono)
* [Fixedsys Excelsior](https://github.com/kika/fixedsys)
* [PICO-8 Programming Fonts](https://github.com/juanitogan/p8-programming-fonts)
* [IBM Plex Mono](https://github.com/IBM/plex/tree/master/IBM-Plex-Mono/fonts/complete) ([↗](https://ibm.com/plex/))
* [ChicagoFLF](https://fontlibrary.org/en/font/chicagoflf) (↗)
* [VT323](https://fonts.google.com/specimen/VT323) (↗)
* [THE OLDSCHOOL PC FONT RESOURCE](https://int10h.org/oldschool-pc-fonts/fontlist/) (↗)
* [1980XX](https://arcade.itch.io/1980) (↗)
* [Decima Mono](https://myfonts.com/fonts/tipografiaramis/decima-mono/) (↗/$)

<br/><details><summary>CDN</summary><code>https://cdn.jsdelivr.net/gh/mntn-dev/t.js/t.min.js</code></details>
<details><summary>License</summary><strong>MIT</strong> <code>&lt;https://mit-license.org/&gt;</code></details>
