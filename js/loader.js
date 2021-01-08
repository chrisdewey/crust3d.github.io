$(window).on("load",function(){
   $("#loader-wrapper").fadeOut(650);
   $("#backButton").css('display', 'inherit')
});

/** 
 * The following functions are used as a replacement for the function commented-out above.
 * The purpose of using this larger function instead of the 2-line function written above,
 * is to allow us to avoid adding the jQuery library into the website for a simple load animation.
 * We instead are allowed to acheive the same animations using only Javascript.
*/

// function attach(element,listener,ev,tf){

//     if(element.attachEvent) {
    
//         element.attachEvent("on"+listener,ev);
    
//     }else{
    
//         element.addEventListener(listener,ev,tf);
    
//     }
    
//     }
    
//     function fadeOut(element,startLevel,endLevel,duration,callback){
    
//     var fOInt;
    
//         op = startLevel;
    
//     fOInt = setInterval(function() {
    
//         if(op<=endLevel){
    
//         element.style.opacity = endLevel;
//         element.style.filter = "alpha(opacity = " + endLevel + ")";
    
//         clearInterval(fOInt);
    
//             if(typeof callback == 'function') callback(true);
    
//         }else{
    
//         op -= 0.1;
    
//         element.style.opacity = op;
//         element.style.filter = "alpha(opacity = " + op*100 + ")";
    
//         }
    
//         },duration);
    
//     }

//     function removeIt() {
//         var element = document.getElementById('loader-wrapper');
//         element.style.zIndex = -1;
//     }

//     function loadIt() {
//         fadeOut(document.getElementById('loader-wrapper'),1,0,65);
//         var element = document.getElementById('loader-wrapper');
//         element.style.zIndex = 1;
//     }

//     attach(window,'load',loadIt(),false);