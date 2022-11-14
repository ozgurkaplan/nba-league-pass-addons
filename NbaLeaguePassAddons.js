// ==UserScript==
// @name         Nba League Pass Addons
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hides spoiler image which displayed briefly when opening a replay. Press h to hide progress bar and stream selector and s to revert it. 
// @author       Ozgur Kaplan
// @match        *://www.nba.com/game/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nba.com
// @grant        none
// ==/UserScript==

var isRunning = true;
(function() {
    'use strict';

      function onKeydown(evt) {
        // Use https://keycode.info/ to get keys
        if (evt && evt.keyCode == 72){ // h hide {
            document.getElementsByClassName('controlbarContainer')[0].style.opacity=0.0;
            document.getElementsByClassName('full-progress-bar')[0].style.opacity=0.0;
            document.getElementsByClassName('stream-selector')[0].style.opacity=0.0;
        }
        else if(evt && evt.keyCode == 83){ // s show{
            document.getElementsByClassName('controlbarContainer')[0].style.opacity=1.0;
            document.getElementsByClassName('full-progress-bar')[0].style.opacity=1.0;
            document.getElementsByClassName('stream-selector')[0].style.opacity=1.0;
        }
    }
    document.addEventListener('keydown', onKeydown, true);
    foo();
    setTimeout(function(){ isRunning= false }, 1000*60*2);
})();





function foo() {
    if(document.getElementsByClassName('content-poster') && document.getElementsByClassName('content-poster')[0]){
        document.getElementsByClassName('content-poster')[0].remove();
    }
    if(isRunning){
        setTimeout(foo, 50);
    }
}