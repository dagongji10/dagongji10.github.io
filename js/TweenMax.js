$(document).ready(function(){var e=$(".share-button"),a=$(".share-toggle-button"),s=!1,n=e.length/2,t=75;function c(){(s=!s)?(TweenMax.to(a,.1,{scaleX:1.2,scaleY:.6,ease:Quad.easeOut,onComplete:function(){TweenMax.to(a,.8,{scale:.6,ease:Elastic.easeOut,easeParams:[1.1,.6]}),TweenMax.to(a.children(".share-icon"),.8,{scale:1.4,ease:Elastic.easeOut,easeParams:[1.1,.6]})}}),e.each(function(e){var a=$(this),s=e-n;s>=0&&(s+=1);var c=Math.abs(s);a.css({zIndex:n-c}),TweenMax.to(a,1.1*c,{x:s*t,scaleY:.6,scaleX:1.1,ease:Elastic.easeOut,easeParams:[1.01,.5]}),TweenMax.to(a,.8,{delay:.2*c-.1,scale:.6,ease:Elastic.easeOut,easeParams:[1.1,.6]}),TweenMax.fromTo(a.children(".share-icon"),.2,{scale:0},{delay:.2*c-.1,scale:1,ease:Quad.easeInOut})})):(TweenMax.to([a,a.children(".share-icon")],1.4,{delay:.1,scale:1,ease:Elastic.easeOut,easeParams:[1.1,.3]}),e.each(function(e){var a=$(this),s=e-n;s>=0&&(s+=1);var t=Math.abs(s);a.css({zIndex:t}),TweenMax.to(a,.4+.1*(n-t),{x:0,scale:.95,ease:Quad.easeInOut}),TweenMax.to(a.children(".share-icon"),.2,{scale:0,ease:Quad.easeIn})}))}a.on("mousedown",function(){c()})});