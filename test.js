// ==UserScript==
// @name         Just Dance Now Pictos
// @namespace    JDNAnuCore
// @version      0.0.1
// @description  Just Dance Now Pictos
// @author       ibratabian17
// @match        https://justdancenow.com/
// @icon         https://www.google.com/s2/favicons?domain=justdancenow.com
// @grant        none
// ==/UserScript==
console.log("PB double started")
function PictoBar(){
//PB Start
console.log("PB double started")
setInterval(function(){
  var checkExistClass = $(".js").hasClass("state-tutorial");
  if(checkExistClass ){
  var fixedbeat = $('.song-action__button')
  var beatdur = fixedbeat.css('animation-duration')
  const root = document.querySelector(":root"); //grabbing the root element
  console.log("PB patched")
  root.style.setProperty("--pseudo-backgroundcolor", beatdur);
        }
  }, 500);//run this thang every .5 seconds
}

PictoBar()
