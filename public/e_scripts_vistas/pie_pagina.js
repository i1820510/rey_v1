$(document).ready(function(){

    

    setInterval(function() {
        let Body = document.body
        let HT = document.documentElement
        let ctn = document.getElementById("g_g").clientHeight
        let pie = document.getElementById("pie")
        let pie1 = document.getElementById("pie").clientHeight


        if((pie1 + ctn) > HT.clientHeight ){
            pie.style.position = 'relative';
            
         }
         else if((pie1 + ctn) < HT.clientHeight){
            pie.style.position = 'absolute';
            pie.style.bottom = '0px';
            pie.style.width = '100%';
            
         } 
         else if((pie1 + ctn) === HT.clientHeight){
            pie.style.position = 'relative';
            
         }


    }, 0.1);



})