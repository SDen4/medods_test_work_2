(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"game"},[s("div",{staticClass:"game__wrapper"},[s("div",{staticClass:"game__segment game__segment_1",class:{active:1===t.isActive},on:{click:function(e){return t.buttonClick(1)}}},[t._v("1")]),t._v(" "),s("div",{staticClass:"game__segment game__segment_2",class:{active:2===t.isActive},on:{click:function(e){return t.buttonClick(2)}}},[t._v("2")]),t._v(" "),s("div",{staticClass:"game__segment game__segment_3",class:{active:3===t.isActive},on:{click:function(e){return t.buttonClick(3)}}},[t._v("3")]),t._v(" "),s("div",{staticClass:"game__segment game__segment_4",class:{active:4===t.isActive},on:{click:function(e){return t.buttonClick(4)}}},[t._v("4")])])]),t._v(" "),s("button",{staticClass:"test",on:{click:t.start}},[t._v("Start")])])};i._withStripped=!0;var a={data:()=>({durationAI:500,durationEffect:250,arrayOfPlayer:[],arrayOfAi:[],aiPlay:!0,steps:1,isActive:0}),methods:{soundPlay(t){new Audio(`assets/sounds/${t}.mp3`).play()},activeButtonAI(t){this.isActive=t,this.soundPlay(t),setTimeout(()=>{this.isActive=0},this.durationEffect)},buttonClick(t){console.log(t),this.soundPlay(t)},start(){this.handleAI()},handleAI(){if(!this.aiPlay)return;let t=Math.floor(1+4*Math.random());this.arrayOfAi.push(t),this.handleAIDo(this.arrayOfAi)},handleAIDo(t){console.log(t);let e=0,s=setInterval(()=>{let i=t[e];e+=1,this.activeButtonAI(i),e>=t.length&&(e=0,clearInterval(s))},this.durationAI)}}},n=s(1),c=Object(n.a)(a,i,[],!1,null,null,null);c.options.__file="src/components/Game.vue";e.default=c.exports}}]);